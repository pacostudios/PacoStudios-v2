import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 120 80"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M10 40 C40 10, 80 10, 110 40 M110 40 L95 30 M110 40 L95 50"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function StartCta() {
    return (
        <section className="relative px-4 py-20 sm:px-8 md:px-16 md:py-32 overflow-hidden">
            <div className="relative mx-auto flex max-w-2xl items-center justify-center">
                <div className="relative w-full max-w-[240px] min-[400px]:max-w-[320px] sm:max-w-[380px] md:max-w-[420px]">
                    {/* Left Arrow */}
                    <Image
                        src="/images/Arr1.png"
                        alt="Arrow indicator"
                        width={100}
                        height={100}
                        className="absolute -top-10 -left-6 min-[400px]:-top-14 min-[400px]:-left-14 sm:-top-20 sm:-left-20 md:-top-24 md:-left-24 w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] object-contain mix-blend-multiply select-none pointer-events-none z-20"
                    />
                    
                    {/* Button */}
                    <button
                        className={`${anton.className} relative z-10 h-[72px] w-full rounded-[100px] border-[3px] border-[#B5B5B5] bg-[#EB6E00] text-[clamp(28px,8vw,56px)] uppercase leading-none text-white shadow-[6px_6px_0px_0px_#B5B5B5] rotate-[6deg] transition-all duration-300 hover:bg-black hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_#B5B5B5] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none sm:h-[80px] md:h-[90px] cursor-pointer`}
                    >
                        Start
                    </button>
                    
                    {/* Right Arrow */}
                    <Image
                        src="/images/Arr2.png"
                        alt="Arrow indicator"
                        width={100}
                        height={100}
                        className="absolute -bottom-10 -right-6 min-[400px]:-bottom-14 min-[400px]:-right-14 sm:-bottom-20 sm:-right-20 md:-bottom-24 md:-right-24 w-[50px] h-[50px] min-[400px]:w-[70px] min-[400px]:h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] object-contain mix-blend-multiply select-none pointer-events-none z-20"
                    />
                </div>
            </div>
        </section>
    );
}
