"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./filters.module.css";
import { cn } from "lib/utils";
import type { Menu } from "lib/types";

interface Props {
	className?: string;
	menu: Menu[];
}

export const Filters: React.FC<Props> = ({ className, menu }) => {
	const pathname = usePathname();

	return (
		<nav className={cn(s.root, className)}>
			<div className={s.Container}>
				<ul className={s.list}>
					{menu.map((item, idx) => (
						<li key={idx} className={s.item}>
							<Link
								href={item.path}
								className={cn(s.link, {
									[s.active]: pathname === item.path,
								})}
							>
								<span>{item.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
