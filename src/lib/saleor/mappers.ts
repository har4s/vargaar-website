import {
	ProductMediaType,
	type GetProductBySlugQuery,
	type VariantFragment,
	type MenuItemFragment,
	type CheckoutFragment,
	type GetCollectionBySlugQuery,
	type GetCategoryBySlugQuery,
	type CartFragment,
	type CountryCode,
} from "lib/graphql/generated/graphql";
import type { Cart, Collection, Menu, Product } from "lib/types";
import { formatMoneyRange } from "lib/utils";

export function saleorProductToProduct(
	product: Exclude<GetProductBySlugQuery["product"], null | undefined>,
): Product {
	const images =
		product.media
			?.filter((media) => media.type === ProductMediaType.Image)
			.map((media) => {
				return {
					url: media.url,
					altText: media.alt || product.seoTitle || product.name,
					width: 2048,
					height: 2048,
				};
			}) || [];

	const price = formatMoneyRange({
		start: product?.pricing?.priceRange?.start?.gross,
		stop: product?.pricing?.priceRange?.stop?.gross,
	});
	const variants = saleorVariantsToVariants(product.variants);
	const availableForSale =
		!!price && !!product.isAvailableForPurchase && variants.some((variant) => !!variant.availableForSale);

	return {
		id: product.id,
		handle: product.slug,
		path: `/product/${product.slug}/`,
		availableForSale,
		title: product.name,
		description: product.description || "",
		descriptionHtml: product.description ?? "",
		options: saleorVariantsToOptions(product.variants),
		priceRange: {
			maxVariantPrice: {
				amount: product.pricing?.priceRange?.stop?.gross.amount.toString() || "0",
				currencyCode: product.pricing?.priceRange?.stop?.gross.currency || "",
			},
			minVariantPrice: {
				amount: product.pricing?.priceRange?.start?.gross.amount.toString() || "0",
				currencyCode: product.pricing?.priceRange?.start?.gross.currency || "",
			},
		},
		price: price ?? "0",
		variants,
		images: images,
		featuredImage: images[0]!,
		seo: {
			title: product.seoTitle || product.name,
			description: product.seoDescription || "",
		},
		tags: product.collections?.map((c) => c.name) || [],
		updatedAt: product.updatedAt,
		bgColor: product.bgColor as string,
	};
}

export function saleorVariantsToOptions(variants: VariantFragment[] | null | undefined) {
	return (
		variants
			?.flatMap((variant) => {
				return variant.attributes.flatMap((attribute) => {
					return {
						id: attribute.attribute.slug || "",
						name: attribute.attribute.name || "",
						values: attribute.attribute.choices?.edges.map((choice) => choice.node.name || "") || [],
					};
				});
			})
			.filter(
				(value1, idx, arr) =>
					// filter unique
					arr.findIndex((value2) => value1.id === value2.id) === idx,
			) || []
	);
}

export function saleorVariantsToVariants(
	variants: null | undefined | VariantFragment[],
): Product["variants"] {
	return (
		variants?.map((variant) => {
			return {
				id: variant.id,
				title: variant.name,
				availableForSale: !!variant.quantityAvailable || false,
				selectedOptions: variant.attributes.flatMap((attribute) => {
					return attribute.values.map((value) => {
						return {
							name: attribute.attribute.slug || "",
							value: value.name || "",
						};
					});
				}),
				price: {
					amount: variant.pricing?.price?.gross.amount.toString() || "0",
					currencyCode: variant.pricing?.price?.gross.currency || "",
				},
			};
		}) || []
	);
}

export function saleorCollectionToCollection(
	saleorCollection:
		| Exclude<GetCollectionBySlugQuery["collection"], null | undefined>
		| Exclude<GetCategoryBySlugQuery["category"], null | undefined>,
): Collection {
	return {
		handle: saleorCollection.slug,
		title: saleorCollection.name,
		description: saleorCollection.description as string,
		seo: {
			title: saleorCollection.seoTitle || saleorCollection.name,
			description: saleorCollection.seoDescription || "",
		},
		path: `/search/${saleorCollection.slug}`,
		updatedAt: saleorCollection.products?.edges?.[0]?.node.updatedAt || "",
		image: {
			url: saleorCollection.backgroundImage?.url as string,
			altText: saleorCollection.backgroundImage?.alt ?? "",
			height: 350,
			width: 350,
		},
	};
}

