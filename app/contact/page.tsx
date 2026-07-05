import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import ContactIndex from "@/components/contact";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Paco Studios to start your next digital project — web development, UX/UI design, branding, and more.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Us | Paco Studios",
        description: "Get in touch with Paco Studios to start your next digital project.",
        url: "/contact",
    },
};

export default function ContactPage() {
    return (
        <PageTransition>
            <ContactIndex />
        </PageTransition>
    );
}
