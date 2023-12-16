import React from "react";
import Link from "next/link";
import s from "./footer.module.css";
import { cn } from "lib/utils";
import { Logo } from "ui";
import type { Menu } from "lib/types";

interface Props {
	className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<footer className={cn(s.root, className)} aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className={s.Container}>
				<div className={s.body}>
					<div className={s.head}>
						<Link href="/">
							<Logo className={s.logo} />
						</Link>
					</div>
					<nav className={s.nav}>
						{navigation.map((menu, idx) => (
							<div className={s.itemContainer} key={idx}>
								<h4 className={s.itemTitle}>{menu.title}</h4>
								<ul role="list" className={s.children}>
									{menu.children.map((item, idx) => (
										<li className={s.childContainer} key={idx}>
											<Link href={item.path} className={s.link}>
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
					<div className={s.copyrightContainer}>
						<p className={s.copyright}>&copy; ۱۴۰۲ کليه حقوق اين سايت متعلق به برشته کاری ورگار می‌باشد.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

const navigation: Menu[] = [
	{
		title: "راهنمای خرید",
		path: "",
		children: [
			{
				title: "روش ارسال",
				path: "",
				children: [],
			},
			{
				title: "روش پرداخت",
				path: "",
				children: [],
			},
			{
				title: "فروشگاه حضوری",
				path: "",
				children: [],
			},
		],
	},
	{
		title: "خدمات مشتریان",
		path: "",
		children: [
			{
				title: "رویه بازگرداندن کالا",
				path: "",
				children: [],
			},
			{
				title: "حریم خصوصی",
				path: "",
				children: [],
			},
			{
				title: "سوالات متداول",
				path: "",
				children: [],
			},
		],
	},
	{
		title: "درباره ورگار",
		path: "",
		children: [
			{
				title: "درباره‌ما",
				path: "",
				children: [],
			},
			{
				title: "ارتباط‌ با‌ ما",
				path: "",
				children: [],
			},
		],
	},
];
