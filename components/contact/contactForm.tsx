"use client";

import { useState, type SubmitEvent } from "react";
import { Anton, Inter } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
});

function WhatsAppIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

const inputClasses = `${inter.className} w-full rounded-[12px] border-2 border-black bg-white px-4 py-3 text-black placeholder:text-black/40 outline-none transition-colors focus:border-[#EB6E00]`;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("sent");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="relative px-4 pb-20 sm:px-8 md:px-16 md:pb-32">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Contact info */}
                <div className="flex flex-col justify-center">
                    <h2 className={`${anton.className} mb-6 uppercase leading-none text-black text-[clamp(1.75rem,5vw,2.75rem)]`}>
                        Contact Info
                    </h2>

                    <a
                        href="mailto:info@pacostudios.org"
                        className={`${inter.className} mb-4 block text-lg font-medium text-black hover:text-[#EB6E00] transition-colors sm:text-xl`}
                    >
                        info@pacostudios.org
                    </a>

                    <a
                        href="tel:+61470541254"
                        className={`${inter.className} mb-8 block text-lg font-medium text-black hover:text-[#EB6E00] transition-colors sm:text-xl`}
                    >
                        +61 470541254
                    </a>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/org_paco?igsh=bTVhcXNjYmdlcTAz"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-transform hover:scale-110 hover:bg-[#EB6E00]"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/pacostudios/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-transform hover:scale-110 hover:bg-[#EB6E00]"
                        >
                            <CiLinkedin size={18} />
                        </a>
                        <a
                            href="https://wa.me/61470541254"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-transform hover:scale-110 hover:bg-[#EB6E00]"
                        >
                            <WhatsAppIcon size={18} />
                        </a>
                    </div>
                </div>

                {/* Form card */}
                <form
                    onSubmit={handleSubmit}
                    className="relative flex flex-col gap-4 rounded-[16px] border-[4px] border-black bg-white p-6 shadow-[10px_10px_0px_0px_#EB6E00] sm:p-8 md:border-[6px]"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className={`${inter.className} text-sm font-medium text-black/70`}>
                            Name
                        </label>
                        <input id="name" name="name" type="text" required placeholder="Your name" className={inputClasses} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={`${inter.className} text-sm font-medium text-black/70`}>
                            Email
                        </label>
                        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClasses} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className={`${inter.className} text-sm font-medium text-black/70`}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell us about your project"
                            className={`${inputClasses} resize-none`}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className={`${anton.className} mt-2 h-[60px] w-full rounded-[100px] bg-[#EB6E00] text-[18px] uppercase text-white transition-all duration-300 hover:bg-black disabled:opacity-60 sm:h-[66px] sm:text-[20px]`}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "sent" && (
                        <p className={`${inter.className} text-center text-sm font-medium text-green-600`}>
                            Message sent! We&apos;ll get back to you soon.
                        </p>
                    )}

                    {status === "error" && (
                        <p className={`${inter.className} text-center text-sm font-medium text-red-600`}>
                            Something went wrong. Please try again or email us directly.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
