import { useEffect, useState } from "react";
import { CONTENT } from "./content.js";
import {
  AcademicSection,
  ArchitectureSignatureSection,
  ContactSection,
  DomainsSection,
  EducationSection,
  ExperienceSection,
  Footer,
  HelpSection,
  Hero,
  Masthead,
  ProfileSection,
  RoleSection,
  StackSection,
  StoriesSection,
  TracksSection,
} from "./components/sections.jsx";

const App = () => {
  const [lang, setLang] = useState("en");
  const content = CONTENT[lang];

  // Reflect language on <html> so font features can localize if needed.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="ed-root">
      <Masthead lang={lang} setLang={setLang} content={content} />
      <main className="ed-main">
        <Hero content={content} />
        <ProfileSection content={content} />
        <ArchitectureSignatureSection content={content} />
        <HelpSection content={content} />
        <TracksSection content={content} />
        <RoleSection content={content} />
        <ExperienceSection content={content} />
        <DomainsSection content={content} />
        <StoriesSection content={content} />
        <AcademicSection content={content} />
        <EducationSection content={content} />
        <StackSection content={content} />
        <ContactSection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
};

export default App;
