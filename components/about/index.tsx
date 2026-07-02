import AboutHero from "./aboutHero";
import MissionSection from "./mission";
import PhilosophySection from "./philosophy";
import AboutServices from "./services";
import StartCta from "./startCta";
import AboutBackground from "./aboutBackground";

export default function AboutIndex() {
    return (
        <div className="relative">
            {/* <AboutBackground /> */}
            <AboutHero />
            <MissionSection />
            <PhilosophySection />
            <AboutServices />
            <StartCta />
        </div>
    );
}
