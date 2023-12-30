import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./engagement-card.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

export const EngagementCard: React.FC<Props> = ({ className }) => {
	return (
		<article className={cn(s.root, className)}>
			<Link href="#">
				<div className={s.background}>
					<div className={s.bgImageContainer}>
						<Image className={s.bgImg} src="" alt="" />
					</div>
				</div>
				<div className={s.content}>
					<div className={s.iconContainer}></div>
					<div>
						<span className={s.title}>Des bienfaits naturels au quotidien</span>
						<p>
							En effet, naturellement sans caféine et d’origine végétale, elle ne vous apporte que des bonnes
							choses : des fibres, peu de calories et pour couronner le tout, une bonne hydratation du corps !
							Vous pouvez donc la consommer sans modération tout au long de votre journée. Matin, midi et
							soir. Idéale aussi à emporter dans un thermos au travail !
						</p>
						<div className={s.link}>
							<span className="Link__txt">En savoir plus</span>
							<div className="Link__arrow">
								<svg
									width={20}
									height={20}
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2 9.69531L17.3918 9.69531" stroke="" strokeWidth={2} strokeMiterlimit={10} />
									<path d="M12.6953 5L17.1953 9.5L12.6953 14" stroke="" strokeWidth={2} />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</article>
	);
};
