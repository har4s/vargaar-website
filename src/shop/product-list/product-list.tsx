import React from "react";
import s from "./product-list.module.css";
import { cn } from "lib/utils";
import type { Product } from "lib/types";
import { ProductCard } from "product";

interface Props {
	className?: string;
	products: Product[];
}

export const ProductList: React.FC<Props> = ({ className, products }) => {
	return (
		<div className={cn(s.root, className)}>
			<div className={s.Container}>
				{products.map((item, idx) => (
					<ProductCard key={idx} className={s.product} product={item} />
				))}
			</div>
		</div>
	);
};
