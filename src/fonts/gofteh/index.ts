import localFont from "next/font/local";

export const goftehFont = localFont({
	src: [
		{
			path: "./GoftehWeb-Heavy.woff2",
			style: "normal",
			weight: "normal",
		},
	],
	variable: "--gofteh-heavy",
});
