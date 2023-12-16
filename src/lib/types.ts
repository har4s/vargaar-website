export interface Image {
	url: string;
	altText: string;
	width: number;
	height: number;
}

export interface Menu {
	title: string;
	path: string;
	children: Menu[];
}

export interface Money {
	amount: string;
	currencyCode: string;
}

export interface Product {}
