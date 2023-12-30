import React from "react";
import { notFound } from "next/navigation";
import { Shop } from "../shop";
import { getCollection, getCollectionProducts, getMenu } from "lib/saleor";
import { defaultSort, sorting } from "lib/constants";

export default async function Collection({
	params,
	searchParams,
}: {
	params: { handle: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const { sort } = searchParams as { [key: string]: string };
	const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

	const collection = await getCollection(params.handle);
	if (!collection) return notFound();
	const products = await getCollectionProducts({
		collection: collection.handle,
		sortKey,
		reverse,
	});
	const menu = await getMenu("shop");

	return (
		<Shop products={products} menu={menu} title={collection.title} description={collection.seo.description} />
	);
}
