import Image from "next/image";
import { Anton } from "next/font/google";
import { ImageIcon } from "lucide-react";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const projects = [
    { title: "Arabian Sky Transport", bg: "#F70105", image: "/images/arabiansky.webp" },
    { title: "Poornaya", bg: "#8FC94C", image: "/images/poornnaya.webp" },
    { title: "Loory Go", bg: "#004890", image: "/images/lorrygo.webp" },
    { title: "Glenroysports", bg: "#0B1931", image: "/images/glenro.webp" },

];

export default function WorkProjects() {
    return (
        <>
            {projects.map((project) => (
                <section
                    key={project.title}
                    className="relative overflow-hidden py-16 md:py-24"
                    style={{ backgroundColor: project.bg }}
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-4 overflow-hidden select-none opacity-20"
                    >
                        {Array.from({ length: 5 }).map((_, row) => (
                            <div
                                key={row}
                                className={`${anton.className} flex whitespace-nowrap uppercase leading-none text-black text-[9vw]`}
                            >
                                {Array.from({ length: 6 }).map((_, col) => (
                                    <span key={col} className="pr-10">
                                        {project.title}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10 flex flex-col items-center px-4">
                        <h2
                            className={`${anton.className} mb-8 text-center uppercase leading-none text-white text-[clamp(1.75rem,6vw,4rem)] md:mb-10`}
                        >
                            {project.title}
                        </h2>
                        <div className="relative aspect-[16/10] w-full max-w-4xl overflow-hidden border-[6px] border-black bg-white md:border-[8px]">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-black/20 p-4">
                                    <ImageIcon className="h-10 w-10 text-black/30 md:h-14 md:w-14" strokeWidth={1.5} />
                                    <span className={`${anton.className} text-[11px] uppercase tracking-wide text-black/30 md:text-sm`}>
                                        Project Image Placeholder
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
