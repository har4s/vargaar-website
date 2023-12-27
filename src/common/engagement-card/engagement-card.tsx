import React from "react";

interface Props {}

export const EngagementCard: React.FC<Props> = () => {
	return (
		<article className="engagement__card --bienfaits">
			<a href="https://www.leroux.fr/nos-engagements/bienfaits/">
				<div className="article__background">
					<div className="visual__container">
						<picture className="visual">
							<source
								data-srcset="https://www.leroux.fr/wp-content/uploads/2023/04/img3-860x1120-c-default.webp 100w"
								type="image/webp"
								srcSet="https://www.leroux.fr/wp-content/uploads/2023/04/img3-860x1120-c-default.webp 100w"
							/>
							<img
								className="img-fluid ls-is-cached lazyloaded"
								data-src="https://www.leroux.fr/wp-content/uploads/2023/04/img3-860x1120-c-default.jpg"
								alt=""
								src="https://www.leroux.fr/wp-content/uploads/2023/04/img3-860x1120-c-default.jpg"
							/>
						</picture>
					</div>
				</div>
				<div className="article__content">
					<div className="visual__container">
						<picture className="visual">
							<source
								data-srcset="https://www.leroux.fr/wp-content/uploads/2023/04/icon-nature.svg 100w"
								type="image/webp"
								srcSet="https://www.leroux.fr/wp-content/uploads/2023/04/icon-nature.svg 100w"
							/>
							<img
								className="img-fluid lazyloaded"
								data-src="https://www.leroux.fr/wp-content/uploads/2023/04/icon-nature.svg"
								alt=""
								src="https://www.leroux.fr/wp-content/uploads/2023/04/icon-nature.svg"
							/>
						</picture>
					</div>
					<div>
						<span className="title">Des bienfaits naturels au quotidien</span>
						<p>
							En effet, naturellement sans caféine et d’origine végétale, elle ne vous apporte que des bonnes
							choses : des fibres, peu de calories et pour couronner le tout, une bonne hydratation du corps !
							Vous pouvez donc la consommer sans modération tout au long de votre journée. Matin, midi et
							soir. Idéale aussi à emporter dans un thermos au travail !
						</p>
						<div className="Link">
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
			</a>
		</article>
	);
};
