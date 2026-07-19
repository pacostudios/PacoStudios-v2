import HomeSection from "@/components/home/home";
import ShowcaseSection from "@/components/home/showcase";
import ExpertiseSection from "./expertise";
import WhyChooseUs from "./whyChoose";

export default function Index() {
    return (
        <div>
            <HomeSection />
            <ExpertiseSection />
            <ShowcaseSection />
            <WhyChooseUs/>
        </div>
    );
}
