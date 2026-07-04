import Image from "next/image";
import { Anton, Inter } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
});

const navLinks = [
    {
        label: "Home",
        href: "/",
        bg: "bg-[#EB6E00]",
        text: "text-white",
        shape: "rounded-[4px]",
        rotate: "-rotate-6",
    },
    {
        label: "About",
        href: "/about",
        bg: "bg-[#6B3F1F]",
        text: "text-white",
        shape: "rounded-[4px]",
        rotate: "rotate-6",
    },
    {
        label: "Work",
        href: "/work",
        bg: "bg-[#F3E6A8]",
        text: "text-black",
        shape: "rounded-[4px]",
        rotate: "-rotate-3",
    },
    {
        label: "Contact Us",
        href: "/contact",
        bg: "bg-[#F3E6D3]",
        text: "text-black",
        shape: "rounded-full",
        rotate: "rotate-0",
    },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="relative z-30">
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="block w-full h-14 sm:h-20 md:h-[100px] bg-black"
                aria-hidden="true"
            >
                <path
                    fill="#EB6E00"
                    d="M0,30 C180,30 270,110 450,110 C600,110 650,45 750,45 C850,45 950,105 1050,105 C1150,105 1300,30 1440,30 L1440,0 L0,0 Z"
                />
            </svg>

            <div className="bg-black text-white">
                <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-16 pt-8 md:pt-12 pb-0">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                        <Link href="/" className="shrink-0">
                            <Image
                                src="/images/paco 2.webp"
                                alt="Paco Studios"
                                width={140}
                                height={140}
                                className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain"
                            />
                        </Link>

                        <nav className="flex items-center justify-center lg:justify-end -space-x-4 sm:-space-x-5 md:-space-x-6">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    style={{ zIndex: (index + 1) * 10 }}
                                    className={`
                                        ${anton.className} ${link.bg} ${link.text} ${link.shape} ${link.rotate}
                                        flex items-center justify-center
                                        tracking-wide relative hover:z-50
                                        shadow-[0_4px_12px_rgba(0,0,0,0.35)]
                                        transition-transform duration-200 hover:scale-105
                                        ${link.label === "Contact Us"
                                            ? "h-[76px] w-[76px] sm:h-[86px] sm:w-[86px] md:h-[96px] md:w-[96px] text-[9.5px] sm:text-[10.5px] md:text-[11.5px] text-center leading-tight px-2 overflow-visible"
                                            : "h-[76px] w-[76px] sm:h-[86px] sm:w-[86px] md:h-[96px] md:w-[96px] text-sm sm:text-base md:text-lg overflow-visible"
                                        }
                                    `}
                                >
                                    {link.label === "Contact Us" ? (
                                        <span>
                                            Contact<br />Us
                                        </span>
                                    ) : (
                                        link.label
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div
                        className={`${inter.className} mt-12 md:mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base`}
                    >
                        <a
                            href="mailto:info@pacostudios.org"
                            className="hover:text-[#EB6E00] transition-colors"
                        >
                            info@pacostudios.org
                        </a>

                        <div className="text-center leading-relaxed">
                            <a href="tel:+61470541254" className="block hover:text-[#EB6E00] transition-colors">
                                +61 470541254
                            </a>
                            <a href="tel:+61470541254" className="block hover:text-[#EB6E00] transition-colors">
                                +61 470541254
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
                            >
                                <FaInstagram size={18} strokeWidth={2.5} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
                            >
                                <CiLinkedin size={18} strokeWidth={2.5} />
                            </a>
                            <a
                                href="https://wa.me/61470541254"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
                            >
                                <WhatsAppIcon size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-12 border-t border-white/80" />

                    <div
                        className={`${inter.className} mt-4 flex flex-col gap-2 sm:flex-row sm:justify-between text-xs sm:text-sm text-white/90`}
                    >
                        <Link href="/privacy" className="hover:text-[#EB6E00] transition-colors">
                            Privacy Policy
                        </Link>
                        <span>2026 Made In Paco Studio</span>
                    </div>

                    <div className="relative mt-6 md:mt-8 h-[clamp(80px,18vw,160px)] overflow-hidden">
                        <h2
                            className={`${anton.className} uppercase leading-[0.8] tracking-tighter text-[clamp(55px,17vw,220px)] translate-y-[8%]`}
                        >
                            <span className="text-white">LET&apos;S </span>
                            <span className="text-[#EB6E00]">WORK </span>
                            <span className="text-white">TOGETHER</span>
                        </h2>
                    </div>
                </div>
            </div>
        </footer>
    );
}
