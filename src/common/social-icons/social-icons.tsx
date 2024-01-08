import React from "react";
import s from "./social-icons.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

export const SocialIcons: React.FC<Props> = ({ className }) => {
	return <div className={cn(s.root, className)}></div>;
};
