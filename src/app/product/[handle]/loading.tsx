import React from "react";
import s from "./loading.module.css";
import { cn } from "lib/utils";

export default function Loading() {
	return (
		<div className={cn(s.wrapper)}>
			<span className={cn(s.loader)} />
		</div>
	);
}
