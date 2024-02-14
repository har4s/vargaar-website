import React from "react";
import s from "./shop.module.css";
import { cn } from "lib/utils";
import { Filters, Hero, ProductList } from "shop";
import type { Menu, Product } from "lib/types";

interface Props {
	className?: string;
	menu: Menu[];
	products: Product[];
	title: string;
	description: string;
}

export const Shop: React.FC<Props> = ({ className, menu, products, title, description }) => {
	return (
		<div className={cn(s.wrapper, className)}>
			<Hero title={title} description={description} />
			<Filters menu={menu} />
			<ProductList products={products} />
			{/* <IntroTxt /> */}
		</div>
	);
};
