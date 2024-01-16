import React from "react";
import { Navbar } from "./navbar";
import { getCollectionProducts, getMenu } from "lib/saleor";

interface Props {
	className?: string;
}
export const NavbarWrapper: React.FC<Props> = async (props) => {
	const menu = await getMenu("navbar");
	if (!menu) return null;
	const products = await getCollectionProducts({ collection: "hidden-navbar-featured-items" });

	return <Navbar menu={menu} featuredProducts={products} {...props} />;
};
