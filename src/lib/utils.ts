import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getChildIndex(node: HTMLElement) {
	return Array.prototype.indexOf.call(node.parentNode?.childNodes, node);
}
