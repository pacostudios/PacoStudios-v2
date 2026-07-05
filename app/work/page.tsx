import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import WorkIndex from "@/components/work";

export const metadata: Metadata = {
    title: "Our Work",
    description:
        "Explore selected projects by Paco Studios spanning web development, branding, and digital product design for ambitious brands.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Our Work | Paco Studios",
        description:
            "Explore selected projects by Paco Studios spanning web development, branding, and digital product design.",
        url: "/work",
    },
};

export default function WorkPage() {
    return (
        <PageTransition>
            <WorkIndex />
        </PageTransition>
    );
}
