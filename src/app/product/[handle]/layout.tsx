import { Newsletter, Reinsurance } from "common";
import { Footer, Navbar } from "layout";

export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>
                <Navbar />
                {children}
                <Reinsurance />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}