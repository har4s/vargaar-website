import React from "react";
import s from "./featured-products.module.css";
import { cn } from "lib/utils";
import { ProductCard, ProductsSwiper } from "product";

interface Props {
	className?: string;
}

export const RelatedProducts: React.FC<Props> = ({ className }) => {
	return (
		<section className={cn(s.root, className)}>
			<div className={cn(s.Container)}>
				<div className={s.heading}>
					<h2 className={s.title}>
						<strong>محصولات پیشنهادی این هفته ورگار</strong>
					</h2>
				</div>
				<div className={s.sliderContainer}>
					<ProductsSwiper className={cn(s.slider)}>
						{
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							[...Array(10)].map((_, idx) => (
								<ProductCard key={idx} product={{}} />
							))
						}
					</ProductsSwiper>
				</div>
			</div>
		</section>
	);
};
