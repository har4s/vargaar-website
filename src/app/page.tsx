import React, { Suspense } from "react";
import { Engagements, FeaturedProducts, Hero, ImageFull, TextImage } from "homepage";
import { Footer, Navbar } from "layout";
import { TextMarquee } from "ui";
import { Newsletter } from "common";

export default function Home() {
	return (
		<>
			<div className="min-h-screen">
				<Navbar />
				<Hero />
				{/* <ImageFull src="/chicoree-leroux-boisson-chaude-2400x1200-c-default.webp" /> */}
				<Suspense>
					<FeaturedProducts />
				</Suspense>
				<TextImage />
				<ImageFull src="/chicoree-leroux-reconfort-2400x1200-c-default.jpg">
					<TextMarquee className="absolute bottom-44 z-10">طیف وسیعی از محصولات ما را کشف کنید</TextMarquee>
				</ImageFull>
				<Engagements />
				{/* <SocialMediaSection /> */}
				<Newsletter />
			</div>
			<Footer />
		</>
	);
}
