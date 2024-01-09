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
						<Link href={product.path}>
							<span>مشاهده محصول</span>
							<div className={s.arrow}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
									/>
								</svg>
							</div>
						</Link>
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
