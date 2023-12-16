import React from "react";
import s from "./reinsurance.module.css";
import { cn } from "lib/utils";

interface Props {
	className?: string;
}

export const Reinsurance: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<div className={s.Container}>
				{data.map((item, idx) => (
					<div key={idx} className={s.item}>
						<div className={s.iconContainer}>
							<item.icon className={s.icon} />
						</div>
						<h4 className={s.title}>{item.title}</h4>
						<p className={s.subtitle}>{item.subtitle}</p>
					</div>
				))}
			</div>
		</div>
	);
};

const data = [
	{
		icon: (props: any) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="151"
				height="150"
				viewBox="0 0 151 150"
				fill="none"
				{...props}
			>
				<path
					opacity="0.3"
					d="M75.593 28.3333C48.4797 28.3333 28.833 50.4533 28.833 74.9999C28.833 82.8399 31.1197 90.9133 35.133 98.2866C35.8797 99.4999 35.973 101.04 35.4597 102.487L32.333 112.94C31.633 115.46 33.7797 117.327 36.1597 116.58L45.5863 113.78C48.153 112.94 50.1597 114.013 52.5443 115.46C59.3577 119.473 67.8463 121.527 75.4997 121.527C98.6463 121.527 122.166 103.653 122.166 74.8599C122.166 50.0333 102.1 28.3333 75.593 28.3333Z"
					fill="#DBAB00"
				></path>
				<path
					d="M53.8933 69.0736C57.2066 69.0736 59.8666 71.7336 59.8666 75.0469C59.8666 78.3136 57.2066 80.9736 53.8933 81.0203C50.6266 81.0203 47.9199 78.3136 47.9199 75.0469C47.9199 71.7336 50.5799 69.0736 53.8933 69.0736ZM75.4085 69.0736C78.7218 69.0736 81.3818 71.7336 81.3818 75.0469C81.3818 78.3136 78.7218 81.0203 75.4085 81.0203C72.0951 80.9736 69.4351 78.3136 69.4351 75.0003C69.4351 71.7336 72.1418 69.0269 75.4085 69.0736ZM96.9209 69.0736C100.234 69.0736 102.894 71.7336 102.894 75.0469C102.894 78.3136 100.234 81.0203 96.9209 81.0203C93.6075 81.0203 90.9475 78.3136 90.9475 75.0469C90.9475 71.7336 93.6075 69.0736 96.9209 69.0736Z"
					fill="#DBAB00"
				></path>
			</svg>
		),
		title: "خدمات مشتری",
		subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
	},
	{
		icon: (props: any) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="151"
				height="150"
				viewBox="0 0 151 150"
				fill="none"
				{...props}
			>
				<path
					opacity="0.3"
					d="M75.9045 121.667C75.3266 121.667 74.7487 121.534 74.2272 121.264L57.4221 112.565C52.6535 110.094 48.9233 107.321 46.0104 104.09C39.6351 97.0244 36.088 87.9546 36.0317 78.5462L35.8342 47.5798C35.8108 44.0059 38.1176 40.7981 41.566 39.59L72.4232 28.8316C74.2554 28.1772 76.2991 28.1681 78.1643 28.7996L109.139 39.1918C112.606 40.3496 114.95 43.5346 114.969 47.1039L115.167 78.0931C115.228 87.4878 111.803 96.5942 105.526 103.738C102.646 107.014 98.9487 109.828 94.2271 112.345L77.5723 121.241C77.0555 121.52 76.4823 121.662 75.9045 121.667Z"
					fill="#72A94B"
				></path>
				<path
					d="M72.3234 85.831C71.4213 85.8355 70.5193 85.5106 69.824 84.8425L60.8788 76.2395C59.4975 74.9032 59.4835 72.7342 60.8506 71.3888C62.2177 70.0389 64.4493 70.0251 65.8353 71.3568L72.2717 77.5436L87.9868 62.049C89.3587 60.6991 91.5903 60.6854 92.9715 62.017C94.3575 63.3532 94.3716 65.5268 93.0044 66.8676L74.8087 84.8105C74.1227 85.4877 73.2254 85.8264 72.3234 85.831Z"
					fill="#72A94B"
				></path>
			</svg>
		),
		title: "پرداخت امن",
		subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
	},
	{
		icon: (props: any) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="151"
				height="150"
				viewBox="0 0 151 150"
				fill="none"
				{...props}
			>
				<path
					opacity="0.3"
					d="M54.1763 107.986C58.0497 107.986 61.223 111.16 61.223 115.08C61.223 118.953 58.0497 122.126 54.1763 122.126C50.2563 122.126 47.083 118.953 47.083 115.08C47.083 111.16 50.2563 107.986 54.1763 107.986ZM106.676 107.986C110.55 107.986 113.723 111.16 113.723 115.08C113.723 118.953 110.55 122.126 106.676 122.126C102.756 122.126 99.583 118.953 99.583 115.08C99.583 111.16 102.756 107.986 106.676 107.986Z"
					fill="#F1874F"
				></path>
				<path
					d="M32.9441 30.7039L44.0741 32.3839C45.6608 32.6686 46.8274 33.9706 46.9674 35.5572L47.8541 46.0106C47.9941 47.5086 49.2075 48.6286 50.7008 48.6286H113.724C116.571 48.6286 118.437 49.6086 120.304 51.7552C122.171 53.9019 122.497 56.9819 122.077 59.7772L117.644 90.3906C116.804 96.2752 111.764 100.611 105.837 100.611H54.9241C48.7174 100.611 43.5841 95.8506 43.0708 89.6952L38.7774 38.8239L31.7308 37.6106C29.8641 37.2839 28.5574 35.4639 28.8841 33.5972C29.2108 31.6839 31.0308 30.4239 32.9441 30.7039ZM98.3708 65.8906H85.4441C83.4841 65.8906 81.9441 67.4306 81.9441 69.3906C81.9441 71.3039 83.4841 72.8906 85.4441 72.8906H98.3708C100.331 72.8906 101.871 71.3039 101.871 69.3906C101.871 67.4306 100.331 65.8906 98.3708 65.8906Z"
					fill="#F1874F"
				></path>
			</svg>
		),
		title: "تحویل رایگان",
		subtitle: "ارسال رایگان برای سفارش های بالای 2 ملیون تومان",
	},
	{
		icon: (props: any) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="151"
				height="150"
				viewBox="0 0 151 150"
				fill="none"
				{...props}
			>
				<path
					d="M116.352 34.1727C114.186 31.9584 110.979 31.1394 107.989 32.006L38.2658 52.1517C35.1111 53.027 32.8751 55.5274 32.2728 58.6994C31.6575 61.932 33.8068 66.04 36.6148 67.756L58.4158 81.068C60.6518 82.4374 63.5378 82.095 65.3881 80.2404L90.3525 55.276C91.6091 53.9717 93.6891 53.9717 94.9458 55.276C96.2025 56.5284 96.2025 58.5694 94.9458 59.8694L69.9381 84.8337C68.0835 86.6884 67.7368 89.5657 69.1018 91.806L82.4225 113.689C83.9825 116.285 86.6691 117.763 89.6158 117.763C89.9625 117.763 90.3525 117.763 90.6991 117.715C94.0791 117.286 96.7658 114.985 97.7625 111.735L118.432 42.536C119.342 39.5894 118.519 36.3827 116.352 34.1727Z"
					fill="#7F1716"
				></path>
				<path
					opacity="0.3"
					d="M64.4564 105.95C65.7217 107.219 65.7217 109.278 64.4564 110.547L58.537 116.462C57.9044 117.099 57.0724 117.416 56.2404 117.416C55.4084 117.416 54.5764 117.099 53.9437 116.462C52.674 115.193 52.674 113.139 53.9437 111.869L59.8587 105.95C61.1284 104.684 63.1867 104.684 64.4564 105.95ZM61.0603 89.535C62.3257 90.8047 62.3257 92.863 61.0603 94.1327L55.141 100.048C54.5083 100.685 53.6763 101.001 52.8443 101.001C52.0123 101.001 51.1803 100.685 50.5477 100.048C49.278 98.778 49.278 96.724 50.5477 95.4543L56.4627 89.535C57.7323 88.2697 59.7907 88.2697 61.0603 89.535ZM44.7618 84.3679C46.0271 85.6376 46.0271 87.6959 44.7618 88.9656L38.8425 94.8806C38.2098 95.5176 37.3778 95.8339 36.5458 95.8339C35.7138 95.8339 34.8818 95.5176 34.2491 94.8806C32.9795 93.6109 32.9795 91.5569 34.2491 90.2873L40.1641 84.3679C41.4338 83.1026 43.4921 83.1026 44.7618 84.3679Z"
					fill="#7F1716"
				></path>
			</svg>
		),
		title: "تحویل سریع",
		subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
	},
];
