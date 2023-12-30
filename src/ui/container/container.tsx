import React from "react";
import s from "./container.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
	children?: React.ReactNode;
	el?: HTMLElement;
}

export const Container: React.FC<Props> = ({ className, children, el = "div" }) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;
	return <Component className={cn(s.root, className)}>{children}</Component>;
};
