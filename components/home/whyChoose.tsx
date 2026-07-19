"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Anton } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinBoxRef = useRef<HTMLDivElement>(null);

    const cards = [
        {
            title: "INNOVATION-LED DEVELOPMENT",
            description:
                "We don’t follow trends. We analyze, innovate, and craft future-ready digital solutions designed to scale with your business.",
            image: "/images/innovation.webp",
            bg: "bg-[#F3E6D3]",
            text: "text-black",
            className: "-rotate-6 -translate-y-14",
        },
        {
            title: "TRUST-DRIVEN PARTNERSHIPS",
            description:
                "Our clients trust us with their digital presence because we treat every project as if it were our own. Transparency, reliability, and excellence define our process.",
            image: "/images/trust.webp",
            bg: "bg-[#6B3F1F]",
            text: "text-white",
            className: "-rotate-12 translate-y-20 -translate-x-10",
        },
        {
            title: "MULTI-DISCIPLINARY EXPERTISE",
            description:
                "Designers, developers, and strategists collaborate seamlessly to deliver cohesive, high-impact results.",
            image: "/images/multi.webp",
            bg: "bg-[#F57C00]",
            text: "text-black",
            className: "-translate-y-6",
        },
        {
            title: "DETAIL-ORIENTED EXECUTION",
            description:
                "From the smallest interaction to the overall architecture, every detail is thoughtfully considered.",
            image: "/images/detail.webp",
            bg: "bg-[#F3E6A8]",
            text: "text-black",
            className: "rotate-[8deg] translate-y-16 -translate-x-10",
        },
    ];

    useGSAP(() => {
        // Timeline for background typography horizontal sliding
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "200% top",
                scrub: true,
            },
        });

        // Alternate text movement directions for the background typography
        tl.to(".bg-type-row-0", { xPercent: 10 }, 0)
            .to(".bg-type-row-1", { xPercent: -10 }, 0)
            .to(".bg-type-row-2", { xPercent: 10 }, 0)
            .to(".bg-type-row-3", { xPercent: -10 }, 0)
            .to(".bg-type-row-4", { xPercent: 10 }, 0)
            .to(".bg-type-row-5", { xPercent: -10 }, 0)
            .to(".bg-type-row-6", { xPercent: 10 }, 0)
            .to(".bg-type-row-7", { xPercent: -10 }, 0)
            .to(".bg-type-row-8", { xPercent: 10 }, 0);

        // Pinning the section and animating cards from bottom
        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%", // Pin for longer duration to allow scroll action
                scrub: 1.5,
                pin: true,
            },
        });

        pinTl.from(".gsap-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.out",
        });
    }, { scope: sectionRef });

    const backgroundTypography = (
        <div className="flex h-full flex-col justify-center gap-2">
            {Array.from({ length: 9 }).map((_, i) => {
                const isOrange = i % 2 === 0;

                return (
                    <div
                        key={i}
                        className={`bg-type-row-${i} whitespace-nowrap leading-none w-[200vw] -ml-[50vw] ${isOrange
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
                            WHY CHOOSE PACO STUDIOS WHY CHOOSE PACO STUDIOS WHY CHOOSE PACO STUDIOS WHY CHOOSE PACO STUDIOS
                        </span>
                    </div>
                );
            })}
        </div>
    );

    return (
        <>
            {/* WHY CHOOSE US */}
            <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
                {/* Background Typography */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 md:opacity-100">
                    {backgroundTypography}
                </div>

                {/* Pin Box for Cards */}
                <div ref={pinBoxRef} className="relative z-10 flex h-full items-center justify-center px-4">
                    <div className="flex items-center justify-center -space-x-12 sm:-space-x-8 md:-space-x-12 lg:-space-x-16">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`gsap-card relative w-[220px] md:w-[260px] lg:w-[300px] ${card.className} shadow-2xl rounded overflow-hidden border-[6px] md:border-[8px] border-[#1A1A1A] bg-white`}
                            >
                                <div className="relative h-[180px] md:h-[220px] lg:h-[260px] bg-[#f7f7f7]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 220px"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>

                                <div className={`${card.bg} ${card.text} p-4 md:p-5 h-full`}>
                                    <h3
                                        className={`${anton.className} mb-2 md:mb-3 text-[15px] md:text-[18px] lg:text-[20px] uppercase leading-tight`}
                                    >
                                        {card.title}
                                    </h3>

                                    <p className="text-xs md:text-sm lg:text-[15px] leading-relaxed opacity-90 pb-4">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ARROW BUTTON */}
            <div className="flex justify-center py-10 md:py-16 bg-transparent relative z-20">
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
            <section className="relative flex flex-col items-center bg-white py-12 md:py-16 pb-0 z-20">
                <h2
                    className={`${anton.className} z-10 text-center text-black uppercase text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-none tracking-tight`}
                >
                    LET&apos;S BUILD SOMETHING
                </h2>

                <div className="relative w-full max-w-[1400px] flex flex-col items-center px-4">
                    <h1
                        className={`${anton.className} relative z-10 text-center uppercase text-[#EB6E00] text-[52px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] leading-[0.85] tracking-tight`}
                    >
                        EXTRAORDINARY
                    </h1>

                    <div className="relative z-20 w-full max-w-[300px] sm:max-w-[460px] md:max-w-[600px] lg:max-w-[760px] -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-24 -mb-12 sm:-mb-20 md:-mb-24 lg:-mb-32">
                        <Image
                            src="/images/image 16.webp"
                            alt="Fox on skateboard"
                            width={991}
                            height={661}
                            className="w-full h-auto object-contain mix-blend-screen"
                            priority
                        />

                        <Link
                            href="/contact"
                            className={`${anton.className} absolute left-[48.5%] top-[55%] sm:left-[47.5%] sm:top-[56%] md:left-[47%] md:top-[57%] -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-[100px] bg-[#EB6E00] px-3.5 py-2 sm:px-6 sm:py-2.5 md:px-10 md:py-4 text-[9px] sm:text-sm md:text-base lg:text-lg uppercase text-white shadow-lg transition-all duration-300 hover:bg-black hover:scale-105 whitespace-nowrap`}
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}