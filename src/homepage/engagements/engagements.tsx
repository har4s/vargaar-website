import React from "react";
import s from "./engagements.module.css";
import { cn } from "lib/utils";
import { WknSwiper } from "ui";
import { EngagementCard } from "common";

interface Props {
	className?: string;
}

export const Engagements: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<div className={s.Container}>
				<h2 className={s.title}>محتوا های ما</h2>
				<div className={s.sliderContainer}>
					<WknSwiper slidesPerView={3} slideClassName={s.slide}>
						<EngagementCard
							bgColor="#F1874F"
							titleColor="#FFF295"
							textColor="#F4D6B0"
							bgImgSrc="/chicoree-leroux-reconfort-2400x1200-c-default.jpg"
							iconSrc="/icon-france.svg"
							title="قهوه ورگار با دوز ایده آل از کافئین"
							description="طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد."
						/>
						<EngagementCard
							bgColor="#DBAB00"
							titleColor="#FFFFFF"
							textColor="#6C5614"
							bgImgSrc="/chicoree-leroux-reconfort-2400x1200-c-default.jpg"
							iconSrc="/icon-environnement.svg"
							title="آسیاب قهوه ها"
							description="نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند. به همین دلیل اغلب اوقات ما با وبسایتهایی مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود دارد و حذف نشده است که این نشان دهنده بی توجهی طراحان است."
						/>
						<EngagementCard
							bgColor="#FFF295"
							titleColor="#F1874F"
							textColor="#7F1716"
							bgImgSrc="/chicoree-leroux-reconfort-2400x1200-c-default.jpg"
							iconSrc="/icon-nature.svg"
							title="قهوه ورگار با دوز ایده آل از کافئین"
							description="اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود."
						/>
					</WknSwiper>
				</div>
			</div>
		</div>
	);
};
