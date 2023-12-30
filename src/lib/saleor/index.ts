import {
	flattenMenuItems,
	saleorCheckoutToCart,
	saleorCollectionToCollection,
	saleorProductToProduct,
} from "./mappers";
import { executeGraphQL } from "lib/graphql";
import {
	GetCategoryBySlugDocument,
	GetCategoryProductsBySlugDocument,
	GetCheckoutByIdDocument,
	GetCollectionBySlugDocument,
	GetCollectionProductsBySlugDocument,
	GetCollectionsDocument,
	GetMenuBySlugDocument,
	GetPageBySlugDocument,
	GetPagesDocument,
	GetProductBySlugDocument,
	GetProductRecommendationsDocument,
	OrderDirection,
	ProductOrderField,
	SearchProductsDocument,
} from "lib/graphql/generated/graphql";
import { TAGS } from "lib/constants";
import type { Cart, Collection, Menu, Page, Product } from "lib/types";
import { NEXT_PUBLIC_SALEOR_API_URL } from "lib/env";

export async function getCollections(): Promise<Collection[]> {
	const saleorCollections = await executeGraphQL(GetCollectionsDocument, {
		tags: [TAGS.collections],
	});

	return (
		saleorCollections.collections?.edges
			.map((edge) => {
				return {
					title: edge.node.name,
					handle: edge.node.slug,
					path: `/search/${edge.node.slug}`,
					description: edge.node.description as string,
					seo: {
						title: edge.node.seoTitle || edge.node.name,
						description: edge.node.seoDescription || "",
					},
					image: {
						url: edge.node.backgroundImage?.url as string,
						altText: edge.node.backgroundImage?.alt || "",
						height: 0,
						width: 0,
					},
					meta: {},
					updatedAt: edge.node.products?.edges?.[0]?.node.updatedAt || "",
				};
			})
			.filter((el) => !el.handle.startsWith(`hidden-`)) ?? []
	);
}

export async function getPage(handle: string): Promise<Page> {
	const saleorPage = await executeGraphQL(GetPageBySlugDocument, {
		variables: {
			slug: handle,
		},
		tags: [TAGS.pages],
	});

	if (!saleorPage.page) {
		throw new Error(`Page not found: ${handle}`);
	}

	return {
		id: saleorPage.page.id,
		title: saleorPage.page.title,
		handle: saleorPage.page.slug,
		body: saleorPage.page.content || "",
		bodySummary: saleorPage.page.seoDescription || "",
		seo: {
			title: saleorPage.page.seoTitle || saleorPage.page.title,
			description: saleorPage.page.seoDescription || "",
		},
		createdAt: saleorPage.page.created,
		updatedAt: saleorPage.page.created,
	};
}

export async function getProduct(handle: string): Promise<Product | undefined> {
	const saleorProduct = await executeGraphQL(GetProductBySlugDocument, {
		variables: {
			slug: handle,
		},
		tags: [TAGS.products],
	});

	if (!saleorProduct.product) {
		throw new Error(`Product not found: ${handle}`);
	}

	return saleorProductToProduct(saleorProduct.product);
}

const _getCollection = async (handle: string) =>
	(
		await executeGraphQL(GetCollectionBySlugDocument, {
			variables: {
				slug: handle,
			},
			tags: [TAGS.collections],
		})
	).collection;

const _getCategory = async (handle: string) =>
	(
		await executeGraphQL(GetCategoryBySlugDocument, {
			variables: {
				slug: handle,
			},
			tags: [TAGS.collections],
		})
	).category;

export async function getCollection(handle: string): Promise<Collection | undefined> {
	const saleorCollection = (await _getCollection(handle)) || (await _getCategory(handle));

	if (!saleorCollection) {
		throw new Error(`Collection not found: ${handle}`);
	}

	return saleorCollectionToCollection(saleorCollection);
}

const _getCollectionProducts = async ({
	collection,
	reverse,
	sortKey,
}: {
	collection: string;
	reverse?: boolean;
	sortKey?: ProductOrderField;
}) =>
	(
		await executeGraphQL(GetCollectionProductsBySlugDocument, {
			variables: {
				slug: collection,
				sortBy:
					sortKey === ProductOrderField.Rank ? ProductOrderField.Rating : sortKey || ProductOrderField.Rating,
				sortDirection: reverse ? OrderDirection.Desc : OrderDirection.Asc,
			},
			tags: [TAGS.collections, TAGS.products],
		})
	).collection;
