"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import s from "./menu.module.css";
import { SubMenu } from "./sub-menu";
import { cn } from "lib/utils";
import type { Menu as MenuType, Product } from "lib/types";
import { SocialIcons } from "common";

interface Props {
	menu: MenuType[];
	featuredProducts: Product[];
	className?: string;
}

export const Menu: React.FC<Props> = ({ className, menu, featuredProducts }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [submenu, setSubmenu] = useState<MenuType>();
	const close = () => setSubmenu(undefined);
	const toggle = (item?: MenuType) => setSubmenu(item);
	const hasChildren = (item: MenuType) => !!item.children && item.children?.length > 0;
	const itemsWithChildren = menu.filter((item) => hasChildren(item));
	// const openMenu = () => setMenuOpen(true);
	const toggleMenu = () => {
		// setMenuOpen((x) => !x)
		const [firstSubmenu] = itemsWithChildren;
		setSubmenu((current) => {
			return !current ? firstSubmenu : undefined;
		});
	};

	const handleLinkClick = (hasChildren: boolean, item: MenuType) => (e: any) => {
		if (hasChildren) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
			e.preventDefault();
			toggle(submenu && submenu.id === item.id ? undefined : item);
		}
	};

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname, searchParams]);

	return (
		<>
			<button onClick={toggleMenu} className={s.btn} aria-label="Navigation Toggle">
				<i className={s.icon}>
					<span className={s.line} />
					<span className={s.line} />
					<span className={s.line} />
				</i>
			</button>
			<nav className={cn(s.root, className, { [s.open]: isMenuOpen })} data-lenis-prevent>
				<div className={s.inner}>
					<ul className={s.main}>
						{menu.map((item, idx) => {
							const hasChildren = !!item.children && item.children?.length > 0;
							return (
								<li key={idx} className={cn(s.item)}>
									<Link onClick={handleLinkClick(hasChildren, item)} href={item.path} className={cn(s.link)}>
										<span>{item.title}</span>
										{hasChildren && (
											<span className={s.arrow}>
												<ChevronDownIcon className={s.icon} />
											</span>
										)}
									</Link>
								</li>
							);
						})}
					</ul>
					<SocialIcons className={s.socials} />
				</div>
			</nav>
			<div className={s.submenus}>
				{itemsWithChildren.map((item, idx) => {
					return (
						<SubMenu
							key={idx}
							menu={item}
							featuredProducts={featuredProducts}
							current={submenu}
							onClose={close}
						/>
					);
				})}
			</div>
		</>
	);
};
