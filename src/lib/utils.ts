import libphonenumber from "libphonenumber-js";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReadonlyURLSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getChildIndex(node: HTMLElement) {
	return Array.prototype.indexOf.call(node.parentNode?.childNodes, node);
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
	const paramsString = params.toString();
	const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

	return `${pathname}${queryString}`;
};

export function invariant<T>(val: T | null | undefined, message: string): asserts val is T {
	if (val === undefined || val === null) {
		throw new Error(message);
	}
}

export const formatDate = (date: Date | number) => {
	return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
};

export const formatMoney = (amount: number, currency: string) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	}).format(amount);

export const formatMoneyRange = (
	range: {
		start?: { amount: number; currency: string } | null;
		stop?: { amount: number; currency: string } | null;
	} | null,
) => {
	const { start, stop } = range || {};
	const startMoney = start && formatMoney(start.amount, start.currency);
	const stopMoney = stop && formatMoney(stop.amount, stop.currency);

	if (startMoney === stopMoney) {
		return startMoney;
	}

	return `${startMoney} - ${stopMoney}`;
};

export function getHrefForVariant({
	productSlug,
	variantId,
}: {
	productSlug: string;
	variantId?: string;
}): string {
	const pathname = `/products/${encodeURIComponent(productSlug)}`;

	if (!variantId) {
		return pathname;
	}

	const query = new URLSearchParams({ variant: variantId });
	return `${pathname}?${query.toString()}`;
}

export function cleanPhoneNumber(phoneNumber: string) {
	return libphonenumber(phoneNumber, { defaultCountry: "IR" })?.number as string;
}
