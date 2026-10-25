import { useEffect } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import {
    AboutSection,
    ContactSection,
    HeroSection,
    ProjectsSection,
} from "./components/sections";
import ParticleNetwork from "./components/ParticleNetwork";
import { useLanguage } from "./context/languageContext";

const App = () => {
    const { language } = useLanguage();

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    return (
        <div className="min-h-dvh flex flex-col">
            <ParticleNetwork />
            <Header />
            <main>
                <div className="container mx-auto px-5">
                    <HeroSection />
                    <ProjectsSection />
                    <AboutSection />
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
