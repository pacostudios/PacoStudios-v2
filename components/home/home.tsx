import { Patrick_Hand } from 'next/font/google'
import { Anton } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const handFont = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

export default function HomeSection() {
  return (
    <section id="home" className="relative mt-14 sm:mt-18 mx-4 sm:mx-8 md:mx-16 px-4 pb-32 sm:pb-48">
      <p
        className={`${handFont.className} text-xl sm:text-2xl md:text-5xl flex justify-center mb-4`}
      >
        We are a
      </p>

      <div className="relative flex flex-col leading-none w-full">
        <h1 className={`${anton.className} text-[clamp(60px,18vw,250px)] uppercase`}>
          Design
        </h1>
        <Image
          src="/images/skeat.webp"
          alt="Fox mascot on a skateboard"
          width={807}
          height={1034}
          priority
          className="absolute z-20 pointer-events-none object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[140px] sm:h-[220px] md:h-[300px] lg:h-[360px] w-auto"
        />
        <h1 className={`${anton.className} text-[clamp(60px,18vw,250px)] uppercase text-right`}>
          Agency
        </h1>
      </div>

      <div className="mt-6 relative z-30 pb-16">
        <p className={`${inter.className} text-[24px] sm:text-[28px] md:text-[34px] leading-[30px] sm:leading-[36px] md:leading-[42px] tracking-[-0.04em] font-medium capitalize`}>
          Building digital <span className="text-[#EB6E00]">experiences</span>
        </p>
        <p className={`${inter.className} font-medium text-[24px] sm:text-[28px] md:text-[34px] leading-[30px] sm:leading-[36px] md:leading-[42px] tracking-[-0.04em] capitalize`}>
          that define the future.
        </p>
        <Link
          href="/contact"
          className={`${anton.className} mt-4 w-full max-w-[400px] sm:w-[400px] h-[70px] rounded-[100px] px-[12px] uppercase text-[18px] sm:text-[20px] md:text-[22px] flex items-center justify-center gap-[10px] hover:bg-black hover:text-white transition-all duration-300 bg-[#EB6E00]`}
        >
          Start Your Project
        </Link>
      </div>

      <div className="absolute bottom-[-20px] sm:bottom-[20px] left-[-10vw] right-[-10vw] z-20 -rotate-[10deg] bg-[#EB6E00] py-[13px] overflow-hidden">

        {/* Track */}
        <div className="flex w-max animate-[tickerScroll_120s_linear_infinite]">

          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center">

              <span
                className="font-['Anton'] font-normal text-[50px] leading-[60px] sm:text-[70px] sm:leading-[85px] md:text-[100.15px] md:leading-[123.72px] tracking-[-0.02em] capitalize text-[#FFECA6] whitespace-nowrap pr-4 sm:pr-8"
              >
                We Make Pixels Bold
              </span>

              <span
                className="font-['Anton'] font-normal text-[50px] leading-[60px] sm:text-[70px] sm:leading-[85px] md:text-[100.15px] md:leading-[123.72px] tracking-[-0.02em] capitalize text-[#FFECA6] whitespace-nowrap pr-4 sm:pr-8"
              >
                We Make Pixels Bold
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
