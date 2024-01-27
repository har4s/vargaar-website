import React from "react";
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
				<ImageFull className="bg-beige-l" src="/d65edd7c7cfc4697e9d15a35410a13c4.jpeg" />
				<FeaturedProducts />
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
