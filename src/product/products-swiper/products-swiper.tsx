"use client";
import React, { Children, isValidElement } from "react";
import s from "./products-swiper.module.css";
import { WknSwiper } from "ui";
import { cn } from "lib/utils";

interface Props {
	className?: string;
	children?: React.ReactNode;
}

export const ProductsSwiper: React.FC<Props> = ({ className, children }) => {
	return (
		<WknSwiper
			slidesPerView="auto"
			spaceBetween={20}
			breakpoints={{
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1536: {
					slidesPerView: 4,
				},
			}}
			className={cn(s.root, className)}
		>
			{Children.map(children, (child) => (
				<Child child={child} />
			))}
		</WknSwiper>
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
				className: cn(s.innerSlide, child.props.className),
			},
		};
	}
	return child;
};
