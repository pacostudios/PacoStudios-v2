import ServiceHero from "./ServiceHero";
import OurServicesList from "./OurFile";

export default function ServiceIndex() {
    return (
        <div className="relative">
            <ServiceHero />
            <OurServicesList />
        </div>
    );
}
