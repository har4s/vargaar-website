import React from "react";
import { Filters, Hero, IntroTxt, ProductList } from "shop";
import type { Menu, Product } from "lib/types";

export default function Collection() {
    return (
        <>
            <Hero />
            <Filters menu={menuData} />
            <ProductList products={productData} />
            <IntroTxt />
        </>
    );
}

const menuData: Menu = {
    title: "",
    path: "",
    children: []
}

const productData: Product[] = []