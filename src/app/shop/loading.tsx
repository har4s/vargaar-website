import React from "react";
import s from "./shop.module.css";
import loadingStyles from "./loading.module.css";
import heroStyles from "shop/hero/hero.module.css";
import filtersStyles from "shop/filters/filters.module.css";
import productListStyles from "shop/product-list/product-list.module.css";
import { cn } from "lib/utils";

export default function Loading() {
	return (
		<div className={cn(s.wrapper)}>
			<section className={cn(heroStyles.root)}>
				<div className={heroStyles.Container}>
					<div className={cn(heroStyles.title, loadingStyles.hTitle)} />
					<div className={s.paragraph}>
						<div className={cn(heroStyles.subtitle, loadingStyles.hSubtitle)} />
						<div className={cn(heroStyles.subtitle, loadingStyles.hSubtitle)} />
						<div className={cn(heroStyles.subtitle, loadingStyles.hSubtitle)} />
					</div>
				</div>
			</section>
			<nav className={cn(filtersStyles.root)}>
				<div className={filtersStyles.Container}>
					<ul className={filtersStyles.list}>
						{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
						{[...Array(3)].map((_, idx) => (
							<li key={idx} className={filtersStyles.item}>
								<div className={cn(filtersStyles.link, loadingStyles.filerItem)} />
							</li>
						))}
					</ul>
				</div>
			</nav>
			<div className={cn(productListStyles.root)}>
				<div className={productListStyles.Container}>
					{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
					{[...Array(5)].map((item, idx) => (
						<div key={idx} className={cn(productListStyles.product, loadingStyles.product)} />
					))}
				</div>
			</div>
		</div>
	);
}
