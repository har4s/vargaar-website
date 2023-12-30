import { invariant } from "./utils";

export const NEXT_PUBLIC_SALEOR_API_URL = process.env.NEXT_PUBLIC_SALEOR_API_URL;
invariant(NEXT_PUBLIC_SALEOR_API_URL, `Missing NEXT_PUBLIC_SALEOR_API_URL!`);
