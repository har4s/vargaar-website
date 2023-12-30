import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { verifySignature } from "./jwks";
import { TAGS } from "lib/constants";
import { NEXT_PUBLIC_SALEOR_API_URL } from "lib/env";

export async function revalidate(req: NextRequest): Promise<Response> {
	const json = await verifySignature(req, NEXT_PUBLIC_SALEOR_API_URL!);
	console.log(json);
	if (!json || !("__typename" in json)) {
		return NextResponse.json({ status: 204 });
	}

	switch (json.__typename) {
		case "CategoryCreated":
		case "CategoryUpdated":
		case "CategoryDeleted":
		case "CollectionCreated":
		case "CollectionUpdated":
		case "CollectionDeleted":
			console.log(`revalidateTag(TAGS.collections)`);
			revalidateTag(TAGS.collections);
			break;
		case "ProductVariantCreated":
		case "ProductVariantUpdated":
		case "ProductVariantDeleted":
		case "ProductCreated":
		case "ProductUpdated":
		case "ProductDeleted":
			console.log(`revalidateTag(TAGS.products)`);
			revalidateTag(TAGS.products);
			break;
	}
	console.log("Done revalidating");
	return NextResponse.json({ status: 204 });
}
