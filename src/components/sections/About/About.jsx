import AboutContent from "./AboutContent";
import AboutSidebar from "./AboutSidebar";

const About = () => {
    return (
        <section id="about" className="scroll-mt-14 py-8 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:items-center lg:gap-18">
                <AboutSidebar />
                <div className="min-w-0">
                    <AboutContent />
                </div>
            </div>
        </section>
    );
};

export default About;
