import React from "react";
import { Menu } from "./menu";
import { getCollectionProducts, getMenu } from "lib/saleor";

interface Props {
	className?: string;
}

export const MenuWrapper: React.FC<Props> = async ({ className }) => {
	const menu = await getMenu("navbar");
	if (!menu) return null;
	const products = await getCollectionProducts({ collection: "hidden-navbar-featured-items" });

	return <Menu className={className} menu={menu} featuredProducts={products} />;
};
