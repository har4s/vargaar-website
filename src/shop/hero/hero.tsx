import React from "react";
import s from "./hero.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
	title: string;
	description: string;
}

export const Hero: React.FC<Props> = ({ className, title, description }) => {
	return (
		<section className={cn(s.root, className)}>
			<div className={s.Container}>
				<h1 className={s.title}>{title}</h1>
				<p className={s.subtitle}>{description}</p>
			</div>
		</section>
	);
};
