import React from "react";
import s from "./newsletter.module.css";
import { cn } from "lib/utils";
import { SocialIcons } from "ui";

interface Props {
	className?: string;
}

export const Newsletter: React.FC<Props> = ({ className }) => {
	// const container = useRef<HTMLDivElement>(null);

	// useLayoutEffect(() => {
	// 	const images = (container && container.current?.querySelectorAll(".imgContainer"))!;
	// 	const offsetHeight = (container && container.current?.offsetHeight)!;

	// 	const TL = gsap.timeline({
	// 		paused: true,
	// 		defaults: { ease: "expo.out", duration: 1.6 },
	// 		scrollTrigger: {
	// 			trigger: container.current,
	// 			onEnter: () => TL.invalidate().restart(),
	// 			onEnterBack: () => TL.invalidate().restart(),
	// 		},
	// 	});

	// 	TL.fromTo(
	// 		images,
	// 		{ y: () => gsap.utils.random([-offsetHeight, offsetHeight]), rotate: () => gsap.utils.random(-20, 20) },
	// 		{
	// 			y: () => gsap.utils.random(offsetHeight * 0.5, 1),
	// 			rotate: () => gsap.utils.random(-20, 20),
	// 			stagger: 0.05,
	// 		},
	// 	);

	// 	return () => {
	// 		TL.kill();
	// 	};
	// }, []);

	return (
		<div className={cn(s.root, className)}>
			<div className={cn(s.Container)}>
				<div className={s.heading}>
					<h3 className={s.title}>
						<strong>برشته کاری ورگار</strong>
						<br />
						ما را در شبکه های اجتماعی دنبال کنید
					</h3>
				</div>
				<SocialIcons className={s.socials} />
			</div>
			{/* <div className={s.images}>
				<div className={cn(s.imageContainer, "imgContainer")}>
					<Image className={s.image} src="/newsletter-visual.jpg" alt="" width={300} height={300} />
				</div>
				<div className={cn(s.imageContainer, "imgContainer")}>
					<Image className={s.image} src="/newsletter-visual-2.jpg" alt="" width={300} height={300} />
				</div>
			</div> */}
		</div>
	);
};
