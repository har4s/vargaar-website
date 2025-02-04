"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./hero.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC<Props> = ({ className }) => {
	const hero = useRef(null);
	const cup = useRef(null);
	const heading = useRef(null);
	// const linesContainer = useRef<HTMLSpanElement>(null);

	useLayoutEffect(() => {
		// Prllx
		const heroST = ScrollTrigger.create({
			trigger: hero.current,
			start: "bottom bottom",
			end: "bottom top",
			onUpdate: (self) => heroPrllx.progress(self.progress),
			// onLeave: () => heroTL.pause(),
			// onEnterBack: () => heroTL.resume(),
		});

		const heroPrllx = gsap.timeline({
			paused: true,
			overwrite: true,
			defaults: {
				duration: 1,
				ease: "linear.none",
			},
		});

		heroPrllx.fromTo(cup.current, { yPercent: 0 }, { yPercent: 30 }, 0);
		heroPrllx.fromTo(heading.current, { yPercent: 0 }, { yPercent: 50 }, 0);

		// Anim lines
		// const lines = (linesContainer && linesContainer.current?.querySelectorAll("span"))!;
		// const lineheight = lines[0].offsetHeight;

		// CurrentIndex
		// const currentIndexWrapper = gsap.utils.wrap(0, lines.length);
		// let currentIndex = currentIndexWrapper(0);
		// const updateCurrentLine = () => {
		// 	lines[currentIndex].classList.remove("active");
		// 	currentIndex = currentIndexWrapper(currentIndex + 1);
		// 	lines[currentIndex].classList.add("active");
		// };

		// Init Lines
		// gsap.set(lines, { y: (index) => index * lineheight });

		// const heroTL = gsap.timeline({
		// 	defaults: {
		// 		duration: 1.6,
		// 		ease: "expo.inOut",
		// 	},
		// 	delay: 4,
		// });

		// heroTL.to(lines, {
		// 	// y: `-=${lineheight}`,
		// 	// modifiers: {
		// 	// 	y(value: number, target: HTMLSpanElement) {
		// 	// 		const idx = getChildIndex(target);
		// 	// 		const currentY = (idx + 1 * -currentIndex) * lineheight;
		// 	// 		const nextY = currentY + lineheight;
		// 	// 		const y = gsap.utils.unitize(gsap.utils.wrap(currentY, nextY));
		// 	// 		return y(value);
		// 	// 	},
		// 	// },
		// 	repeat: -1,
		// 	repeatDelay: 1.4,
		// 	repeatRefresh: true,
		// 	// onStart: updateCurrentLine,
		// 	// onRepeat: updateCurrentLine,
		// });
		return () => {
			heroST.kill();
			heroPrllx.kill();
			// heroTL.kill();
		};
	}, []);

	return (
		<section ref={hero} className={cn(s.root, className)}>
			<div className={s.bgContainer}>
				<Image
					className={s.bgImg}
					src="/bg-texture.png"
					alt=""
					fill
					// data-prllxfrom='{"yPercent" : "0"}'
					// data-prllxto='{"yPercent" : "20"}'
					// data-prllxstart="top bottom"
					// data-prllxend="bottom top"
				/>
				{/* <div className={s.overlay} /> */}
			</div>
			<div className={cn(s.Container)}>
				<div ref={heading} className={s.heading}>
					<Image src="vargaar-title.svg" width={837} height={544} alt="" className={s.title} />
				</div>
				<div className={s.images}>
					<div className={cn(s.smoke, s.smoke1)}>
						<Image className={s.img} src="/smoke.webp" alt="" width={1400} height={1226} />
					</div>
					<div className={cn(s.smoke, s.smoke2)}>
						<Image className={s.img} src="/smoke.webp" alt="" width={1400} height={1226} />
					</div>
					<div ref={cup} className={cn(s.cup)}>
						<Image className={s.img} src="/cup.png" alt="" width={1090} height={644} />
					</div>
				</div>
			</div>
		</section>
	);
};
