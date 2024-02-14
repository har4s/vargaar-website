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
				width={78}
				height={78}
				viewBox="0 0 78 78"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M0 78H78V0H0V78Z" fill="#EAE0C8" />
				<path d="M51.7956 42.0527H57.7956V36.0527H51.7596L51.7956 42.0527Z" fill="#EAE0C8" />
				<path d="M35.7556 42.0527H41.7556V36.0527H35.7196L35.7556 42.0527Z" fill="#EAE0C8" />
				<path d="M19.7196 42.0527H25.7196V36.0527H19.6836L19.7196 42.0527Z" fill="#EAE0C8" />
			</svg>
		),
		title: "خدمات مشتری",
		subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
	},
	{
		icon: (props: any) => (
			<svg
				width={68}
				height={78}
				viewBox="0 0 68 78"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					opacity="0.4"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.52832 0.955078V39.1551C0.52832 66.5951 33.0963 76.7711 33.4243 76.8711L34.0043 77.0471L34.5843 76.8711C34.9123 76.7711 67.4723 66.5951 67.4723 39.1551V0.955078H0.52832Z"
					fill="#177245"
				/>
				<path
					d="M19.3057 33.7345L31.1137 45.5625L50.9497 25.7185L46.7057 21.4785L31.1177 37.0745L23.5537 29.4945L19.3057 33.7345Z"
					fill="#177245"
				/>
			</svg>
		),
		title: "پرداخت امن",
		subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
	},
	{
		icon: (props: any) => (
			<svg
				width={96}
				height={96}
				viewBox="0 0 96 96"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					opacity="0.4"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M86.2084 46.4079C78.7204 40.7279 74.8684 31.4199 76.1444 22.1119L76.5044 19.4999L73.8884 19.8599C64.6084 21.1399 55.2724 17.2799 49.5924 9.79189L48.0004 7.69189L46.4044 9.79189C40.7244 17.2799 31.3924 21.1439 22.1084 19.8599L19.4964 19.4999L19.8564 22.1119C21.1324 31.4199 17.2764 40.7279 9.79238 46.4079L7.69238 47.9999L9.79238 49.5959C17.2764 55.2719 21.1324 64.5799 19.8564 73.8919L19.4964 76.5039L22.1084 76.1439C31.3884 74.8719 40.7244 78.7199 46.4044 86.2079L48.0004 88.3079L49.5924 86.2079C55.2724 78.7199 64.6124 74.8759 73.8884 76.1439L76.5044 76.5039L76.1444 73.8919C74.8684 64.5799 78.7204 55.2719 86.2084 49.5959L88.3084 47.9999L86.2084 46.4079Z"
					fill="#FFBA00"
				/>
				<path
					d="M34.3896 56.535L38.6336 60.779L60.7737 38.639L56.5336 34.395L34.3896 56.535Z"
					fill="#FFBA00"
				/>
				<path d="M53.2976 59.287H59.2976V53.287H53.2656L53.2976 59.287Z" fill="#FFBA00" />
				<path d="M41.8857 41.875V35.875H35.8616L35.8856 41.875H41.8857Z" fill="#FFBA00" />
			</svg>
		),
		title: "تحویل رایگان",
		subtitle: "ارسال رایگان برای سفارش های بالای 2 ملیون تومان",
	},
	{
		icon: (props: any) => (
			<svg
				width={80}
				height={80}
				viewBox="0 0 80 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					opacity="0.4"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M77.606 0.60791L2.182 23.0319L0.75 23.5759V26.1359L30.27 45.8639L32.4955 47.3381L34.466 50.1519L53.414 78.5039L54.106 79.3919H56.674L79.05 3.57591L79.25 2.32791L77.606 0.60791Z"
					fill="#CC3333"
				/>
				<path
					d="M59.0141 17.2778L36.4141 39.8778L40.6101 44.1658L63.2581 21.5218L59.0141 17.2778Z"
					fill="#CC3333"
				/>
			</svg>
		),
		title: "تحویل سریع",
		subtitle: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
	},
];
