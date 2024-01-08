import React from "react";
import Image from "next/image";
import s from "./text-image.module.css";
import { cn } from "lib/utils";
import { ClickableButton } from "ui";

interface Props {
	className?: string;
}
export const TextImage: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<div className={s.Container}>
				<div className={s.text}>
					<h2 className={s.title}>اما در واقع آن چیست؟</h2>
					<div className={s.block}>
						<span className={s.subtitle}>
							کاسنی لرو یک محصول طبیعی، تاریخی و سالم است. نوشیدنی ساخته شده از ریشه کاسنی بوداده و به طور
							طبیعی بدون کافئین.
						</span>
						<div className={s.content}>
							<p>
								نسل‌ها در فرانسه وجود داشته است و هنوز در قلب خانه‌های فرانسوی است. بدون هیچ محرکی در هر زمانی
								از روز توسط پیر و جوان مصرف می شود.
							</p>
						</div>
					</div>
					<div className={s.actions}>
						<ClickableButton>قهوه خودتو پیدا کن</ClickableButton>
					</div>
				</div>
				<div className={s.imageContainer}>
					<Image
						className={s.image}
						src="/img1-scaled-1080x1166-c-default.webp"
						alt=""
						width={1080}
						height={1166}
						data-prllxfrom='{"yPercent" : "-10"}'
						data-prllxto='{"yPercent" : "10"}'
						data-prllxstart="top bottom"
						data-prllxend="bottom top"
					/>
				</div>
			</div>
		</div>
	);
};
