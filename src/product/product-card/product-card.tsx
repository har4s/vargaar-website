import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBagIcon, XIcon } from "lucide-react";
import s from "./product-card.module.css";
import { cn } from "lib/utils";
import type { Product } from "lib/types";
import { Price } from "ui/price";

interface Props {
	className?: string;
	product: Product;
}

export const ProductCard: React.FC<Props> = ({ className, product }) => {
	return (
		<article className={cn(s.root, className)} style={{ backgroundColor: product.bgColor }}>
			<div className={cn(s.container)}>
				{product.featuredImage && (
					<Link href={product.path}>
						<div className={s.thumbnailContainer}>
							<Image
								className={s.thumbnail}
								src={product.featuredImage.url}
								alt={product.featuredImage.altText}
								fill
							/>
						</div>
					</Link>
				)}
				<div className={s.details}>
					<h3 className={s.name}>
						<Link href={product.path}>{product.title}</Link>
					</h3>
					{product.availableForSale ? (
						<Price amount={product.price} className={s.price} />
					) : (
						<span className={s.price}>ناموجود</span>
					)}
					<div className={s.link}>
						<Link href={product.path}>مشاهده محصول</Link>
					</div>
				</div>
			</div>
			<Link
				className={cn(s.btn, {
					[s.disabled]: !product.availableForSale,
				})}
				href={product.path}
			>
				{product.availableForSale ? <ShoppingBagIcon className={s.icon} /> : <XIcon className={s.icon} />}
			</Link>
		</article>
	);
};
