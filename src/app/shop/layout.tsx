import React from "react";
import s from "./shop.module.css"
import { Newsletter, Reinsurance } from "common";
import { Footer, Navbar } from "layout";

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>
                <Navbar />
                <div className={s.wrapper}>
                    {children}
                </div>
                <Reinsurance />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}
