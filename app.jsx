// App composition — language state lives here.

const App = () => {
  const [lang, setLang] = React.useState("en");
  const content = window.CONTENT[lang];

  // Reflect language on <html> so font features can localize if needed.
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="ed-root">
      <Masthead lang={lang} setLang={setLang} content={content} />
      <main className="ed-main">
        <Hero content={content} />
        <ProfileSection content={content} />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
