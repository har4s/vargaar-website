"use client";
import React, { Suspense, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { Observer } from "gsap/Observer";
import s from "./navbar.module.css";
import { Menu } from "./menu";
import { cn } from "lib/utils";
import { Logo } from "ui";
import type { Menu as MenuType, Product } from "lib/types";

interface Props {
	className?: string;
	menu: MenuType[];
	featuredProducts: Product[];
}

export const Navbar: React.FC<Props> = ({ className, menu, featuredProducts }) => {
	const [scrolled, setScrolled] = useState(false);
	const [visible, setVisible] = useState(true);

	useLayoutEffect(() => {
		const scrolledObserver = Observer.create({
			target: window,
			type: "scroll",
			onChange: (self) => {
				console.log({ self });
				if (window.scrollY > 50 && !scrolled) {
					setScrolled(true);
				}
				if (window.scrollY <= 50 && scrolled) {
					setScrolled(false);
				}
			},
		});

		const onScrollObserver = Observer.create({
			target: window,
			type: "scroll",
			tolerance: 50,
			onUp: () => {
				setVisible(true);
			},
			onDown: () => {
				setVisible(false);
			},
		});

		return () => {
			scrolledObserver.kill();
			onScrollObserver.kill();
		};
	}, []);

	return (
		<header
			className={cn(s.root, className, {
				[s.hidden]: !visible,
			})}
		>
			<div className={s.Container}>
				<div className={cn("w-full")}>
					<Suspense>
						<Menu className={className} menu={menu} featuredProducts={featuredProducts} />
					</Suspense>
				</div>
				<div className={cn(s.logoContainer)}>
					<Link href="/">
						<Logo className={s.logo} />
					</Link>
				</div>
				<div className={cn(s.row, "justify-end")}>
					<ul className={s.mm}>
						<li className={cn(s.itt)}>
							<Link href="#" className={cn(s.lin)}>
								<span>ورود / ثبت نام</span>
							</Link>
						</li>
					</ul>
					<button className="text-text-5 flex flex-row items-center gap-x-3 text-text-brown lg:gap-x-[0.833vw]">
						{/* <ShoppingBagIcon className="h-6 w-6 lg:h-[1.567vw] lg:w-[1.567vw]" /> */}
						<svg
							width={22}
							height={28}
							viewBox="0 0 22 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 lg:h-[1.567vw] lg:w-[1.567vw]"
						>
							<path
								d="M2.99992 27.3334C2.26659 27.3334 1.63881 27.0722 1.11659 26.55C0.594363 26.0278 0.333252 25.4 0.333252 24.6667V8.66669C0.333252 7.93335 0.594363 7.30558 1.11659 6.78335C1.63881 6.26113 2.26659 6.00002 2.99992 6.00002H5.66659C5.66659 4.53335 6.18881 3.2778 7.23325 2.23335C8.2777 1.18891 9.53325 0.666687 10.9999 0.666687C12.4666 0.666687 13.7221 1.18891 14.7666 2.23335C15.811 3.2778 16.3333 4.53335 16.3333 6.00002H18.9999C19.7333 6.00002 20.361 6.26113 20.8833 6.78335C21.4055 7.30558 21.6666 7.93335 21.6666 8.66669V24.6667C21.6666 25.4 21.4055 26.0278 20.8833 26.55C20.361 27.0722 19.7333 27.3334 18.9999 27.3334H2.99992ZM2.99992 24.6667H18.9999V8.66669H16.3333V11.3334C16.3333 11.7111 16.2055 12.0278 15.9499 12.2834C15.6944 12.5389 15.3777 12.6667 14.9999 12.6667C14.6221 12.6667 14.3055 12.5389 14.0499 12.2834C13.7944 12.0278 13.6666 11.7111 13.6666 11.3334V8.66669H8.33325V11.3334C8.33325 11.7111 8.20547 12.0278 7.94992 12.2834C7.69436 12.5389 7.3777 12.6667 6.99992 12.6667C6.62214 12.6667 6.30547 12.5389 6.04992 12.2834C5.79436 12.0278 5.66659 11.7111 5.66659 11.3334V8.66669H2.99992V24.6667ZM8.33325 6.00002H13.6666C13.6666 5.26669 13.4055 4.63891 12.8833 4.11669C12.361 3.59446 11.7333 3.33335 10.9999 3.33335C10.2666 3.33335 9.63881 3.59446 9.11659 4.11669C8.59436 4.63891 8.33325 5.26669 8.33325 6.00002Z"
								fill="currentcolor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};
