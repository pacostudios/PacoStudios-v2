import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

export default function ServiceHero() {
    return (
        <section id="services" className="relative w-full overflow-x-hidden pt-24 pb-12 md:pt-32 md:pb-20 flex flex-col items-center justify-center select-none">
            {/* Title & Wavy Line Wrapper */}
            <div className="relative inline-flex items-center justify-center px-4 py-12 sm:px-12 md:px-24 md:py-24">

                <h2
                    className={`${anton.className} text-center text-[clamp(28px,10vw,200px)] uppercase leading-none flex flex-row items-center justify-center gap-[0.08em] z-10`}
                >
                    {/* "OUR" on the left in black */}
                    <span className="text-black tracking-tight">OUR</span>

                    {/* "WORK" on the right in peach box, with the fox layered behind it */}
                    <span className="relative bg-[#FFF0E6] text-[#EB6E00] px-[0.3em] py-[0.05em] rounded-sm inline-flex items-center justify-center isolate">
                        {/* Fox image behind the WORK box, scaling with font-size using em */}
                        <span
                            className="absolute -translate-x-1/2 z-[-1] pointer-events-none overflow-hidden"
                            style={{ width: "1.8em", height: "1.05em", bottom: "95%", left: "9%" }}
                        >
                            <span
                                className="absolute top-0 left-0"
                                style={{ width: "1.8em", height: "1.8em" }}
                            >
                                <Image
                                    src="/images/FOX_SERVICE.webp"
                                    alt="Fox character"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </span>
                        </span>
                        <span className="relative z-10 tracking-tight">WORK</span>
                    </span>
                </h2>
            </div>
        </section>
    );
}


