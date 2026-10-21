import { useEffect } from "react";
import Header from "./components/layout/header";
import { HeroSection, ProjectsSection } from "./components/sections";
import { useLanguage } from "./context/languageContext";

const App = () => {
    const { language } = useLanguage();

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    return (
        <div className="min-h-dvh flex flex-col">
            <Header />
            <main>
                <div className="container mx-auto px-5">
                    <HeroSection />
                    <ProjectsSection />
                    
                    <section
                        id="about"
                        className="h-90 bg-card mt-10"></section>
                    <section
                        id="contact"
                        className="h-90 bg-card mt-10"></section>
                </div>
            </main>
        </div>
    );
};

export default App;
