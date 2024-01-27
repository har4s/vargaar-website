import React from "react";
import Image from "next/image";
import s from "./engagement-card.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
	bgColor: string;
	titleColor: string;
	textColor: string;
	bgImgSrc: string;
	icon: any;
	title: string;
	description: string;
}

export const EngagementCard: React.FC<Props> = ({
	className,
	bgColor,
	titleColor,
	textColor,
	bgImgSrc,
	icon: Icon,
	title,
	description,
}) => {
	return (
		<article className={cn(s.root, className)} style={{ backgroundColor: bgColor }}>
			<div className={s.background}>
				<div className={s.bgImageContainer}>
					<Image className={s.bgImg} src={bgImgSrc} alt="" width={600} height={1200} />
					<div className={s.overlay} />
				</div>
			</div>
			<div className={s.content}>
				<div className={s.iconContainer} style={{ color: titleColor }}>
					<Icon className={s.icon} />
				</div>
				<div className={s.body}>
					<span className={s.title} style={{ color: titleColor }}>
						{title}
					</span>
					<p className={s.description} style={{ color: textColor }}>
						{description}
					</p>
				</div>
			</div>
		</article>
	);
};
