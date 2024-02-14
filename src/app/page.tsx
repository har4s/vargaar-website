import React from "react";
import { Engagements, FeaturedProducts, Hero, ImageFull } from "homepage";
import { Footer, Navbar } from "layout";
import { TextMarquee } from "ui";
import { Newsletter } from "common";

export default function Home() {
	return (
		<>
			<div className="min-h-screen">
				<Navbar />
				<Hero />
				<ImageFull className="bg-beige-l" src="/e121fdad9c8bf82ec913fa6b4d4329b8.jpeg" />
				<FeaturedProducts />
				{/* <TextImage /> */}
				<ImageFull src="/277c25153fe235547685147c97c8b496.jpeg">
					<TextMarquee className="absolute bottom-1/2 z-10">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
					</TextMarquee>
					{/* <TextMarquee reverse className="absolute bottom-1/2 z-10 translate-y-full pt-10 lg:pt-[2.778vw]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</TextMarquee> */}
				</ImageFull>
				<Engagements />
				{/* <SocialMediaSection /> */}
				<Newsletter />
			</div>
			<Footer />
		</>
	);
}
