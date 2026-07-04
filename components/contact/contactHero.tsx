import { Anton, Inter } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["500"],
});

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden px-4 pt-28 pb-10 text-center sm:pt-32 md:pt-40 md:pb-14">
            <svg
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[10%] h-[90px] w-full text-[#FFECA6] sm:h-[130px] md:h-[170px]"
            >
                <path
                    d="M0,120 C120,20 220,20 320,90 C400,145 460,60 540,60 C620,60 660,150 760,150 C860,150 900,40 1000,40 C1080,40 1140,90 1200,60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
            </svg>

            <h1
                className={`${anton.className} relative uppercase leading-none text-[clamp(2.75rem,11vw,6.5rem)]`}
            >
                <span className="text-black">Let&apos;s </span>
                <span className="relative inline-block px-2 text-[#EB6E00]">
                    <span className="absolute inset-0 -z-10 bg-[#FBE7CE]" />
                    Talk
                </span>
            </h1>

            <p
                className={`${inter.className} relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-black/70 sm:text-base md:text-lg`}
            >
                Got a project in mind? Tell us about it and we&apos;ll get back to you.
            </p>
        </section>
    );
}
