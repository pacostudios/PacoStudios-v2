import HomeSection from "@/components/home/home";
import ShowcaseSection from "@/components/home/showcase";
import ExpertiseSection from "./expertise";
import WhyChooseUs from "./whyChoose";
import BenefitSection from "./BenefitSection";

export default function Index() {
    return (
        <div>
            <HomeSection />
            <ExpertiseSection />
            <BenefitSection/>
            <ShowcaseSection />
            <WhyChooseUs/>
        </div>
    );
}
