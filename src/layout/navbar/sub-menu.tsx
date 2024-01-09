"use client";
import React from "react";
import Link from "next/link";
import s from "./sub-menu.module.css";
import { cn } from "lib/utils";
import type { Menu, Product } from "lib/types";
import { Button, Container, SocialIcons } from "ui";
import { ProductCard, ProductsSwiper } from "product";
import { ClickOutside } from "lib/click-outside";

interface Props {
	className?: string;
	menu: Menu;
	current?: Menu;
	onClose?: () => void;
	featuredProducts: Product[];
}

export const SubMenu: React.FC<Props> = ({ className, menu, current, featuredProducts, onClose }) => {
	const isOpen = !!current && current.id === menu.id;

	return (
		<ClickOutside onClick={onClose}>
			<div className={cn(s.root, className, { [s.open]: isOpen })}>
				<Container className={s.container}>
					<div className={s.content}>
						<Button onClick={onClose} className={s.backBtn}>
							<span className={s.btnTxt}>بازگشت به منو</span>
							<div className={s.btnArrow}>
								<svg
									width={20}
									height={20}
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 9.69531L17.3918 9.69531"
										stroke="currentcolor"
										strokeWidth={2}
										strokeMiterlimit={10}
									/>
									<path d="M12.6953 5L17.1953 9.5L12.6953 14" stroke="currentcolor" strokeWidth={2} />
								</svg>
							</div>
						</Button>
						<span className={s.title}>{menu.title}</span>
						<ul className={s.list}>
							{menu.children!.map((item, idx) => (
								<li key={idx} className={s.item}>
									<Link href={item.path} className={cn(s.link)}>
										<span>{item.title}</span>
									</Link>
								</li>
							))}
						</ul>
						<SocialIcons className={s.socials} />
					</div>
					<div className={s.featured}>
						{!!featuredProducts && (
							<div className={s.sliderContainer}>
								<ProductsSwiper
									className={s.slider}
									navigationClassName={s.navigation}
									breakpoints={{
										768: {
											slidesPerView: 1.5,
										},
										992: {
											slidesPerView: 2.5,
										},
									}}
								>
									{featuredProducts.map((product, idx) => (
										<Link key={idx} href={product.path}>
											<ProductCard product={product} />
										</Link>
									))}
								</ProductsSwiper>
							</div>
						)}
					</div>
				</Container>
			</div>
		</ClickOutside>
	);
};
