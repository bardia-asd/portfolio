import { useEffect } from "react";
import { useLanguage } from "./context/languageContext";
import Header from "./components/layout/header/Header";

const App = () => {
    const { language } = useLanguage();

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    return (
        <div className="min-h-dvh flex flex-col">
            <Header />
            <section id="home" className="h-90 bg-card mt-10"></section>
            <section id="projects" className="h-90 bg-card mt-10"></section>
            <section id="about" className="h-90 bg-card mt-10"></section>
            <section id="contact" className="h-90 bg-card mt-10"></section>
        </div>
    );
};

export default App;
