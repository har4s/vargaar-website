/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Cart on Checkout {\n  id\n  totalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  subtotalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  quantity\n  lines {\n    id\n    quantity\n    variant {\n      ...Variant\n      product {\n        ...ProductDetails\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "fragment Checkout on Checkout {\n  id\n  email\n  totalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  subtotalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  shippingAddress {\n    firstName\n    lastName\n    phone\n    country {\n      code\n      country\n    }\n    cityArea\n    city\n    postalCode\n    streetAddress1\n    streetAddress2\n    isDefaultShippingAddress\n  }\n  shippingPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  availablePaymentGateways {\n    ...PaymentGateway\n  }\n  storedPaymentMethods {\n    id\n    data\n    gateway {\n      ...PaymentGateway\n    }\n  }\n  shippingMethods {\n    ...ShippingMethod\n  }\n  deliveryMethod {\n    ... on ShippingMethod {\n      ...ShippingMethod\n    }\n  }\n  quantity\n  lines {\n    id\n    quantity\n    variant {\n      ...Variant\n      product {\n        ...ProductDetails\n      }\n    }\n  }\n}": types.CheckoutFragmentDoc,
    "fragment FeaturedProduct on Product {\n  id\n  slug\n  name\n  isAvailableForPurchase\n  description\n  seoTitle\n  seoDescription\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n  media {\n    url(size: 1080)\n    type\n    alt\n  }\n  collections {\n    name\n  }\n  updatedAt\n  variants {\n    id\n    name\n    pricing {\n      price {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n}": types.FeaturedProductFragmentDoc,
    "fragment PaymentGateway on PaymentGateway {\n  id\n  name\n}": types.PaymentGatewayFragmentDoc,
    "fragment ProductDetails on Product {\n  id\n  slug\n  name\n  isAvailableForPurchase\n  bgColor: metafield(key: \"ui.bgColor\")\n  description\n  seoTitle\n  seoDescription\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n  media {\n    url(size: 1080)\n    type\n    alt\n  }\n  collections {\n    name\n  }\n  updatedAt\n  variants {\n    ...Variant\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ShippingMethod on ShippingMethod {\n  id\n  name\n  description\n  price {\n    currency\n    amount\n  }\n  active\n  icon: metafield(key: \"ui.icon\")\n}": types.ShippingMethodFragmentDoc,
    "fragment User on User {\n  id\n  firstName\n  lastName\n  email\n  phoneNumber\n  addresses {\n    id\n    firstName\n    lastName\n    city\n    cityArea\n    streetAddress1\n    streetAddress2\n    postalCode\n    phone\n    isDefaultShippingAddress\n  }\n}": types.UserFragmentDoc,
    "fragment Variant on ProductVariant {\n  id\n  name\n  attributes {\n    attribute {\n      slug\n      name\n      choices(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n    values {\n      name\n    }\n  }\n  pricing {\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n  quantityAvailable\n}": types.VariantFragmentDoc,
    "mutation CheckoutAddLine($checkoutId: ID!, $lines: [CheckoutLineInput!]!) {\n  checkoutLinesAdd(id: $checkoutId, lines: $lines) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}": types.CheckoutAddLineDocument,
    "mutation CheckoutDeleteLine($checkoutId: ID!, $lineIds: [ID!]!) {\n  checkoutLinesDelete(id: $checkoutId, linesIds: $lineIds) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}": types.CheckoutDeleteLineDocument,
    "mutation CheckoutUpdateLine($checkoutId: ID!, $lines: [CheckoutLineUpdateInput!]!) {\n  checkoutLinesUpdate(id: $checkoutId, lines: $lines) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}": types.CheckoutUpdateLineDocument,
    "mutation CompleteCheckout($checkoutId: ID!, $paymentData: JSONString!) {\n  checkoutComplete(checkoutId: $checkoutId, paymentData: $paymentData) {\n    confirmationNeeded\n    confirmationData\n    order {\n      id\n      isPaid\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}": types.CompleteCheckoutDocument,
    "mutation CreateCheckout($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}": types.CreateCheckoutDocument,
    "mutation CreateCheckoutPayment($checkoutId: ID!, $input: PaymentInput!) {\n  checkoutPaymentCreate(id: $checkoutId, input: $input) {\n    payment {\n      id\n      chargeStatus\n    }\n    errors {\n      code\n      message\n      field\n    }\n  }\n}": types.CreateCheckoutPaymentDocument,
    "mutation CreateOTP($phoneNumber: String!) {\n  otpCreate(phoneNumber: $phoneNumber) {\n    token\n    createdAt\n    errors {\n      field\n      code\n      message\n    }\n  }\n}": types.CreateOtpDocument,
    "mutation RefreshToken($refreshToken: String!, $csrfToken: String!) {\n  tokenRefresh(refreshToken: $refreshToken, csrfToken: $csrfToken) {\n    token\n    user {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}": types.RefreshTokenDocument,
    "mutation UpdateCheckoutDeliveryMethod($checkoutId: ID!, $deliveryMethodId: ID!) {\n  checkoutDeliveryMethodUpdate(\n    id: $checkoutId\n    deliveryMethodId: $deliveryMethodId\n  ) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}": types.UpdateCheckoutDeliveryMethodDocument,
    "mutation UpdateCheckoutEmail($checkoutId: ID!, $email: String!) {\n  checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}": types.UpdateCheckoutEmailDocument,
    "mutation UpdateCheckoutShippingAddress($checkoutId: ID!, $shippingAddress: AddressInput!) {\n  checkoutShippingAddressUpdate(\n    shippingAddress: $shippingAddress\n    id: $checkoutId\n  ) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n  checkoutBillingAddressUpdate(billingAddress: $shippingAddress, id: $checkoutId) {\n    errors {\n      field\n      message\n      code\n    }\n  }\n}": types.UpdateCheckoutShippingAddressDocument,
    "mutation UpdateUserInformation($firstName: String, $lastName: String) {\n  accountUpdate(input: {firstName: $firstName, lastName: $lastName}) {\n    errors {\n      message\n      field\n      code\n    }\n  }\n}": types.UpdateUserInformationDocument,
    "mutation VerifyOTP($phoneNumber: String!, $publicToken: String!, $otp: String!) {\n  otpVerify(phoneNumber: $phoneNumber, publicToken: $publicToken, otp: $otp) {\n    user {\n      ...User\n    }\n    token\n    refreshToken\n    csrfToken\n    errors {\n      field\n      message\n    }\n  }\n}": types.VerifyOtpDocument,
    "query GetCategoryBySlug($slug: String!) {\n  category(slug: $slug) {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(\n      channel: \"default-channel\"\n      first: 1\n      sortBy: {field: LAST_MODIFIED_AT, direction: DESC}\n    ) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n  }\n}": types.GetCategoryBySlugDocument,
    "query GetCategoryProductsBySlug($slug: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {\n  category(slug: $slug) {\n    products(\n      channel: \"default-channel\"\n      first: 100\n      sortBy: {field: $sortBy, direction: $sortDirection}\n    ) {\n      edges {\n        node {\n          ...ProductDetails\n        }\n      }\n    }\n  }\n}": types.GetCategoryProductsBySlugDocument,
    "query GetCheckoutById($id: ID!) {\n  checkout(id: $id) {\n    ...Checkout\n  }\n}": types.GetCheckoutByIdDocument,
    "query GetCollectionBySlug($slug: String!) {\n  collection(channel: \"default-channel\", slug: $slug) {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n  }\n}": types.GetCollectionBySlugDocument,
    "query GetCollectionProductsBySlug($slug: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {\n  collection(channel: \"default-channel\", slug: $slug) {\n    products(first: 100, sortBy: {field: $sortBy, direction: $sortDirection}) {\n      edges {\n        node {\n          ...ProductDetails\n        }\n      }\n    }\n  }\n}": types.GetCollectionProductsBySlugDocument,
    "query GetCollections {\n  collections(channel: \"default-channel\", first: 100) {\n    edges {\n      node {\n        id\n        name\n        slug\n        description\n        backgroundImage {\n          url\n          alt\n        }\n        seoTitle\n        seoDescription\n        products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n          edges {\n            node {\n              updatedAt\n            }\n          }\n        }\n        bgColor: metafield(key: \"ui.bgColor\")\n      }\n    }\n  }\n}": types.GetCollectionsDocument,
    "query GetFeaturedProducts($first: Int!) {\n  products(first: $first, channel: \"default-channel\") {\n    edges {\n      node {\n        ...FeaturedProduct\n      }\n    }\n  }\n}": types.GetFeaturedProductsDocument,
    "fragment MenuItem on MenuItem {\n  id\n  name\n  url\n  collection {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n    bgColor: metafield(key: \"ui.bgColor\")\n  }\n  category {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n    bgColor: metafield(key: \"ui.bgColor\")\n  }\n  page {\n    slug\n  }\n}\n\nquery GetMenuBySlug($slug: String!) {\n  menu(slug: $slug, channel: \"default-channel\") {\n    id\n    slug\n    name\n    items {\n      ...MenuItem\n      children {\n        ...MenuItem\n        children {\n          ...MenuItem\n          children {\n            ...MenuItem\n          }\n        }\n      }\n    }\n  }\n}": types.MenuItemFragmentDoc,
    "query GetPageBySlug($slug: String!) {\n  page(slug: $slug) {\n    id\n    title\n    slug\n    content\n    seoTitle\n    seoDescription\n    created\n  }\n}": types.GetPageBySlugDocument,
    "query GetPages {\n  pages(first: 10) {\n    edges {\n      node {\n        id\n        title\n        slug\n        content\n        seoTitle\n        seoDescription\n        created\n      }\n    }\n  }\n}": types.GetPagesDocument,
    "query GetProductBySlug($slug: String!) {\n  product(channel: \"default-channel\", slug: $slug) {\n    ...ProductDetails\n  }\n}": types.GetProductBySlugDocument,
    "query GetProductRecommendations {\n  products(first: 10, channel: \"default-channel\") {\n    edges {\n      node {\n        ...ProductDetails\n      }\n    }\n  }\n}": types.GetProductRecommendationsDocument,
    "query SearchProducts($search: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {\n  products(\n    first: 100\n    channel: \"default-channel\"\n    sortBy: {field: $sortBy, direction: $sortDirection}\n    filter: {search: $search}\n  ) {\n    edges {\n      node {\n        ...ProductDetails\n      }\n    }\n  }\n}": types.SearchProductsDocument,
    "subscription WebhookSubscription {\n  event {\n    ... on CategoryCreated {\n      __typename\n      category {\n        id\n        slug\n      }\n    }\n    ... on CategoryDeleted {\n      __typename\n      category {\n        id\n        slug\n      }\n    }\n    ... on CategoryUpdated {\n      __typename\n      category {\n        id\n        slug\n      }\n    }\n    ... on CollectionUpdated {\n      __typename\n      collection {\n        id\n        slug\n      }\n    }\n    ... on CollectionDeleted {\n      __typename\n      collection {\n        id\n        slug\n      }\n    }\n    ... on CollectionCreated {\n      __typename\n      collection {\n        id\n        slug\n      }\n    }\n    ... on ProductCreated {\n      __typename\n      product {\n        id\n        slug\n      }\n    }\n    ... on ProductDeleted {\n      __typename\n      product {\n        id\n        slug\n      }\n    }\n    ... on ProductUpdated {\n      __typename\n      product {\n        id\n        slug\n      }\n    }\n    ... on ProductVariantCreated {\n      __typename\n      productVariant {\n        product {\n          id\n          slug\n        }\n      }\n    }\n    ... on ProductVariantDeleted {\n      __typename\n      productVariant {\n        product {\n          id\n          slug\n        }\n      }\n    }\n    ... on ProductVariantUpdated {\n      __typename\n      productVariant {\n        product {\n          id\n          slug\n        }\n      }\n    }\n  }\n}": types.WebhookSubscriptionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Checkout {\n  id\n  totalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  subtotalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  quantity\n  lines {\n    id\n    quantity\n    variant {\n      ...Variant\n      product {\n        ...ProductDetails\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Checkout on Checkout {\n  id\n  email\n  totalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  subtotalPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  shippingAddress {\n    firstName\n    lastName\n    phone\n    country {\n      code\n      country\n    }\n    cityArea\n    city\n    postalCode\n    streetAddress1\n    streetAddress2\n    isDefaultShippingAddress\n  }\n  shippingPrice {\n    gross {\n      currency\n      amount\n    }\n  }\n  availablePaymentGateways {\n    ...PaymentGateway\n  }\n  storedPaymentMethods {\n    id\n    data\n    gateway {\n      ...PaymentGateway\n    }\n  }\n  shippingMethods {\n    ...ShippingMethod\n  }\n  deliveryMethod {\n    ... on ShippingMethod {\n      ...ShippingMethod\n    }\n  }\n  quantity\n  lines {\n    id\n    quantity\n    variant {\n      ...Variant\n      product {\n        ...ProductDetails\n      }\n    }\n  }\n}"): typeof import('./graphql').CheckoutFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FeaturedProduct on Product {\n  id\n  slug\n  name\n  isAvailableForPurchase\n  description\n  seoTitle\n  seoDescription\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n  media {\n    url(size: 1080)\n    type\n    alt\n  }\n  collections {\n    name\n  }\n  updatedAt\n  variants {\n    id\n    name\n    pricing {\n      price {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').FeaturedProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PaymentGateway on PaymentGateway {\n  id\n  name\n}"): typeof import('./graphql').PaymentGatewayFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  slug\n  name\n  isAvailableForPurchase\n  bgColor: metafield(key: \"ui.bgColor\")\n  description\n  seoTitle\n  seoDescription\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n  media {\n    url(size: 1080)\n    type\n    alt\n  }\n  collections {\n    name\n  }\n  updatedAt\n  variants {\n    ...Variant\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ShippingMethod on ShippingMethod {\n  id\n  name\n  description\n  price {\n    currency\n    amount\n  }\n  active\n  icon: metafield(key: \"ui.icon\")\n}"): typeof import('./graphql').ShippingMethodFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment User on User {\n  id\n  firstName\n  lastName\n  email\n  phoneNumber\n  addresses {\n    id\n    firstName\n    lastName\n    city\n    cityArea\n    streetAddress1\n    streetAddress2\n    postalCode\n    phone\n    isDefaultShippingAddress\n  }\n}"): typeof import('./graphql').UserFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Variant on ProductVariant {\n  id\n  name\n  attributes {\n    attribute {\n      slug\n      name\n      choices(first: 100) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n    values {\n      name\n    }\n  }\n  pricing {\n    price {\n      gross {\n        currency\n        amount\n      }\n    }\n  }\n  quantityAvailable\n}"): typeof import('./graphql').VariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CheckoutAddLine($checkoutId: ID!, $lines: [CheckoutLineInput!]!) {\n  checkoutLinesAdd(id: $checkoutId, lines: $lines) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}"): typeof import('./graphql').CheckoutAddLineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CheckoutDeleteLine($checkoutId: ID!, $lineIds: [ID!]!) {\n  checkoutLinesDelete(id: $checkoutId, linesIds: $lineIds) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}"): typeof import('./graphql').CheckoutDeleteLineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CheckoutUpdateLine($checkoutId: ID!, $lines: [CheckoutLineUpdateInput!]!) {\n  checkoutLinesUpdate(id: $checkoutId, lines: $lines) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}"): typeof import('./graphql').CheckoutUpdateLineDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CompleteCheckout($checkoutId: ID!, $paymentData: JSONString!) {\n  checkoutComplete(checkoutId: $checkoutId, paymentData: $paymentData) {\n    confirmationNeeded\n    confirmationData\n    order {\n      id\n      isPaid\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}"): typeof import('./graphql').CompleteCheckoutDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCheckout($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input) {\n    errors {\n      code\n      message\n      field\n    }\n    checkout {\n      ...Cart\n    }\n  }\n}"): typeof import('./graphql').CreateCheckoutDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCheckoutPayment($checkoutId: ID!, $input: PaymentInput!) {\n  checkoutPaymentCreate(id: $checkoutId, input: $input) {\n    payment {\n      id\n      chargeStatus\n    }\n    errors {\n      code\n      message\n      field\n    }\n  }\n}"): typeof import('./graphql').CreateCheckoutPaymentDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOTP($phoneNumber: String!) {\n  otpCreate(phoneNumber: $phoneNumber) {\n    token\n    createdAt\n    errors {\n      field\n      code\n      message\n    }\n  }\n}"): typeof import('./graphql').CreateOtpDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RefreshToken($refreshToken: String!, $csrfToken: String!) {\n  tokenRefresh(refreshToken: $refreshToken, csrfToken: $csrfToken) {\n    token\n    user {\n      id\n      firstName\n      lastName\n      email\n      phoneNumber\n    }\n  }\n}"): typeof import('./graphql').RefreshTokenDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCheckoutDeliveryMethod($checkoutId: ID!, $deliveryMethodId: ID!) {\n  checkoutDeliveryMethodUpdate(\n    id: $checkoutId\n    deliveryMethodId: $deliveryMethodId\n  ) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}"): typeof import('./graphql').UpdateCheckoutDeliveryMethodDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCheckoutEmail($checkoutId: ID!, $email: String!) {\n  checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}"): typeof import('./graphql').UpdateCheckoutEmailDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateCheckoutShippingAddress($checkoutId: ID!, $shippingAddress: AddressInput!) {\n  checkoutShippingAddressUpdate(\n    shippingAddress: $shippingAddress\n    id: $checkoutId\n  ) {\n    checkout {\n      ...Checkout\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n  checkoutBillingAddressUpdate(billingAddress: $shippingAddress, id: $checkoutId) {\n    errors {\n      field\n      message\n      code\n    }\n  }\n}"): typeof import('./graphql').UpdateCheckoutShippingAddressDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUserInformation($firstName: String, $lastName: String) {\n  accountUpdate(input: {firstName: $firstName, lastName: $lastName}) {\n    errors {\n      message\n      field\n      code\n    }\n  }\n}"): typeof import('./graphql').UpdateUserInformationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyOTP($phoneNumber: String!, $publicToken: String!, $otp: String!) {\n  otpVerify(phoneNumber: $phoneNumber, publicToken: $publicToken, otp: $otp) {\n    user {\n      ...User\n    }\n    token\n    refreshToken\n    csrfToken\n    errors {\n      field\n      message\n    }\n  }\n}"): typeof import('./graphql').VerifyOtpDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategoryBySlug($slug: String!) {\n  category(slug: $slug) {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(\n      channel: \"default-channel\"\n      first: 1\n      sortBy: {field: LAST_MODIFIED_AT, direction: DESC}\n    ) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCategoryBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategoryProductsBySlug($slug: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {\n  category(slug: $slug) {\n    products(\n      channel: \"default-channel\"\n      first: 100\n      sortBy: {field: $sortBy, direction: $sortDirection}\n    ) {\n      edges {\n        node {\n          ...ProductDetails\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCategoryProductsBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCheckoutById($id: ID!) {\n  checkout(id: $id) {\n    ...Checkout\n  }\n}"): typeof import('./graphql').GetCheckoutByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollectionBySlug($slug: String!) {\n  collection(channel: \"default-channel\", slug: $slug) {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollectionProductsBySlug($slug: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {\n  collection(channel: \"default-channel\", slug: $slug) {\n    products(first: 100, sortBy: {field: $sortBy, direction: $sortDirection}) {\n      edges {\n        node {\n          ...ProductDetails\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCollectionProductsBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCollections {\n  collections(channel: \"default-channel\", first: 100) {\n    edges {\n      node {\n        id\n        name\n        slug\n        description\n        backgroundImage {\n          url\n          alt\n        }\n        seoTitle\n        seoDescription\n        products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n          edges {\n            node {\n              updatedAt\n            }\n          }\n        }\n        bgColor: metafield(key: \"ui.bgColor\")\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetFeaturedProducts($first: Int!) {\n  products(first: $first, channel: \"default-channel\") {\n    edges {\n      node {\n        ...FeaturedProduct\n      }\n    }\n  }\n}"): typeof import('./graphql').GetFeaturedProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment MenuItem on MenuItem {\n  id\n  name\n  url\n  collection {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n    bgColor: metafield(key: \"ui.bgColor\")\n  }\n  category {\n    id\n    name\n    slug\n    description\n    backgroundImage {\n      url\n      alt\n    }\n    seoTitle\n    seoDescription\n    products(first: 1, sortBy: {field: LAST_MODIFIED_AT, direction: DESC}) {\n      edges {\n        node {\n          updatedAt\n        }\n      }\n    }\n    bgColor: metafield(key: \"ui.bgColor\")\n  }\n  page {\n    slug\n  }\n}\n\nquery GetMenuBySlug($slug: String!) {\n  menu(slug: $slug, channel: \"default-channel\") {\n    id\n    slug\n    name\n    items {\n      ...MenuItem\n      children {\n        ...MenuItem\n        children {\n          ...MenuItem\n          children {\n            ...MenuItem\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').MenuItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageBySlug($slug: String!) {\n  page(slug: $slug) {\n    id\n    title\n    slug\n    content\n    seoTitle\n    seoDescription\n    created\n  }\n}"): typeof import('./graphql').GetPageBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPages {\n  pages(first: 10) {\n    edges {\n      node {\n        id\n        title\n        slug\n        content\n        seoTitle\n        seoDescription\n        created\n      }\n    }\n  }\n}"): typeof import('./graphql').GetPagesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductBySlug($slug: String!) {\n  product(channel: \"default-channel\", slug: $slug) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').GetProductBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductRecommendations {\n  products(first: 10, channel: \"default-channel\") {\n    edges {\n      node {\n        ...ProductDetails\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductRecommendationsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchProducts($search: String!, $sortBy: ProductOrderField!, $sortDirection: OrderDirection!) {\n  products(\n    first: 100\n    channel: \"default-channel\"\n    sortBy: {field: $sortBy, direction: $sortDirection}\n    filter: {search: $search}\n  ) {\n    edges {\n      node {\n        ...ProductDetails\n      }\n    }\n  }\n}"): typeof import('./graphql').SearchProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription WebhookSubscription {\n  event {\n    ... on CategoryCreated {\n      __typename\n      category {\n        id\n        slug\n      }\n    }\n    ... on CategoryDeleted {\n      __typename\n      category {\n        id\n        slug\n      }\n    }\n    ... on CategoryUpdated {\n      __typename\n      category {\n        id\n        slug\n      }\n    }\n    ... on CollectionUpdated {\n      __typename\n      collection {\n        id\n        slug\n      }\n    }\n    ... on CollectionDeleted {\n      __typename\n      collection {\n        id\n        slug\n      }\n    }\n    ... on CollectionCreated {\n      __typename\n      collection {\n        id\n        slug\n      }\n    }\n    ... on ProductCreated {\n      __typename\n      product {\n        id\n        slug\n      }\n    }\n    ... on ProductDeleted {\n      __typename\n      product {\n        id\n        slug\n      }\n    }\n    ... on ProductUpdated {\n      __typename\n      product {\n        id\n        slug\n      }\n    }\n    ... on ProductVariantCreated {\n      __typename\n      productVariant {\n        product {\n          id\n          slug\n        }\n      }\n    }\n    ... on ProductVariantDeleted {\n      __typename\n      productVariant {\n        product {\n          id\n          slug\n        }\n      }\n    }\n    ... on ProductVariantUpdated {\n      __typename\n      productVariant {\n        product {\n          id\n          slug\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').WebhookSubscriptionDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
