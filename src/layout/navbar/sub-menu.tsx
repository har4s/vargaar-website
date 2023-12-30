import React from "react";
import s from "./sub-menu.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

export const SubMenu: React.FC<Props> = ({ className }) => {
	return <div className={cn(s.root, className)}>sub-menu</div>;
};
