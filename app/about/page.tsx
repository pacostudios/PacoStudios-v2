import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import AboutIndex from "@/components/about";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Paco Studios' mission, philosophy, and the UX/UI design, web, 3D, and branding services we offer to help ambitious brands grow.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us | Paco Studios",
        description:
            "Learn about Paco Studios' mission, philosophy, and the services we offer to help ambitious brands grow.",
        url: "/about",
    },
};

export default function AboutPage() {
    return (
        <PageTransition>
            <AboutIndex />
        </PageTransition>
    );
}
