import React from "react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import s from "./social-icons.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

export const SocialIcons: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<Link className={s.item} href="#">
				<InstagramIcon />
			</Link>
			<Link className={s.item} href="#">
				<FacebookIcon />
			</Link>
		</div>
	);
};
