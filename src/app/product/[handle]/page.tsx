import React from "react";
import Image from "next/image";
import s from "./page.module.css";
import { CoffeeTypeProduct } from "./coffee-type-product";
import { cn } from "lib/utils";
import { ProductCard, ProductsSwiper } from "product";
import { Button } from "ui";

export const runtime = "edge";

export default async function ProductPage({}: { params: { handle: string } }) {
	return (
		<>
			<CoffeeTypeProduct />
			<PageReference />
			<RelatedProducts />
		</>
	);
}

export const PageReference: React.FC<{}> = ({}) => {
	return (
		<div className={cn(s.pageRef)}>
			<div className={s.Container}>
				<div className={s.text}>
					<h2 className={s.title}>کاسنی ورگار را کشف کنید</h2>
					<span className={s.subtitle}>برای مصرف بدون اعتدال!</span>
					<div className={s.content}>
						<p>
							کاسنی محلول در طبیعت ارگانیک را کشف کنید. تداعی کننده طعم و مزه طبیعی خوب، انتظارات شما را با
							نیت چشیدن یک محصول سازگار با محیط زیست با منشاء 100٪ گیاهی برآورده می کند.{" "}
						</p>
					</div>
					<div className={s.actions}>
						<Button>بیشتر بخوانید</Button>
					</div>
				</div>
				<div className={s.imageContainer}>
					<Image
						className={s.image}
						src="/9db5555d883bae71e59bd2e49c580d8d-1200x1200-c-default.jpg"
						alt=""
						width={1200}
						height={1200}
						data-prllxfrom='{"yPercent" : "-10"}'
						data-prllxto='{"yPercent" : "10"}'
						data-prllxstart="top bottom"
						data-prllxend="bottom top"
					/>
				</div>
			</div>
		</div>
	);
};

export const RelatedProducts: React.FC<{}> = ({}) => {
	return (
		<section className={cn(s.relatedProducts)}>
			<div className={cn(s.Container)}>
				<div className={s.heading}>
					<h2 className={s.title}>
						<strong>شما ممکن است دوست داشته باشید ...</strong>
					</h2>
					<Button>تمام محصولات ما</Button>
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
