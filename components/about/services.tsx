import { Anton, Inter } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
});

const services = [
    {
        title: "UX UI DESIGN",
        description:
            "We design intuitive, refined UX/UI that users understand instantly and trust instinctively. Every screen is research-led, purpose-built, and engineered to guide users toward action—without friction, confusion, or guesswork.",
        rotate: "-rotate-[2deg]",
        align: "self-start",
        offset: "md:translate-x-[6%] lg:translate-x-[10%]",
        zIndexValue: 10,
    },
    {
        title: "WEB DEVELOPMENT",
        description:
            "We engineer secure, high-performance websites built for speed, scalability, and long-term reliability. From corporate sites to complex platforms, our development prioritizes clean architecture, SEO readiness, and flawless performance across every device.",
        rotate: "rotate-[1.5deg]",
        align: "self-end",
        offset: "-mt-4 md:-mt-6 lg:-mt-8 md:-translate-x-[6%] lg:-translate-x-[10%]",
        zIndexValue: 20,
    },
    {
        title: "3D DEVELOPMENT",
        description:
            "Our 3D experiences blend storytelling and advanced technology to create immersive digital worlds that captivate users, strengthen brand identity, and stand apart from the ordinary.",
        rotate: "-rotate-[1.5deg]",
        align: "self-start",
        offset: "-mt-4 md:-mt-6 lg:-mt-8 md:translate-x-[4%] lg:translate-x-[8%]",
        zIndexValue: 30,
    },
    {
        title: "APP DEVELOPMENT",
        description:
            "We design and develop mobile apps that are intuitive to use, reliable at scale, and built to perform—so users don't just download them, they keep coming back.",
        rotate: "rotate-[2deg]",
        align: "self-end",
        offset: "-mt-4 md:-mt-6 lg:-mt-8 md:-translate-x-[4%] lg:-translate-x-[8%]",
        zIndexValue: 40,
    },
    {
        title: "AI CHATBOT SOLUTIONS",
        description:
            "We build AI chatbot solutions that automate intelligently, communicate naturally, and integrate seamlessly into your existing business workflows.",
        rotate: "-rotate-[1deg]",
        align: "self-start",
        offset: "-mt-4 md:-mt-6 lg:-mt-8 md:translate-x-[6%] lg:translate-x-[10%]",
        zIndexValue: 50,
    },
];

export default function AboutServices() {
    return (
        <section className="relative px-4 py-16 sm:px-8 md:px-16 md:py-28 overflow-hidden">
            <h2
                className={`${anton.className} mb-12 text-center text-[clamp(48px,12vw,80px)] uppercase leading-none md:mb-20`}
            >
                <span className="text-[#EB6E00]">OUR </span>
                <span className="text-black">SERVICE</span>
            </h2>

            <div className="mx-auto flex max-w-5xl flex-col items-center gap-0">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className={`w-full max-w-[95vw] md:w-[70%] border-[2px] md:border-[3px] border-black bg-[#FFECA6] shadow-[0_12px_28px_rgba(0,0,0,0.18)] md:shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${service.rotate} ${service.align} ${service.offset} relative transition-all duration-300 hover:scale-[1.02] hover:!z-[60]`}
                        style={{ zIndex: service.zIndexValue }}
                    >
                        <div className="bg-[#EB6E00] border-b-[2px] md:border-b-[3px] border-black px-4 py-3 sm:px-6 sm:py-4 text-center">
                            <h3 className={`${anton.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-[0.02em]`}>
                                {service.title}
                            </h3>
                        </div>
                        <div className="px-5 pt-5 pb-14 sm:px-8 sm:pt-7 sm:pb-20 md:pb-24 bg-[#FFECA6]">
                            <p className={`${inter.className} text-left text-[13px] leading-relaxed text-black/90 sm:text-[15px] md:text-[17px] font-medium`}>
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
