import React from "react";
import s from "./featured-products.module.css";
import { cn } from "lib/utils";
import { ProductCard, ProductsSwiper } from "product";
import { getCollection, getCollectionProducts } from "lib/saleor";

interface Props {
	className?: string;
}

export const FeaturedProducts: React.FC<Props> = async ({ className }) => {
	const collection = await getCollection("hidden-homepage-featured-items");
	if (!collection) return null;
	const products = await getCollectionProducts({
		collection: collection.handle,
	});
	if (products.length < 1) return null;

	return (
		<section className={cn(s.root, className)}>
			<div className={cn(s.Container)}>
				<div className={s.heading}>
					<h2 className={s.title}>
						<strong>{collection.title}</strong>
					</h2>
					{/* <p className={s.subtitle}>
						برای 165 سال، Chicorée Leroux به لطف دانش منحصر به فرد، محصولات با کیفیت را به شما ارائه می دهد.
						طیف وسیعی از محصولات ما را کشف کنید. برای هر سلیقه ای چیزی وجود دارد! محلول، دانه، مایع، هر چه
						استفاده کنید، کاسنی را خواهید یافت که برای شما ساخته شده است.
					</p> */}
				</div>
				<div className={s.sliderContainer}>
					<ProductsSwiper className={cn(s.slider)}>
						{products.map((product, idx) => (
							<ProductCard className={s.product} key={idx} product={product} />
						))}
					</ProductsSwiper>
				</div>
			</div>
		</section>
	);
};
