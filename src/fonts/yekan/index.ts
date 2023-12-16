import localFont from "next/font/local";

export const yekanFont = localFont({
	src: [
		{
			path: "./woff2/YekanBakh-Thin.woff2",
			style: "normal",
			weight: "100",
		},
		{
			path: "./woff2/YekanBakh-Light.woff2",
			style: "normal",
			weight: "300",
		},
		{
			path: "./woff2/YekanBakh-Regular.woff2",
			style: "normal",
			weight: "400",
		},
		{
			path: "./woff2/YekanBakh-SemiBold.woff2",
			style: "normal",
			weight: "500",
		},
		{
			path: "./woff2/YekanBakh-Bold.woff2",
			style: "normal",
			weight: "600",
		},
		{
			path: "./woff2/YekanBakh-ExtraBold.woff2",
			style: "normal",
			weight: "700",
		},
		{
			path: "./woff2/YekanBakh-Black.woff2",
			style: "normal",
			weight: "800",
		},
		{
			path: "./woff2/YekanBakh-ExtraBlack.woff2",
			style: "normal",
			weight: "900",
		},
	],
	variable: "--yekan-bakh",
});
