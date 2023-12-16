import "./globals.css";
import type { Metadata } from "next";
import { fontsClassName } from "fonts";
import { cn } from "lib/utils";
import { InitLenisScroll, ViewPrllx } from "ui";

export const metadata: Metadata = {
	title: "فروشگاه آنلاین برشته کاری ورگار",
	description:
		"فروشگاه آنلاین ورگار، بهترین انتخاب برای خرید محصولات برشته کاری است. با مجموعه‌ای گسترده از محصولات با کیفیت و قیمت مناسب، مشتریان ما راضی خواهند شد.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fa" dir="rtl">
			<InitLenisScroll />
			<body className={cn(fontsClassName)}>
				<ViewPrllx>{children}</ViewPrllx>
			</body>
		</html>
	);
}
