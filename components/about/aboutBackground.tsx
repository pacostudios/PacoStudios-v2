export default function AboutBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            <svg
                className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 opacity-70 sm:w-32"
                viewBox="0 0 100 1000"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M50,0 C70,80 30,160 50,240 C70,320 30,400 50,480 C70,560 30,640 50,720 C70,800 30,880 50,1000"
                    stroke="#FFECA6"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
