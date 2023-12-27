import React from "react";
import s from "./engagements.module.css";
import { cn } from "lib/utils";
import { WknSwiper } from "ui";
import { EngagementCard } from "common";

interface Props {
	className?: string;
}

export const Engagements: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<div className={s.Container}>
				<h2 className={s.title}>محتوا های ما</h2>
				<div className={s.sliderContainer}>
					<WknSwiper>
						<EngagementCard />
						<EngagementCard />
						<EngagementCard />
					</WknSwiper>
				</div>
			</div>
		</div>
	);
};
