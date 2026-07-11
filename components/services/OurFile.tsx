"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

interface ServiceItem {
    id: string;
    title: string;
    watermarkText: string;
    bgColor: string;
    textColor: string;
    image: string;
}

const SERVICES_DATA: ServiceItem[] = [
    {
        id: "arabian-sky",
        title: "ARABIAN SKY TRANSPORT",
        watermarkText: "ARABIAN SKY TRANSPORT",
        bgColor: "#E51D1D", // Vibrant Red
        textColor: "#FFFFFF",
        image: "/images/placeholder.png",
    },
    {
        id: "poornaya",
        title: "POORNAYA",
        watermarkText: "POORNAYA",
        bgColor: "#7CB342", // Vibrant Green
        textColor: "#FFFFFF",
        image: "/images/placeholder.png",
    },
    {
        id: "loory-go",
        title: "LOORY GO",
        watermarkText: "LOORY GO",
        bgColor: "#0D47A1", // Vibrant Blue
        textColor: "#FFFFFF",
        image: "/images/placeholder.png",
    },
];

export default function OurServicesList() {
    return (
        <section className="relative w-full flex flex-col select-none">
            {/* Custom Infinite Scroll Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-33.333%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scrollLeft 40s linear infinite;
                }
                .animate-scroll-right {
                    animation: scrollRight 40s linear infinite;
                }
            `}} />

            {SERVICES_DATA.map((service, index) => {
                // Determine direction based on index
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={service.id}
                        style={{ backgroundColor: service.bgColor }}
                        className="relative w-full min-h-[450px] md:min-h-[550px] lg:min-h-[650px] overflow-hidden flex flex-col items-center justify-center py-16 md:py-24 px-4 border-b-[6px] md:border-b-[8px] border-black last:border-b-0"
                    >
                        {/* Background Watermark Ticker Pattern */}
                        <div className="absolute inset-0 flex flex-col justify-between py-4 opacity-[0.12] pointer-events-none z-0">
                            {Array.from({ length: 8 }).map((_, rowIndex) => {
                                const rowScrollClass = rowIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right";

                                return (
                                    <div
                                        key={rowIndex}
                                        className="w-full overflow-hidden whitespace-nowrap leading-none py-1"
                                    >
                                        <div
                                            className={`inline-block ${anton.className} text-[6vw] md:text-[4vw] tracking-wider uppercase ${rowScrollClass}`}
                                            style={{ minWidth: "300%" }}
                                        >
                                            {/* Repeating text to fill the scrolling width */}
                                            {Array.from({ length: 15 }).map((_, textIndex) => (
                                                <span key={textIndex} className="mr-8">
                                                    {service.watermarkText}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Foreground Content */}
                        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
                            {/* Service/Project Title */}
                            <h2
                                className={`${anton.className} text-center text-white text-[clamp(1.8rem,6vw,4.5rem)] leading-none uppercase tracking-wide mb-6 md:mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]`}
                            >
                                {service.title}
                            </h2>

                            {/* White Showcase Box */}
                            <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[640px] lg:max-w-[720px] aspect-[16/10] bg-white border-[4px] sm:border-[6px] md:border-[8px] border-black transition-all duration-300 hover:-translate-y-1.5 md:hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group cursor-pointer overflow-hidden">
                                <div className="absolute inset-0 bg-[#F5F5F5] transition-colors duration-300 group-hover:bg-white overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 640px) 320px, (max-width: 768px) 450px, 720px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Transforming Vision Section */}
            <div className="relative w-full bg-white text-black py-20 md:py-32 px-12 flex flex-col items-center justify-center overflow-hidden border-t-[6px] md:border-t-[8px] border-black">
                <div className="relative w-full max-w-4xl flex flex-col items-center">

                    {/* Header Text Layout */}
                    <div className="relative flex flex-col items-center mb-10 md:mb-16 select-none w-full">
                        {/* Transforming Your */}
                        <h2 className={`${anton.className} text-[clamp(1.5rem,6.5vw,5.5rem)] leading-none uppercase text-black tracking-tight self-center md:self-start md:-translate-x-[5%] lg:-translate-x-[10%] text-center md:text-left`}>
                            TRANSFORMING YOUR
                        </h2>

                        {/* Vision (tilted orange block) */}
                        <div className="relative my-4 md:my-6 z-10 -rotate-[3deg] transition-transform duration-300 hover:rotate-0">
                            <div className="bg-[#EB6E00] border-[4px] md:border-[6px] border-black px-6 py-2.5 md:px-14 md:py-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <span className={`${anton.className} text-[clamp(1.8rem,8vw,6.5rem)] leading-none uppercase text-black tracking-tight block`}>
                                    VISION
                                </span>
                            </div>
                        </div>

                        {/* Into Reality */}
                        <h2 className={`${anton.className} text-[clamp(1.5rem,6.5vw,5.5rem)] leading-none uppercase text-black tracking-tight self-center md:self-end md:translate-x-[5%] lg:translate-x-[10%] text-center md:text-right`}>
                            INTO REALITY
                        </h2>
                    </div>

                    {/* Content Row: Arrow and Text */}
                    <div className="relative w-full max-w-3xl mt-8 md:mt-16 px-4">
                        {/* Wavy Arrow pointing down-left at the paragraph start (Commented out) */}
                        {/* <div className="absolute -top-16 left-2 sm:-top-20 sm:left-6 md:-top-24 md:left-14 pointer-events-none select-none z-20">
                            <svg 
                                viewBox="0 0 150 120" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-black transform rotate-[-10deg]"
                            >
                                <path
                                    d="M120 15 C80 20, 45 40, 35 90"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M20 75 L33 92 L52 82"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div> */}

                        {/* Description Paragraph, centered/aligned without the arrow offset */}
                        <div className="flex flex-col items-center text-center pt-2">
                            <p className="text-black font-semibold text-[clamp(1rem,2.8vw,1.9rem)] leading-[1.3] tracking-tight">
                                We don&apos;t just design for brands. <span className="text-[#EB6E00]">We design around them.</span>
                            </p>
                            <p className="text-black font-semibold text-[clamp(1rem,2.8vw,1.9rem)] leading-[1.3] tracking-tight mt-1">
                                Thoughtful strategy, precise execution, and digital experiences built to last.
                            </p>
                        </div>
                    </div>

                    {/* Start Your Project Button */}
                    <div className="mt-12 md:mt-16">
                        <button
                            className={`${anton.className} bg-[#EB6E00] text-black border-[3px] border-black text-lg md:text-xl uppercase px-8 py-3 md:px-12 md:py-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#EB6E00] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] md:hover:translate-x-[5px] md:hover:translate-y-[5px] transition-all duration-300 cursor-pointer tracking-wider`}
                        >
                            Start Your Project
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
