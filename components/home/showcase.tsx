import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="relative w-full overflow-hidden"
    >
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-col">
        <div className="h-[30%] bg-white" />
        <div className="h-[70%] bg-[#EB6E00]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        {/* Title */}
        <h2
          className={`${anton.className} mb-6 md:mb-10 text-center text-[clamp(3rem,10vw,8rem)] leading-none`}
        >
          <span className="text-[#EB6E00]">SHOW</span>
          <span className="text-black"> CASE</span>
        </h2>

        {/* TV Image */}
        <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[500px] lg:max-w-[650px]">
          <Image
            src="/images/branding.webp"
            alt="Retro TV showcase"
            width={650}
            height={650}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Bottom Section */}
        <div className="w-full bg-[#EB6E00] px-4 sm:px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-10 md:pb-16">
          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            {/* Text */}
            <p className="max-w-4xl text-white font-semibold leading-[1.1] text-[clamp(1.5rem,4vw,3.5rem)]">
              We've partnered with brands across industries to deliver digital
              products that are visually stunning, fast, and business-driven.
            </p>

            {/* Button */}
            <Link
              href="/work"
              className={`
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black
                px-6 md:px-8
                py-3 md:py-4
                text-[10px] sm:text-xs md:text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              `}
            >
              VIEW OUR WORKS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}