"use client";
import React, { type JSXElementConstructor } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeRefs } from "react-merge-refs";
import s from "./button.module.css";
import { cn } from "lib/utils";

const buttonVariants = cva(s.root, {
	variants: {
		variant: {
			default: s.default,
			light: s.light,
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	href?: string;
	className?: string;
	type?: "submit" | "reset" | "button";
	Component?: string | JSXElementConstructor<any>;
	width?: string | number;
	loading?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
}

export const Button: React.FC<Props> = React.forwardRef(function Button(props, buttonRef) {
	const { variant, className, children, disabled = false, Component = "button", ...rest } = props;
	const ref = React.useRef<typeof Component>(null);

	return (
		<Component
			data-variant={variant}
			ref={mergeRefs([ref, buttonRef])}
			disabled={disabled}
			className={cn(buttonVariants({ variant, className }))}
			{...rest}
		>
			{children}
			{/* {loading && (
                <i className="pl-2 m-0 flex">
                    <LoadingDots />
                </i>
            )} */}
		</Component>
	);
});
