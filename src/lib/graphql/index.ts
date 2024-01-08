import { invariant } from "lib/utils";
import { RefreshTokenDocument, type TypedDocumentString } from "lib/graphql/generated/graphql";
import { NEXT_PUBLIC_SALEOR_API_URL } from "lib/env";

type GraphQLErrorResponse = {
	errors: readonly {
		message: string;
	}[];
};

type GraphQLRespone<T> = { data: T } | GraphQLErrorResponse;

export async function executeGraphQL<Result, Variables>(
	operation: TypedDocumentString<Result, Variables>,
	options: {
		headers?: HeadersInit;
		cache?: RequestCache;
		revalidate?: number;
		tags?: string[];
		withAuth?: {
			csrfToken: string;
			refreshToken: string;
		};
	} & (Variables extends Record<string, never> ? { variables?: never } : { variables: Variables }),
): Promise<Result> {
	invariant(process.env.NEXT_PUBLIC_SALEOR_API_URL, "Missing NEXT_PUBLIC_SALEOR_API_URL env variable");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { variables, headers, cache, revalidate, tags, withAuth } = options;

	const withAuthHeaders = async () => {
		if (!withAuth) {
			return {};
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const res = await executeGraphQL(RefreshTokenDocument, {
			variables: {
				refreshToken: withAuth.refreshToken,
				csrfToken: withAuth.csrfToken,
			},
		});

		const token = res.tokenRefresh?.token;

		return {
			Authorization: `Bearer ${token}`,
		};
	};

	const input = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...headers,
			...((await withAuthHeaders()) as { Authorization: string }),
		},
		body: JSON.stringify({
			query: operation.toString(),
			...(variables && { variables }),
		}),
		// TODO: temporary
		cache: "no-cache" as RequestCache,
		next: { revalidate, tags },
	};

	const response = await fetch(NEXT_PUBLIC_SALEOR_API_URL!, input);

	if (!response.ok) {
		const body = await (async () => {
			try {
				return await response.text();
			} catch {
				return "";
			}
		})();
		console.error(input.body);
		throw new HTTPError(response, body);
	}

	const body = (await response.json()) as GraphQLRespone<Result>;

	if ("errors" in body) {
		throw new GraphQLError(body);
	}

	return body.data;
}

class GraphQLError extends Error {
	constructor(public errorResponse: GraphQLErrorResponse) {
		const message = errorResponse.errors.map((error) => error.message).join("\n");
		super(message);
		this.name = this.constructor.name;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}
class HTTPError extends Error {
	constructor(response: Response, body: string) {
		const message = `HTTP error ${response.status}: ${response.statusText}\n${body}`;
		super(message);
		this.name = this.constructor.name;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}
