import WorkHero from "./workHero";
import WorkProjects from "./workProjects";
import WorkCta from "./workCta";

export default function WorkIndex() {
    return (
        <div className="relative">
            <WorkHero />
            <WorkProjects />
            <WorkCta />
        </div>
    );
}
