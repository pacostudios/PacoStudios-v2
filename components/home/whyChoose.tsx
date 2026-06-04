"use client";

import Image from "next/image";
import { Anton } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

export default function WhyChooseUs() {
    const cards = [
        {
            title: "INNOVATION-LED DEVELOPMENT",
            description:
                "We don’t follow trends. We analyze, innovate, and craft future-ready digital solutions designed to scale with your business.",
            image: "/placeholder-1.png",
            bg: "bg-[#F3E6D3]",
            text: "text-black",
            className: "-rotate-6 -translate-y-14",
        },
        {
            title: "TRUST-DRIVEN PARTNERSHIPS",
            description:
                "Our clients trust us with their digital presence because we treat every project as if it were our own. Transparency, reliability, and excellence define our process.",
            image: "/placeholder-2.png",
            bg: "bg-[#6B3F1F]",
            text: "text-white",
            className: "-rotate-12 translate-y-20 -translate-x-10",
        },
        {
            title: "MULTI-DISCIPLINARY EXPERTISE",
            description:
                "Designers, developers, and strategists collaborate seamlessly to deliver cohesive, high-impact results.",
            image: "/placeholder-3.png",
            bg: "bg-[#F57C00]",
            text: "text-black",
            className: "-translate-y-6",
        },
        {
            title: "DETAIL-ORIENTED EXECUTION",
            description:
                "From the smallest interaction to the overall architecture, every detail is thoughtfully considered.",
            image: "/placeholder-4.png",
            bg: "bg-[#F3E6A8]",
            text: "text-black",
            className: "rotate-[8deg] translate-y-16 -translate-x-10",
        },
    ];

    return (
        <>
            {/* WHY CHOOSE US */}
            <section className="relative w-full overflow-hidden">
                {/* Background Typography */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="flex h-full flex-col justify-center">
                        {Array.from({ length: 9 }).map((_, i) => {
                            const isOrange = i % 2 === 0;

                            return (
                                <div
                                    key={i}
                                    className={`whitespace-nowrap leading-none ${isOrange
                                        ? `${anton.className} uppercase text-[#F57C00]`
                                        : "italic text-black"
                                        }`}
                                >
                                    <span
                                        className={`${isOrange
                                            ? "text-[60px] md:text-[90px] lg:text-[110px]"
                                            : "text-[35px] md:text-[50px] lg:text-[60px]"
                                            }`}
                                    >
                                        WHY CHOOSE PACO STUDIOS WHY CHOOSE PACO STUDIOS
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Cards */}
                <div className="relative z-10 flex justify-center px-4 pt-16 md:pt-24">
                    <div className="flex items-center justify-center -space-x-8 md:-space-x-12 lg:-space-x-16">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] ${card.className}`}
                            >
                                <div className="overflow-hidden border-[6px] md:border-[8px] border-[#1A1A1A] bg-white shadow-2xl">
                                    <div className="relative h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] bg-[#f7f7f7]">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className={`${card.bg} ${card.text} p-3 md:p-4`}>
                                        <h3
                                            className={`${anton.className} mb-2 text-[12px] uppercase leading-tight sm:text-[14px] md:text-[18px]`}
                                        >
                                            {card.title}
                                        </h3>

                                        <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Space below cards */}
                <div className="h-32 md:h-40" />
            </section>

            {/* ARROW BUTTON */}
            <div className="flex justify-center py-10 md:py-16 bg-transparent">
                <button
                    className="
          flex items-center justify-center
          w-20 h-20 md:w-24 md:h-24
          rounded-full
          bg-black
          text-white
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          transition-all duration-300
          hover:scale-105
        "
                >
                    <ArrowUpRight size={34} strokeWidth={2.5} />
                </button>
            </div>

            {/* EXTRAORDINARY SECTION */}
            {/* <section className="relative flex flex-col items-center overflow-hidden bg-[#f5f5f5] py-16 md:py-24">
                <h2
                    className={`${anton.className} z-10 text-center text-black uppercase text-2xl sm:text-3xl md:text-5xl leading-none`}
                >
                    LET&apos;S BUILD SOMETHING
                </h2>

                <h1
                    className={`${anton.className} relative z-10 text-center uppercase text-[#d96a00]
        text-[52px]
        sm:text-[80px]
        md:text-[120px]
        lg:text-[180px]
        leading-[0.85] tracking-tight`}
                >
                    EXTRAORDINARY
                </h1>

                <div className="relative z-20 mt-4 md:-mt-8">
                    <div className="absolute bottom-0 right-0 w-[120px] sm:w-[180px] md:w-[260px] lg:w-[320px]">
                        <img
                            src="/fox.png"
                            alt="Fox Character"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="relative w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px]">
                        <img
                            src="/skateboard.png"
                            alt="Skateboard"
                            className="w-full h-auto object-contain"
                        />

                        <button
                            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-[#f57c00]
              px-4 py-2 md:px-6 md:py-3
              text-xs md:text-lg
              font-bold text-white
              shadow-lg
              transition-transform
              hover:scale-105
            "
                        >
                            Start Your Project
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    );
}