type MenuItemWithChildren = MenuItemFragment & {
	children?: null | undefined | MenuItemWithChildren[];
};
export function flattenMenuItems(menuItems: null | undefined | MenuItemWithChildren[]): Menu[] {
	return (
		menuItems?.flatMap((item) => {
			// Remove empty categories and collections from menu
			// if (item.category && !item.category.products?.totalCount) {
			// 	return [];
			// }
			// if (item.collection && !item.collection.products?.totalCount) {
			// 	return [];
			// }

			const path =
				item.url ||
				(item.collection
					? `/shop/${item.collection.slug}`
					: item.category
						? `/shop/${item.category.slug}`
						: item.page
							? `/${item.page.slug}`
							: "#");
			const collection = item.collection
				? saleorCollectionToCollection(item.collection)
				: item.category
					? saleorCollectionToCollection(item.category)
					: undefined;

			return [
				...(path
					? [
							{
								path: path,
								title: item.name,
								collection,
								children: flattenMenuItems(item.children),
							},
						]
					: []),
			];
		}) || []
	);
}

export function saleorCheckoutToCart(checkout: CheckoutFragment | CartFragment): Cart {
	// eslint-disable-next-line prefer-const
	let result: Cart = {
		id: checkout.id,
		cost: {
			subtotalAmount: {
				amount: checkout.subtotalPrice.gross.amount.toString(),
				currencyCode: checkout.subtotalPrice.gross.currency,
			},
			totalAmount: {
				amount: checkout.totalPrice.gross.amount.toString(),
				currencyCode: checkout.totalPrice.gross.currency,
			},
		},
		lines: checkout.lines.map((line) => {
			const title = line.variant.name.trim() === line.variant.id ? "" : line.variant.name.trim();
			return {
				id: line.id,
				quantity: line.quantity,
				cost: {
					totalAmount: {
						amount: line.variant.pricing?.price?.gross.amount.toString() || "0",
						currencyCode: line.variant.pricing?.price?.gross.currency || "",
					},
				},
				merchandise: {
					id: line.variant.id,
					title,
					selectedOptions: line.variant.attributes.flatMap((attribute) => {
						return attribute.values.map((value) => {
							return {
								name: attribute.attribute.name || "",
								value: value.name || "",
							};
						});
					}),
					product: saleorProductToProduct(line.variant.product),
				},
			};
		}),
		totalQuantity: checkout.quantity,
	};

	if (!!(checkout as CheckoutFragment).shippingPrice) {
		result.cost.totalShippingAmount = {
			amount: (checkout as CheckoutFragment).shippingPrice.gross.amount.toString(),
			currencyCode: (checkout as CheckoutFragment).shippingPrice.gross.currency,
		};
	}

	if (!!(checkout as CheckoutFragment).shippingMethods) {
		result.shippingMethods = (checkout as CheckoutFragment).shippingMethods.map((method) => ({
			id: method.id,
			name: method.name,
			description: method.description as string,
			price: {
				amount: method.price.amount.toString(),
				currencyCode: method.price.currency,
			},
			active: method.active,
			icon: method.icon as string,
		}));
	}

	if (!!(checkout as CheckoutFragment).deliveryMethod) {
		result.deliveryMethod = {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			id: (checkout as any).deliveryMethod.id,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			name: (checkout as any).deliveryMethod.name,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			description: (checkout as any).deliveryMethod.description as string,
			price: {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
				amount: (checkout as any).deliveryMethod.price.amount.toString(),
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
				currencyCode: (checkout as any).deliveryMethod.price.currency,
			},
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			active: (checkout as any).deliveryMethod.active,
		};
	}

	if (!!(checkout as CheckoutFragment).shippingAddress) {
		result.shippingAddress = {
			firstName: (checkout as CheckoutFragment).shippingAddress!.firstName,
			lastName: (checkout as CheckoutFragment).shippingAddress!.lastName,
			cityArea: (checkout as CheckoutFragment).shippingAddress!.cityArea,
			phone: (checkout as CheckoutFragment).shippingAddress!.phone as string,
			country: (checkout as CheckoutFragment).shippingAddress!.country.code as CountryCode,
			city: (checkout as CheckoutFragment).shippingAddress?.city as string,
			streetAddress1: (checkout as CheckoutFragment).shippingAddress!.streetAddress1,
			streetAddress2: (checkout as CheckoutFragment).shippingAddress!.streetAddress2,
			postalCode: (checkout as CheckoutFragment).shippingAddress!.postalCode,
			isDefault: (checkout as CheckoutFragment).shippingAddress!.isDefaultShippingAddress ?? false,
		};
	}

	if (!!(checkout as CheckoutFragment).availablePaymentGateways) {
		result.availablePaymentGateways = (checkout as CheckoutFragment).availablePaymentGateways.map(
			(gateway) => ({ id: gateway.id, name: gateway.name }),
		);
	}

	return result;
}
