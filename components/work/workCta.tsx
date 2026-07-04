import Link from "next/link";
import { Anton, Inter } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["500"],
});

function CurveArrow({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 140 110"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M120 15 C60 10, 20 45, 30 85"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path
                d="M13 70 L30 85 L48 68"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

export default function WorkCta() {
    return (
        <section className="relative px-4 py-20 text-center sm:px-8 md:px-16 md:py-28">
            <div className="relative mx-auto max-w-3xl">
                <CurveArrow className="absolute -left-2 top-2 h-16 w-16 -translate-y-2 sm:h-20 sm:w-20 md:-left-6 md:h-24 md:w-24" />

                <h2
                    className={`${anton.className} uppercase leading-[0.95] text-black text-[clamp(1.75rem,6vw,3.5rem)]`}
                >
                    Transforming Your{" "}
                    <span className="inline-block -rotate-2 bg-[#EB6E00] px-3 text-black">
                        Vision
                    </span>{" "}
                    Into Reality
                </h2>

                <p
                    className={`${inter.className} mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-black/80 sm:text-base md:text-lg`}
                >
                    We don&apos;t just design for brands.{" "}
                    <span className="text-[#EB6E00]">We design around them.</span>{" "}
                    Thoughtful strategy, precise execution, and digital experiences built
                    to last.
                </p>

                <Link
                    href="/contact"
                    className={`${anton.className} mt-8 flex h-[64px] w-full max-w-[320px] items-center justify-center rounded-[100px] px-[12px] text-[16px] uppercase text-white transition-all duration-300 hover:bg-black sm:h-[70px] sm:text-[18px] bg-[#EB6E00] mx-auto`}
                >
                    Start Your Project
                </Link>
            </div>
        </section>
    );
}
