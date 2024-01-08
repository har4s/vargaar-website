import type { CountryCode } from "./graphql/generated/graphql";

export type Maybe<T> = T | null;

export type Connection<T> = {
	edges: Array<Edge<T>>;
};

export type Edge<T> = {
	node: T;
};

export interface User {
	id: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
}

export interface Image {
	url: string;
	altText: string;
	height: number;
	width: number;
}

export interface SEO {
	title: string;
	description: string;
}

export interface Money {
	amount: string;
	currencyCode: string;
}

export interface Menu {
	id: string;
	title: string;
	path: string;
	children?: Menu[];
	collection?: Collection;
}

export interface Page {
	id: string;
	title: string;
	handle: string;
	body: string;
	bodySummary: string;
	seo?: SEO;
	createdAt: string;
	updatedAt: string;
}

export interface BaseCollection {
	title: string;
	description: string;
	seo: SEO;
	image?: Image;
	handle: string;
	path: string;
	updatedAt: string;
}
export interface Collection extends BaseCollection {}

export interface BaseProduct {
	id: string;
	title: string;
	handle: string;
	path: string;
	availableForSale: boolean;
	description: string;
	descriptionHtml: string;
	options: ProductOption[];
	priceRange: {
		maxVariantPrice: Money;
		minVariantPrice: Money;
	};
	price: string;
	variants: ProductVariant[];
	featuredImage: Image;
	images: Image[];
	seo: SEO;
	bgColor?: string;
	tags: string[];
	updatedAt: string;
}
export interface Product extends BaseProduct {}

export interface ProductOption {
	id: string;
	name: string;
	values: string[];
}

export interface ProductVariant {
	id: string;
	title: string;
	availableForSale: boolean;
	selectedOptions: {
		name: string;
		value: string;
	}[];
	price: Money;
}

export interface Cart {
	id: string;
	email?: string;
	cost: {
		subtotalAmount: Money;
		totalAmount: Money;
		totalShippingAmount?: Money;
	};
	lines: CartItem[];
	totalQuantity: number;
	shippingMethods?: ShippingMethod[];
	availablePaymentGateways?: PaymentGateway[];
	shippingAddress?: ShippingAddress;
	deliveryMethod?: ShippingMethod;
	paymentId?: string;
}

export interface CartItem {
	id: string;
	quantity: number;
	cost: {
		totalAmount: Money;
	};
	merchandise: {
		id: string;
		title: string;
		selectedOptions: {
			name: string;
			value: string;
		}[];
		product: BaseProduct;
	};
}

/***
 *
 **/
export type CartOperation = {
	data: {
		cart: Cart;
	};
	variables: {
		cartId: string;
	};
};

export type CreateCartOperation = {
	data: { cartCreate: { cart: Cart } };
};

export type AddToCartOperation = {
	data: {
		cartLinesAdd: {
			cart: Cart;
		};
	};
	variables: {
		cartId: string;
		lines: {
			merchandiseId: string;
			quantity: number;
		}[];
	};
};

export type RemoveFromCartOperation = {
	data: {
		cartLinesRemove: {
			cart: Cart;
		};
	};
	variables: {
		cartId: string;
		lineIds: string[];
	};
};

export type UpdateCartOperation = {
	data: {
		cartLinesUpdate: {
			cart: Cart;
		};
	};
	variables: {
		cartId: string;
		lines: {
			id: string;
			merchandiseId: string;
			quantity: number;
		}[];
	};
};

export type CollectionOperation = {
	data: {
		collection: Collection;
	};
	variables: {
		handle: string;
	};
};

export type CollectionProductsOperation = {
	data: {
		collection: {
			products: Connection<Product>;
		};
	};
	variables: {
		handle: string;
		reverse?: boolean;
		sortKey?: string;
	};
};

export type CollectionsOperation = {
	data: {
		collections: Connection<Collection>;
	};
};

export type MenuOperation = {
	data: {
		menu?: {
			items: {
				title: string;
				url: string;
			}[];
		};
	};
	variables: {
		handle: string;
	};
};

export type PageOperation = {
	data: { pageByHandle: Page };
	variables: { handle: string };
};

export type PagesOperation = {
	data: {
		pages: Connection<Page>;
	};
};

export type ProductOperation = {
	data: { product: Product };
	variables: {
		handle: string;
	};
};

export type ProductRecommendationsOperation = {
	data: {
		productRecommendations: Product[];
	};
	variables: {
		productId: string;
	};
};

export type ProductsOperation = {
	data: {
		products: Connection<Product>;
	};
	variables: {
		query?: string;
		reverse?: boolean;
		sortKey?: string;
	};
};

export interface ShippingAddress {
	firstName: string;
	lastName: string;
	cityArea: string;
	phone: string;
	country: CountryCode;
	city: string;
	streetAddress1: string;
	streetAddress2?: string;
	postalCode: string;
	isDefault: boolean;
}

export interface ShippingMethod {
	id: string;
	name: string;
	description: string;
	price: Money;
	active: boolean;
	icon?: string;
}

export interface PaymentGateway {
	id: string;
	name: string;
}

export interface DeliveryMethodFormValues {
	deliveryMethod: string;
}

export interface PaymentMethodFormValues {
	paymentMethodId: string;
}
