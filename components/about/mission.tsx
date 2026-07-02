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

export default function MissionSection() {
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
                                transform: "matrix(0.87,-0.4,0.87,0.4,0,0)",
                                transformOrigin: "center",
                            }}
                        >
                            {/* OUR */}
                            <h2 className={`${anton.className} absolute left-[320px] -top-[20px] text-[#EB6E00] text-[180px] leading-none tracking-[0.01em] uppercase`}>
                                OUR
                            </h2>

                            {/* MISSION */}
                            <h1
                                className={`${anton.className} absolute left-0 top-[150px] text-[#EB6E00] text-[250px] leading-none tracking-[0.01em] uppercase`}
                            >
                                MISSION
                            </h1>
                        </div>

                        {/* Mascot - centered relative to the parent text container */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[80px] z-20 w-[340px] h-[227px]">
                            <Image
                                src="/images/image 29.png"
                                alt="Paco fox on mission"
                                fill
                                className="object-contain mix-blend-screen"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="-mt-6 min-[400px]:-mt-8 min-[500px]:-mt-12 sm:-mt-16 md:-mt-24 relative z-30 p-4">
                <p
                    className={`${inter.className} mx-auto max-w-2xl text-center text-base text-black/80 md:text-xl font-medium`}
                >
                    To deliver scalable, modern, and meaningful digital solutions
                </p>

                <p
                    className={`${inter.className} mx-auto max-w-2xl text-center text-base text-black/80 md:text-xl font-medium`}
                >
                    that drive real business impact and create
                </p>

                <p
                    className={`${inter.className} mx-auto max-w-2xl text-center text-base text-black/80 md:text-xl font-medium`}
                >
                    exceptional user experiences.
                </p>
            </div>
        </div>
    );
}
