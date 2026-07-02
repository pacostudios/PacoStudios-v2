import Image from "next/image";
import { Anton, Inter } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function AboutHero() {
    return (
        <section id="about" className="relative px-4 sm:px-8 md:px-16 pt-6 pb-16 md:pb-28 mt-12 md:mt-32">
            <div className="relative mx-auto max-w-6xl">
                <div className="relative flex flex-col items-center">
                    <div
                        className={`${anton.className} absolute z-20 -rotate-[15deg] bg-[#F0EBE7] p-1.5 sm:p-2 -translate-y-[80%] sm:-translate-y-[100%] md:-translate-y-[110%] -translate-x-[130%] sm:-translate-x-[180%] md:-translate-x-[250%]`}
                    >
                        <h1 className="text-[clamp(24px,6vw,60px)] uppercase leading-none text-black">
                            IT&apos;S
                        </h1>
                    </div>
                    <div
                        className={`${anton.className} relative z-10 rotate-[15deg] bg-[#EB6E00] px-6 py-2 sm:px-10 sm:py-3 md:px-16 md:py-4`}
                    >
                        <h1 className="text-[clamp(52px,14vw,180px)] uppercase leading-none text-black">
                            ABOUT
                        </h1>
                    </div>

                    <div
                        className={`${anton.className} relative z-0 bg-[#FFE9D1] px-6 py-2 sm:px-10 sm:py-3 md:px-16 md:py-4`}
                    >
                        <h1 className="text-[clamp(52px,14vw,180px)] text-[#EB6E00] uppercase leading-none">
                            PACO
                        </h1>
                    </div>

                    <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] sm:w-[155px] md:w-[200px] aspect-[2/3]">
                        <Image
                            src="/images/image 28.png"
                            alt="Paco fox mascot"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-30 mt-10 sm:mt-16 md:mt-20 text-center">
                    <div>
                        <p
                            className={`${inter.className} text-lg font-medium sm:text-xl md:text-2xl`}
                        >
                            We&apos;re not just developers or designers.{" "}

                        </p>
                        <span
                            className={`${anton.className} mt-2 inline-block -rotate-2 bg-[#6B3F1F] px-4 py-1.5 uppercase text-white sm:px-6 sm:py-2 text-lg md:text-2xl`}
                        >
                            WE&apos;RE PROBLEM SOLVERS
                        </span>
                    </div>

                    <div>
                        <p className={`${inter.className} text-lg font-medium sm:text-xl md:text-2xl mt-2`}>
                            With expertise spanning <span className={`${inter.className} font-medium text-[#EB6E00]`}>web development, UX/UI, 3D</span>
                        </p>
                        <p className={`${inter.className} text-lg font-medium sm:text-xl md:text-2xl mt-2`}>
                            experiences, and modern applications. Paco Studios builds
                        </p>
                        <p className={`${inter.className} text-lg font-medium sm:text-xl md:text-2xl mt-2`}>products that feel as <span className={`${inter.className} font-medium text-[#EB6E00]`}>good</span> as they perform.</p>

                    </div>
                    <button
                        className={`${anton.className} mt-8 h-[60px] w-full max-w-[320px] rounded-[100px] bg-[#EB6E00] text-base uppercase text-black transition-all duration-300 hover:bg-black hover:text-white sm:mt-10 sm:h-[70px] sm:max-w-[380px] sm:text-lg md:text-xl`}
                    >
                        Start Your Project
                    </button>
                </div>
            </div>
        </section>
    );
}
