import React from "react";
import { FeaturedProducts, Hero, ImageFull, TextImage, TxtSection } from "homepage";
import { Footer, Navbar } from "layout";
import { TextMarquee } from "ui";
import { Newsletter, SocialMediaSection } from "common";

export default function Home() {
	return (
		<>
			<div className="min-h-screen">
				<Navbar />
				<Hero />
				<ImageFull src="/chicoree-leroux-boisson-chaude-2400x1200-c-default.webp" />
				<TextImage />
				<FeaturedProducts />
				<ImageFull src="/chicoree-leroux-reconfort-2400x1200-c-default.jpg">
					<TextMarquee className="absolute bottom-44 z-10">طیف وسیعی از محصولات ما را کشف کنید</TextMarquee>
				</ImageFull>
				<TxtSection />
				<SocialMediaSection />
				<Newsletter />
			</div>
			<Footer />
		</>
	);
}
