import localFont from 'next/font/local'

export const abarFont = localFont({
    src: [
        {
            path: "./woff2/AbarLow-Regular.woff2",
            style: "normal",
            weight: "normal",
        },
        {
            path: "./woff2/AbarMid-SemiBold.woff2",
            style: "normal",
            weight: "600",
        },
        {
            path: "./woff2/AbarMid-Bold.woff2",
            style: "normal",
            weight: "bold",
        },
        {
            path: "./woff2/AbarMid-ExtraBold.woff2",
            style: "normal",
            weight: "800",
        },
        {
            path: "./woff2/AbarMid-Black.woff2",
            style: "normal",
            weight: "900",
        },
    ],
    variable: "--abar-pro",
})
