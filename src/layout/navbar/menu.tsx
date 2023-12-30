import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import s from "./menu.module.css";
import { SubMenu } from "./sub-menu";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

export const Menu: React.FC<Props> = ({ className }) => {
	return (
		<>
			<nav className={cn(s.root, className)} data-lenis-prevent>
				<div className={s.inner}>
					<ul className={s.main}>
						<li className={cn(s.item)}>
							<Link href="/shop/" className={cn(s.link)}>
								<span>محصولات ورگار</span>
								<span className={s.arrow}>
									<ChevronDownIcon className={s.icon} />
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<SubMenu />
		</>
	);
};
