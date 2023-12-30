"use client";
import React, { useLayoutEffect, useState } from "react";
import { Observer } from "gsap/Observer";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import s from "./navbar.module.css";
import { Menu } from "./menu";
import { cn } from "lib/utils";
import { Logo } from "ui";

interface Props {
	className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
	// const [scrolled, setScrolled] = useState(false)
	const [visible, setVisible] = useState(true);

	useLayoutEffect(() => {
		// const scrolledObserver = Observer.create({
		//     target: window,
		//     type: 'scroll',
		//     onChange: (self) => {
		//         console.log({ self })
		//         if (window.scrollY > 50 && !scrolled) { setScrolled(true) }
		//         if (window.scrollY <= 50 && scrolled) { setScrolled(false) }
		//     }
		// })

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
			onScrollObserver.kill();
		};
	}, []);

	return (
		<header className={cn(s.root, { [s.hidden]: !visible }, className)}>
			<div className={s.Container}>
				<div className={cn("w-full lg:hidden")}>{/* <MegaMenu /> */}</div>
				<Menu />
				<div className={cn(s.logoContainer)}>
					<Link href="/">
						<Logo className={s.logo} />
					</Link>
				</div>
				<div className={cn(s.row, "justify-end")}>
					<button className="text-rouge">
						<ShoppingBagIcon className="h-6 w-6" />
					</button>
				</div>
			</div>
		</header>
	);
};