const _getCategoryProducts = async ({
	category,
	reverse,
	sortKey,
}: {
	category: string;
	reverse?: boolean;
	sortKey?: ProductOrderField;
}) =>
	(
		await executeGraphQL(GetCategoryProductsBySlugDocument, {
			variables: {
				slug: category,
				sortBy:
					sortKey === ProductOrderField.Rank ? ProductOrderField.Rating : sortKey || ProductOrderField.Rating,
				sortDirection: reverse ? OrderDirection.Desc : OrderDirection.Asc,
			},
			tags: [TAGS.collections, TAGS.products],
		})
	).category;
export async function getCollectionProducts({
	collection,
	reverse,
	sortKey,
}: {
	collection: string;
	reverse?: boolean;
	sortKey?: ProductOrderField;
}): Promise<Product[]> {
	if (typeof reverse === "undefined" && typeof sortKey === "undefined") {
		reverse = true;
		sortKey = ProductOrderField.Name;
	}

	const saleorCollectionProducts =
		(await _getCollectionProducts({
			collection,
			reverse,
			sortKey,
		})) ||
		(await _getCategoryProducts({
			category: collection,
			reverse,
			sortKey,
		}));

	if (!saleorCollectionProducts) {
		throw new Error(`Collection not found: ${collection}`);
	}

	return (
		saleorCollectionProducts.products?.edges
			.map((product) => saleorProductToProduct(product.node))
			.sort((a, b) => {
				return a.availableForSale === b.availableForSale ? 0 : a.availableForSale ? -1 : 1;
			}) ?? []
	);
}

export async function getMenu(handle: string): Promise<Menu[]> {
	const saleorMenu = await executeGraphQL(GetMenuBySlugDocument, {
		variables: {
			slug: handle,
			tags: [TAGS.menus],
		},
	});

	if (!saleorMenu.menu) {
		throw new Error(`Menu not found: ${handle}`);
	}

	const saleorUrl = new URL(NEXT_PUBLIC_SALEOR_API_URL!);
	saleorUrl.pathname = "";

	const result = flattenMenuItems(saleorMenu.menu.items)
		// .filter(
		// 	// unique by path
		// 	(item1, idx, arr) => arr.findIndex((item2) => item2.path === item1.path) === idx,
		// )
		.map((item) => ({
			...item,
			path: item.path.replace("http://localhost:8000", saleorUrl.toString().slice(0, -1)),
		}));

	// if (handle === "next-js-frontend-header-menu") {
	// 	// limit number of items in header to 3
	// 	return result.slice(0, 3);
	// }
	return result;
}

export async function getProducts({
	query,
	reverse,
	sortKey,
}: {
	query?: string;
	reverse?: boolean;
	sortKey?: ProductOrderField;
}): Promise<Product[]> {
	const saleorProducts = await executeGraphQL(SearchProductsDocument, {
		variables: {
			search: query || "",
			sortBy: query
				? sortKey || ProductOrderField.Rank
				: sortKey === ProductOrderField.Rank
					? ProductOrderField.Rating
					: sortKey || ProductOrderField.Rating,
			sortDirection: reverse ? OrderDirection.Desc : OrderDirection.Asc,
		},
		tags: [TAGS.products],
	});

	return (
		saleorProducts.products?.edges
			.map((product) => saleorProductToProduct(product.node))
			.sort((a, b) => {
				return a.availableForSale === b.availableForSale ? 0 : a.availableForSale ? -1 : 1;
			}) || []
	);
}

export async function getPages(): Promise<Page[]> {
	const saleorPages = await executeGraphQL(GetPagesDocument, {
		tags: [TAGS.pages],
	});

	return (
		saleorPages.pages?.edges.map((page) => {
			return {
				id: page.node.id,
				title: page.node.title,
				handle: page.node.slug,
				body: page.node.content || "",
				bodySummary: page.node.seoDescription || "",
				seo: {
					title: page.node.seoTitle || page.node.title,
					description: page.node.seoDescription || "",
				},
				createdAt: page.node.created,
				updatedAt: page.node.created,
			};
		}) || []
	);
}

export async function getCart(cartId: string): Promise<Cart | null> {
	const saleorCheckout = await executeGraphQL(GetCheckoutByIdDocument, {
		variables: {
			id: cartId,
		},
		cache: "no-store",
	});

	if (!saleorCheckout.checkout) {
		return null;
	}

	return saleorCheckoutToCart(saleorCheckout.checkout);
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export async function getProductRecommendations(productId: string): Promise<Product[]> {
	const saleorProducts = await executeGraphQL(GetProductRecommendationsDocument, {
		// variables: {},
		tags: [TAGS.products],
	});

	return (
		saleorProducts.products?.edges
			.map((product) => saleorProductToProduct(product.node))
			.sort((a, b) => {
				return a.availableForSale === b.availableForSale ? 0 : a.availableForSale ? -1 : 1;
			}) || []
	);
}
