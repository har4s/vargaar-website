import React from "react";
import { Newsletter, Reinsurance } from "common";
import { Footer, Navbar } from "layout";

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<main>
				<Navbar />
				{children}
				<Reinsurance />
				<Newsletter />
			</main>
			<Footer />
		</>
	);
}
