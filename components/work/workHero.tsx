import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

export default function WorkHero() {
    return (
        <section className="relative overflow-hidden px-4 pt-28 pb-14 text-center sm:pt-32 md:pt-40 md:pb-20">
            <svg
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[28%] h-[90px] w-full text-[#FFECA6] sm:top-[32%] sm:h-[130px] md:top-[36%] md:h-[170px]"
            >
                <path
                    d="M0,120 C120,20 220,20 320,90 C400,145 460,60 540,60 C620,60 660,150 760,150 C860,150 900,40 1000,40 C1080,40 1140,90 1200,60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
            </svg>

            <div className="relative mx-auto w-[130px] sm:w-[170px] md:w-[210px]">
                <Image
                    src="/images/skeat.webp"
                    alt="Paco Studios fox mascot"
                    width={807}
                    height={1034}
                    priority
                    className="h-auto w-full object-contain"
                />
            </div>

            <h1
                className={`${anton.className} relative -mt-2 uppercase leading-none text-[clamp(2.75rem,11vw,6.5rem)]`}
            >
                <span className="text-black">Our </span>
                <span className="relative inline-block px-2 text-[#EB6E00]">
                    <span className="absolute inset-0 -z-10 bg-[#FBE7CE]" />
                    Work
                </span>
            </h1>
        </section>
    );
}
