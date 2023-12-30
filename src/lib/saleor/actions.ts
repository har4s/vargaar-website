import { v4 as uuidv4 } from "uuid";
import { saleorCheckoutToCart } from "./mappers";
import { executeGraphQL } from "lib/graphql";
import {
	CheckoutAddLineDocument,
	CheckoutDeleteLineDocument,
	CheckoutUpdateLineDocument,
	CompleteCheckoutDocument,
	CreateCheckoutDocument,
	CreateCheckoutPaymentDocument,
	CreateOtpDocument,
	UpdateCheckoutDeliveryMethodDocument,
	UpdateCheckoutEmailDocument,
	UpdateCheckoutShippingAddressDocument,
	UpdateUserInformationDocument,
	VerifyOtpDocument,
} from "lib/graphql/generated/graphql";
import type { Cart, ShippingAddress, User } from "lib/types";
import { cleanPhoneNumber } from "lib/utils";

export async function createCart(): Promise<Cart> {
	const saleorCheckout = await executeGraphQL(CreateCheckoutDocument, {
		variables: {
			input: {
				channel: "default-channel",
				lines: [],
			},
		},
		cache: "no-store",
	});

	if (!saleorCheckout.checkoutCreate?.checkout) {
		console.error(saleorCheckout.checkoutCreate?.errors);
		throw new Error(`Couldn't create checkout.`);
	}

	return saleorCheckoutToCart(saleorCheckout.checkoutCreate.checkout);
}

export async function addToCart(
	cartId: string,
	lines: { merchandiseId: string; quantity: number }[],
): Promise<Cart> {
	const saleorCheckout = await executeGraphQL(CheckoutAddLineDocument, {
		variables: {
			checkoutId: cartId,
			lines: lines.map(({ merchandiseId, quantity }) => ({ variantId: merchandiseId, quantity })),
		},
		cache: "no-store",
	});

	if (!saleorCheckout.checkoutLinesAdd?.checkout) {
		console.error(saleorCheckout.checkoutLinesAdd?.errors);
		throw new Error(`Couldn't add lines to checkout.`);
	}

	return saleorCheckoutToCart(saleorCheckout.checkoutLinesAdd.checkout);
}

export async function updateCart(
	cartId: string,
	lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
	const saleorCheckout = await executeGraphQL(CheckoutUpdateLineDocument, {
		variables: {
			checkoutId: cartId,
			lines: lines.map(({ id, quantity }) => ({ lineId: id, quantity })),
		},
		cache: "no-store",
	});

	if (!saleorCheckout.checkoutLinesUpdate?.checkout) {
		console.error(saleorCheckout.checkoutLinesUpdate?.errors);
		throw new Error(`Couldn't update lines in checkout.`);
	}

	return saleorCheckoutToCart(saleorCheckout.checkoutLinesUpdate.checkout);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
	const saleorCheckout = await executeGraphQL(CheckoutDeleteLineDocument, {
		variables: {
			checkoutId: cartId,
			lineIds,
		},
		cache: "no-store",
	});

	if (!saleorCheckout.checkoutLinesDelete?.checkout) {
		console.error(saleorCheckout.checkoutLinesDelete?.errors);
		throw new Error(`Couldn't remove lines from checkout.`);
	}

	return saleorCheckoutToCart(saleorCheckout.checkoutLinesDelete.checkout);
}

export async function createOtp(phoneNumber: string) {
	const result = await executeGraphQL(CreateOtpDocument, {
		variables: {
			phoneNumber: cleanPhoneNumber(phoneNumber),
		},
		cache: "no-store",
	});

	return {
		token: result.otpCreate?.token as string,
		createdAt: result.otpCreate?.createdAt as string,
	};
}

export async function verifyOtp(phoneNumber: string, publicToken: string, otp: string) {
	const result = await executeGraphQL(VerifyOtpDocument, {
		variables: {
			phoneNumber: cleanPhoneNumber(phoneNumber),
			publicToken,
			otp,
		},
		cache: "no-store",
	});

	return {
		user: result.otpVerify?.user as User,
		refreshToken: result.otpVerify?.refreshToken as string,
		csrfToken: result.otpVerify?.csrfToken as string,
	};
}

export async function updateCheckoutShippingAddress(
	checkoutId: string,
	shippingAddress: ShippingAddress,
	auth: {
		refreshToken: string;
		csrfToken: string;
		user: User;
	},
) {
	if (!auth.user.firstName) {
		await executeGraphQL(UpdateUserInformationDocument, {
			variables: {
				firstName: shippingAddress.firstName,
				lastName: shippingAddress.lastName,
			},
			withAuth: auth,
			cache: "no-store",
		});
	}

	const result = await executeGraphQL(UpdateCheckoutShippingAddressDocument, {
		variables: {
			checkoutId,
			shippingAddress: {
				firstName: shippingAddress.firstName,
				lastName: shippingAddress.lastName,
				phone: shippingAddress.phone,
				country: shippingAddress.country,
				cityArea: shippingAddress.cityArea,
				city: shippingAddress.city,
				postalCode: shippingAddress.postalCode,
				streetAddress1: shippingAddress.streetAddress1,
				streetAddress2: shippingAddress.streetAddress2,
			},
		},
		withAuth: auth,
		cache: "no-store",
	});

	return {
		cart: saleorCheckoutToCart(result.checkoutShippingAddressUpdate!.checkout!),
	};
}

export async function updateCheckoutEmail(
	checkoutId: string,
	email: string,
	auth: {
		refreshToken: string;
		csrfToken: string;
		user: User;
	},
) {
	const result = await executeGraphQL(UpdateCheckoutEmailDocument, {
		variables: {
			checkoutId,
			email,
		},
		withAuth: auth,
		cache: "no-store",
	});

	return {
		cart: saleorCheckoutToCart(result.checkoutEmailUpdate!.checkout!),
	};
}

export async function updateCheckoutDeliveryMethod(
	checkoutId: string,
	deliveryMethodId: string,
	auth: {
		refreshToken: string;
		csrfToken: string;
		user: User;
	},
) {
	const result = await executeGraphQL(UpdateCheckoutDeliveryMethodDocument, {
		variables: {
			checkoutId,
			deliveryMethodId,
		},
		withAuth: auth,
		cache: "no-store",
	});

	return {
		cart: saleorCheckoutToCart(result.checkoutDeliveryMethodUpdate!.checkout!),
	};
}

export async function createCheckoutPayment(
	checkoutId: string,
	gateway: string,
	auth: {
		refreshToken: string;
		csrfToken: string;
		user: User;
	},
) {
	const token = uuidv4();
	const result = await executeGraphQL(CreateCheckoutPaymentDocument, {
		variables: {
			checkoutId,
			input: {
				gateway,
				token,
			},
		},
		withAuth: auth,
		cache: "no-store",
	});

	return {
		payment: {
			id: result.checkoutPaymentCreate?.payment?.id as string,
		},
	};
}

export async function completeCheckout(
	checkoutId: string,
	paymentData: { [key: string]: unknown },
	auth: {
		refreshToken: string;
		csrfToken: string;
		user: User;
	},
) {
	const result = await executeGraphQL(CompleteCheckoutDocument, {
		variables: {
			checkoutId,
			paymentData: JSON.stringify(paymentData),
		},
		withAuth: auth,
		cache: "no-store",
	});

	return result.checkoutComplete;
}
