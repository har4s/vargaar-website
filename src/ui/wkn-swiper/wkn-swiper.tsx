"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { Children, isValidElement } from "react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type SwiperOptions } from "swiper/types";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import s from "./wkn-swiper.module.css";
import { cn } from "lib/utils";

interface BaseProps {
	className?: string;
	children?: React.ReactNode;
	slideClassName?: string;
	navigationClassName?: string;
}

interface RootProps extends BaseProps, SwiperOptions {}

export const WknSwiper: React.FC<RootProps> = ({
	className,
	children,
	slideClassName,
	navigationClassName,
	...props
}) => {
	const onDragStart: React.DragEventHandler<HTMLElement> = (e) => {
		e.currentTarget.classList.add("dragging");
	};
	const onDragLeave: React.DragEventHandler<HTMLElement> = (e) => {
		e.currentTarget.classList.remove("dragging");
	};

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, Autoplay]}
			speed={600}
			spaceBetween={40}
			slidesPerView={1}
			longSwipesRatio={0.1}
			onDragStart={onDragStart}
			onDragLeave={onDragLeave}
			navigation={{
				nextEl: ".wkn-swiper-btn-prev",
				prevEl: ".wkn-swiper-btn-next",
			}}
			{...props}
			className={cn("wkn-swiper", s.root, className)}
		>
			{Children.map(children, (child) => (
				<SwiperSlide className={slideClassName}>
					<Child child={child} />
				</SwiperSlide>
			))}
			<div slot="navigation" className={cn(s.navigation, navigationClassName)}>
				<button className={cn(s.btn, "wkn-swiper-btn", "wkn-swiper-btn-next")}>
					<span className={s.arrow}>
						<ArrowRightIcon />
					</span>
				</button>
				<button className={cn(s.btn, "wkn-swiper-btn", "wkn-swiper-btn-prev")}>
					<span className={s.arrow}>
						<ArrowLeftIcon />
					</span>
				</button>
			</div>
		</Swiper>
	);
};

const Child: React.FC<{
	child: React.ReactNode;
}> = ({ child }) => {
	if (isValidElement(child)) {
		return {
			...child,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			props: {
				...child.props,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
				className: cn(child.props.className, s.innerSlide),
			},
		};
	}
	return child;
};
