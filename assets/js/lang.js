document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      title: "Strategic design and digital innovation agency.",
      subheading: "Purpose to grow. Boldness to move.",
      paragraphs: [
        "We believe in design as a tool for change. And in strategy as the starting point.",
        "We think clearly and act with intention. We care about details and pursue quality with discipline.",
        "We are analytical and solutions-oriented. We question, simplify, and refine until everything makes sense — and works. We enjoy what we do. And that keeps us demanding.",
        "We design with precision and build with purpose. We don’t follow trends — we create clarity. For brands that want to move forward with energy, and stand out with meaning."
      ],
      footer: "Contact us at"
    },
    es: {
      title: "Agencia de diseño estratégico e innovación digital.",
      subheading: "Propósito para crecer. Valentía para avanzar.",
      paragraphs: [
        "Creemos en el diseño como una herramienta de cambio. Y en la estrategia como el punto de partida.",
        "Pensamos con claridad y actuamos con intención. Cuidamos los detalles y buscamos calidad con rigor.",
        "Somos analíticos y resolutivos. Cuestionamos, simplificamos y afinamos hasta que todo tiene sentido — y funciona. Disfrutamos lo que hacemos. Y eso nos mantiene exigentes.",
        "Diseñamos con precisión. Construimos con propósito. No seguimos tendencias: buscamos claridad. Para marcas que quieren avanzar con energía, y diferenciarse con sentido."
      ],
      footer: "Escríbenos a"
    },
    it: {
      title: "Agenzia di design strategico e innovazione digitale.",
      subheading: "Scopo per crescere. Coraggio per andare avanti.",
      paragraphs: [
        "Crediamo nel design come strumento di cambiamento. E nella strategia come punto di partenza.",
        "Pensiamo con chiarezza e agiamo con intenzione. Prestiamo attenzione ai dettagli e perseguiamo la qualità con rigore.",
        "Siamo analitici e orientati alla soluzione. Mettiamo in discussione, semplifichiamo e perfezioniamo finché tutto ha senso — e funziona. Amiamo ciò che facciamo. Ed è questo che ci rende esigenti.",
        "Progettiamo con precisione e costruiamo con scopo. Non seguiamo le mode — creiamo chiarezza. Per marchi pronti ad andare avanti con energia e distinguersi con significato."
      ],
      footer: "Contattaci a"
    },
    pt: {
      title: "Agência de design estratégico e inovação digital.",
      subheading: "Propósito para crescer. Coragem para avançar.",
      paragraphs: [
        "Acreditamos no design como uma ferramenta de mudança. E na estratégia como ponto de partida.",
        "Pensamos com clareza e agimos com intenção. Cuidamos dos detalhes e buscamos qualidade com rigor.",
        "Somos analíticos e focados em soluções. Questionamos, simplificamos e refinamos até que tudo faça sentido — e funcione. Gostamos do que fazemos. E isso nos mantém exigentes.",
        "Projetamos com precisão e construímos com propósito. Não seguimos tendências — criamos clareza. Para marcas que querem avançar com energia e se destacar com significado."
      ],
      footer: "Fale conosco em"
    }
  };

  const langSelector = document.getElementById("lang-select");

  const updateLanguage = (lang) => {
    const t = translations[lang];
    if (!t) return;

    document.getElementById("main-title").textContent = t.title;

    const subheading = document.querySelector('[data-i18n="subheading"]');
    if (subheading) subheading.innerText = t.subheading || "";
    
    const footerText = document.querySelector('[data-i18n="footer"]');
    if (footerText) footerText.innerText = t.footer || "";

    const paragraphs = document.querySelectorAll(".content-paragraph");
    paragraphs.forEach((p, i) => {
      p.textContent = t.paragraphs[i] || "";
    });
  };

  // Detectar idioma del navegador
  const getBrowserLang = () => {
    const lang = navigator.language || navigator.userLanguage || "en";
    const shortLang = lang.split("-")[0];
    return Object.keys(translations).includes(shortLang) ? shortLang : "en";
  };

  // Inicializar idioma
  let savedLang = localStorage.getItem("lang");
  if (!savedLang) {
    savedLang = getBrowserLang();
    localStorage.setItem("lang", savedLang);
  }

  if (langSelector) {
    langSelector.value = savedLang;
    updateLanguage(savedLang);

    langSelector.addEventListener("change", function () {
      const newLang = this.value;
      localStorage.setItem("lang", newLang);
      updateLanguage(newLang);
      console.log("Language changed to:", newLang);
    });
  } else {
    updateLanguage(savedLang);
  }
});
