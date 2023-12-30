import React, { Suspense } from "react";
import Link from "next/link";
import s from "./footer.module.css";
import { cn } from "lib/utils";
import { Logo } from "ui";
import { getMenu } from "lib/saleor";

interface Props {
	className?: string;
}

export const Footer: React.FC<Props> = async ({ className }) => {
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
					<Suspense>
						<Menu />
					</Suspense>
					<div className={s.copyrightContainer}>
						<p className={s.copyright}>&copy; ۱۴۰۲ کليه حقوق اين سايت متعلق به برشته کاری ورگار می‌باشد.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

const Menu: React.FC = async () => {
	const menu = await getMenu("footer");

	return (
		<nav className={s.nav}>
			{menu.map((menu, idx) => (
				<div className={s.itemContainer} key={idx}>
					<h4 className={s.itemTitle}>{menu.title}</h4>
					<ul role="list" className={s.children}>
						{menu.children?.map((item, idx) => (
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
	);
};
