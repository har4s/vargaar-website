import React from "react";
import Image from "next/image";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import s from "./txt-section.module.css";
import { cn } from "lib/utils";
import { Button } from "ui";

interface Props {
	className?: string;
}

export const TxtSection: React.FC<Props> = ({ className }) => {
	return (
		<section className={cn(s.root, className)}>
			<div className={s.Container}>
				<h2 className={s.title}>
					قهوه ورگار, طعمی تکرار نشدنی
					<InlineImage src="/img2-260x140-c-default.jpg" />
					که پیر و جوان
					<InlineImage src="/img3-260x140-c-default.jpg" />
					را به خود جلب کرده
				</h2>
				<p className={s.subtitle}>
					Chicorée Leroux از سال 1858 در آنجا بوده است. دوره ها و نسل ها را پشت سر گذاشته است اما به همان شکل
					باقی مانده است. طعمی تکرار نشدنی که پیر و جوان را به خود جلب کرده است. فرهنگی از اینجا، از فرانسه،
					از Hauts de France، زیر آفتاب، که توسط بادها و باران جاروب شده است. فرهنگی که در سرزمین های ما شکوفا
					می شود و مناظر ما را شکل می دهد. دانشی که نسل‌ها از مزرعه‌ها به کارخانه‌ها، از مزرعه‌ها به
					کارخانه‌ها منتقل شده است.
				</p>
				<div className={s.actions}>
					<Button>بیشتر بخوانید</Button>
				</div>
			</div>
		</section>
	);
};

const InlineImage: React.FC<{
	src: string | StaticImport;
}> = ({ src }) => {
	return (
		<div className={s.imageContainer}>
			<Image className={s.image} src={src} alt="" fill />
		</div>
	);
};
