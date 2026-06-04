import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
});

export default function ExpertiseSection() {
    return (
        <section className="relative w-full mt-20 md:mt-40 px-4">
            {/* Intro Section */}
            <div className="flex flex-col items-center text-center">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4">
                    <img
                        src="/images/tech_img.png"
                        alt="Paco Studios"
                        className="w-[60px] sm:w-[70px] md:w-[90px] h-auto"
                    />

                    <div>
                        <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-medium leading-tight text-center sm:text-start">
                            Paco Studios is a
                        </p>

                        <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-medium text-orange-500 leading-tight sm:pl-4 text-center sm:text-start">
                            creative technology studio
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-4">
                    <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-medium leading-tight">
                        crafting high-performing digital
                    </p>

                    <svg
                        className="w-[80px] sm:w-[100px] md:w-[122px] h-auto"
                        viewBox="0 0 192 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_190_42)">
                            <rect
                                width="191.822"
                                height="63.9405"
                                rx="31.9703"
                                fill="#EB6E00"
                            />
                            <path
                                d="M125.003 14.5458V31.1704C125.003 31.7215 124.784 32.2501 124.395 32.6398C124.005 33.0295 123.477 33.2484 122.925 33.2484C122.374 33.2484 121.846 33.0295 121.456 32.6398C121.066 32.2501 120.847 31.7215 120.847 31.1704V19.5618L99.4588 40.9529C99.2658 41.1461 99.0366 41.2994 98.7843 41.4039C98.5321 41.5085 98.2617 41.5623 97.9886 41.5623C97.7155 41.5623 97.4451 41.5085 97.1928 41.4039C96.9405 41.2994 96.7113 41.1461 96.5183 40.9529L87.5982 32.0302L70.3659 49.2651C69.9759 49.6551 69.4471 49.8741 68.8956 49.8741C68.3442 49.8741 67.8153 49.6551 67.4254 49.2651C67.0355 48.8752 66.8164 48.3464 66.8164 47.7949C66.8164 47.2435 67.0355 46.7146 67.4254 46.3247L86.128 27.6221C86.321 27.4289 86.5502 27.2756 86.8025 27.171C87.0547 27.0664 87.3251 27.0126 87.5982 27.0126C87.8713 27.0126 88.1417 27.0664 88.394 27.171C88.6463 27.2756 88.8755 27.4289 89.0685 27.6221L97.9886 36.5448L117.909 16.6239H106.301C105.75 16.6239 105.221 16.405 104.831 16.0153C104.442 15.6255 104.223 15.097 104.223 14.5458C104.223 13.9947 104.442 13.4661 104.831 13.0764C105.221 12.6867 105.75 12.4678 106.301 12.4678H122.925C123.477 12.4678 124.005 12.6867 124.395 13.0764C124.784 13.4661 125.003 13.9947 125.003 14.5458Z"
                                fill="#FFECA6"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_190_42">
                                <rect
                                    width="191.822"
                                    height="63.9405"
                                    rx="31.9703"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-medium leading-tight mt-2">
                    products for ambitious brands.
                </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-12 md:mt-20">
                <div className="flex items-center w-full max-w-[120px] md:max-w-[148px]">
                    <div className="flex-1 h-px bg-gradient-to-r from-[#F0EBE7] to-[#EB6E00]" />
                    <div className="w-3 h-3 md:w-[18px] md:h-[18px] rounded-full bg-[#EB6E00] shrink-0" />
                </div>

                <Image
                    src="/images/hr_fox.png"
                    alt="Expertise"
                    width={95}
                    height={95}
                    className="w-[60px] sm:w-[75px] md:w-[95px] h-auto"
                />

                <div className="flex items-center w-full max-w-[120px] md:max-w-[148px]">
                    <div className="w-3 h-3 md:w-[18px] md:h-[18px] rounded-full bg-[#EB6E00] shrink-0" />
                    <div className="flex-1 h-px bg-gradient-to-r from-[#EB6E00] to-[#F0EBE7]" />
                </div>
            </div>

            {/* Expertise Section */}
            <div className="mt-20 md:mt-40">
                <h2
                    className={`${anton.className} mb-8 text-[clamp(3rem,10vw,8rem)] font-bold text-center`}
                >
                    <span className="text-[#EB6E00]">OUR</span>
                    <span className="text-black"> EXPERTISE</span>
                </h2>

                <div className="flex flex-col items-center py-16 md:py-32 overflow-hidden">
                    {/* UX/UI */}
                    <div
                        className={`${anton.className} bg-[#FFECA6] border-[2px] md:border-[3px] border-black px-4 sm:px-8 md:px-12 py-3 md:py-4 rotate-[3deg] ml-4 md:ml-24 max-w-[95vw] text-center`}
                    >
                        <h3 className="uppercase text-[clamp(2rem,8vw,6rem)] leading-none text-black">
                            UX/UI Design
                        </h3>
                    </div>

                    {/* Web Development */}
                    <div
                        className={`${anton.className} bg-[#673C20] border-[2px] md:border-[3px] border-black px-4 sm:px-8 md:px-12 py-3 md:py-4 -rotate-[0.2deg] md:-ml-16 -mt-2 max-w-[95vw] text-center`}
                    >
                        <h3 className="uppercase text-[clamp(2rem,8vw,6rem)] leading-none text-[#F2ECE6]">
                            Web Development
                        </h3>
                    </div>

                    {/* 3D Development */}
                    <div
                        className={`${anton.className} bg-[#FFE9D1] border-[2px] md:border-[3px] border-black px-4 sm:px-8 md:px-12 py-3 md:py-4 rotate-[0.3deg] md:ml-6 -mt-1 max-w-[95vw] text-center`}
                    >
                        <h3 className="uppercase text-[clamp(2rem,8vw,6rem)] leading-none text-[#F07800]">
                            3D Development
                        </h3>
                    </div>

                    {/* Branding */}
                    <div
                        className={`${anton.className} bg-[#EB6E00] border-[2px] md:border-[3px] border-black px-4 sm:px-8 md:px-12 py-3 md:py-4 -rotate-[3deg] -mt-1 max-w-[95vw] text-center`}
                    >
                        <h3 className="uppercase text-[clamp(2rem,8vw,6rem)] leading-none text-black">
                            Branding
                        </h3>
                    </div>

                    {/* Chat Bot */}
                    <div
                        className={`${anton.className} bg-[#1E1E1E] border-[2px] md:border-[3px] border-black px-4 sm:px-8 md:px-12 py-3 md:py-4 rotate-[3deg] md:-ml-8 max-w-[95vw] text-center`}
                    >
                        <h3 className="uppercase text-[clamp(2rem,8vw,6rem)] leading-none text-[#F2F0EC]">
                            Chat Bot Solution
                        </h3>
                    </div>

                    {/* Button */}
                    <button
                        className={`${anton.className}
                        mt-16 md:mt-24
                        w-full
                        max-w-[350px]
                        sm:max-w-[400px]
                        h-[60px]
                        md:h-[70px]
                        rounded-full
                        px-6
                        uppercase
                        text-[16px]
                        sm:text-[18px]
                        md:text-[22px]
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-[#EB6E00]
                        hover:bg-black
                        hover:text-white
                        transition-all
                        duration-300`}
                    >
                        VIEW ALL SERVICE
                    </button>
                </div>
            </div>
        </section>
    );
}