import Image from "next/image";
import { Anton, Inter } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function PhilosophySection() {
    return (
        <div>
            <section className="relative h-[300px] min-[400px]:h-[360px] min-[500px]:h-[440px] sm:h-[520px] md:h-[600px] overflow-hidden">
                <div className="relative mx-auto h-full max-w-7xl">

                    {/* Scale Wrapper: containing both text (skewed) and mascot (unskewed) */}
                    <div
                        className="absolute left-1/2 top-1/2 w-[694px] h-[559px] [--art-scale:0.45] min-[400px]:[--art-scale:0.55] min-[500px]:[--art-scale:0.7] sm:[--art-scale:0.85] md:[--art-scale:1]"
                        style={{
                            transform: "translate(-50%, -50%) scale(var(--art-scale, 1))",
                            transformOrigin: "center",
                        }}
                    >
                        {/* Skewed Text Container */}
                        <div
                            className="w-full h-full relative"
                            style={{
                                transform: "matrix(0.87,0.4,-0.87,0.4,0,0)",
                                transformOrigin: "center",
                            }}
                        >
                            {/* OUR */}
                            <h2 className={`${anton.className} absolute right-[300px] -top-[20px] text-[#EB6E00] text-[160px] leading-none tracking-[0.01em] uppercase`}>
                                OUR
                            </h2>

                            {/* PHILOSOPHY */}
                            <h1
                                className={`${anton.className} absolute right-0 top-[130px] text-[#EB6E00] text-[160px] leading-none tracking-[0.01em] uppercase`}
                            >
                                PHILOSOPHY
                            </h1>
                        </div>

                        {/* Mascot - centered relative to the parent text container */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[80px] z-20 w-[280px] h-[280px]">
                            <Image
                                src="/images/image 30.webp"
                                alt="Paco fox with laptop"
                                fill
                                className="object-contain mix-blend-screen"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="-mt-8 min-[400px]:-mt-12 min-[500px]:-mt-16 sm:-mt-24 md:-mt-32 relative z-30 p-4">
                <p
                    className={`${inter.className} mx-auto max-w-2xl text-center text-base text-black/80 md:text-xl font-medium`}
                >
                    We believe great digital products are built at the intersection of
                </p>

                <p
                    className={`${inter.className} mx-auto max-w-2xl text-center text-base text-black/80 md:text-xl font-medium`}
                >
                    strategy, creativity, and technology.
                </p>

                <p
                    className={`${inter.className} mx-auto max-w-2xl text-center text-base text-black/80 md:text-xl font-medium`}
                >
                    Every pixel, animation, and line of code serves a purpose.
                </p>
            </div>
        </div>
    );
}
