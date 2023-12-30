import React from "react";
import { Shop } from "./shop";
import { getMenu, getProducts } from "lib/saleor";
import { defaultSort, sorting } from "lib/constants";

export default async function ShopPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const { sort, q: searchValue } = searchParams as { [key: string]: string };
	const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

	const products = await getProducts({ sortKey, reverse, query: searchValue });
	const menu = await getMenu("shop");

	return (
		<Shop
			products={products}
			menu={menu}
			title="فروشگاه برشته کاری ورگار"
			description="برای بیش از 160 سال، Leroux به لطف دانش منحصر به فرد، محصولات با کیفیت را به شما ارائه می دهد. با طیف محصولات Leroux آشنا شوید. و چیزی برای همه وجود دارد! مایع، محلول یا دانه ای: انتخاب خود را انجام دهید!"
		/>
	);
}
