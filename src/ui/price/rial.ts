class Rial {
	decimal: string = "";
	alphabet: string = "";
	currency: string = "";
	cut: number = 0;
	result: string = "";

	constructor(obj?: { decimal?: string; alphabet?: string; currency?: string; cut?: number }) {
		if (obj?.decimal) {
			this.Decimal(obj.decimal);
			this.Alphabet(obj.alphabet || "");
			this.Currency(obj.currency || "");
			this.Cut(obj.cut || 0);
		}
	}

	Decimal(str: string): this {
		this.decimal = this.isEmpty(str) ? "" : str;
		return this;
	}

	Alphabet(str: string): this {
		this.alphabet = this.isEmpty(str) ? "" : str;
		return this;
	}

	Currency(str: string): this {
		this.currency = this.isEmpty(str) ? "" : str;
		return this;
	}

	Cut(str: number): this {
		this.cut = this.isEmpty(str) ? 0 : str;
		return this;
	}

	persianAlphabet(str: string): void {
		this.result = str.replace(/[0-9]/g, (match) => String.fromCharCode(match.charCodeAt(0) + 1728));
	}

	latinAlphabet(str: string): void {
		this.result = str.replace(/[۰-۹]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 1728));
	}

	isEmpty(element: any): boolean {
		return element == null || element === "";
	}

	clean(str: string): void {
		let chars = "0۰";
		if (this.isEmpty(chars)) {
			chars = "\\s";
		}

		str = str.replace(new RegExp(`^[${chars}]+`), "");
		this.result = str.toString().replace(/[^0-9+۰-۹]/g, "");
	}

	format(str: string): void {
		str = str.split("").reverse().join("");
		const n = str.match(/.{1,3}/g);

		for (let i = 0; i < n!.length; i++) {
			n![i] = n![i].split("").reverse().join("");
		}

		str = n!.reverse().join(this.decimal);
		this.result = str;
	}

	slice(str: string): void {
		this.result = str.substring(0, str.length - this.cut);
	}

	get(str: string): string | number {
		this.result = str;
		this.clean(this.result);

		if (this.isEmpty(this.result)) {
			return 0;
		}

		if (this.alphabet === "en") {
			this.latinAlphabet(this.result);
		} else {
			this.persianAlphabet(this.result);
		}

		this.slice(this.result);
		this.format(this.result);

		if (!this.isEmpty(this.currency)) {
			this.result += ` ${this.currency}`;
		}

		return this.result;
	}
}

export { Rial };
