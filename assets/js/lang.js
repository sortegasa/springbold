document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      title: "A strategic design and digital innovation agency.",
      subheading: "Spring is how we start. Bold is how we move.",
      paragraphs: [
        "We believe design is a tool for change — and strategy is the ground it grows from.",
        "We think clearly. We act intentionally. We pursue quality with discipline, because details matter.",
        "We are pragmatic thinkers and rational problem-solvers. We question, simplify, and refine until things make sense — and work. But above all, we are passionate. Enthusiastic. We love what we do. And we do it with joy.",
        "We design with precision, and we build with purpose. We don’t chase trends — we create clarity. For brands that are ready to move forward — with the energy to grow, and the courage to stand out.",
        "That’s what it means to be Springbold."
      ]
    },
    es: {
      title: "Una agencia de diseño estratégico e innovación digital.",
      subheading: "Spring es cómo empezamos. Bold es cómo avanzamos.",
      paragraphs: [
        "Creemos que el diseño es una herramienta de cambio, y que la estrategia es su base.",
        "Pensamos con claridad. Actuamos con intención. Perseguimos la calidad con disciplina, porque los detalles importan.",
        "Somos pensadores pragmáticos y resolvemos problemas de forma racional. Cuestionamos, simplificamos y refinamos hasta que las cosas tienen sentido — y funcionan. Pero por encima de todo, somos apasionados. Entusiastas. Amamos lo que hacemos. Y lo hacemos dsfrutando.",
        "Diseñamos con precisión, y construimos con propósito. No seguimos tendencias — creamos claridad. Para marcas que están listas para avanzar — con la energía para crecer, y el coraje para destacar.",
        "Eso es lo que significa ser Springbold."
      ]
    },
    it: {
      title: "Un'agenzia di design strategico e innovazione digitale.",
      subheading: "Spring è come iniziamo. Bold è come ci muoviamo.",
      paragraphs: [
        "Crediamo che il design sia uno strumento di cambiamento — e la strategia il terreno su cui cresce.",
        "Pensiamo con chiarezza. Agiamo con intenzione. Perseguiamo la qualità con disciplina, perché i dettagli contano.",
        "Siamo pensatori pragmatici e risolutori razionali di problemi. Mettiamo in discussione, semplifichiamo e perfezioniamo fino a quando tutto ha senso — e funziona. Ma soprattutto, siamo appassionati. Entusiasti. Amiamo ciò che facciamo. E lo facciamo con gioia.",
        "Progettiamo con precisione e costruiamo con scopo. Non inseguiamo le mode — creiamo chiarezza. Per marchi pronti a crescere — con l'energia per evolversi e il coraggio di distinguersi.",
        "Questo è ciò che significa essere Springbold."
      ]
    },
    pt: {
      title: "Uma agência de design estratégico e inovação digital.",
      subheading: "Spring é como começamos. Bold é como nos movemos.",
      paragraphs: [
        "Acreditamos que o design é uma ferramenta de mudança — e a estratégia é o terreno onde ele cresce.",
        "Pensamos com clareza. Agimos com intenção. Buscamos qualidade com disciplina, porque os detalhes importam.",
        "Somos pensadores pragmáticos e solucionadores racionais de problemas. Questionamos, simplificamos e refinamos até que tudo faça sentido — e funcione. Mas acima de tudo, somos apaixonados. Entusiastas. Amamos o que fazemos. E fazemos com alegria.",
        "Projetamos com precisão e construímos com propósito. Não seguimos tendências — criamos clareza. Para marcas prontas para avançar — com energia para crescer e coragem para se destacar.",
        "É isso que significa ser Springbold."
      ]
    }
  };

  const langSelector = document.getElementById("lang-select");

  const updateLanguage = (lang) => {
    const t = translations[lang];
    if (!t) return;

    document.getElementById("main-title").textContent = t.title;

    const subheading = document.querySelector('[data-i18n="subheading"]');
    if (subheading) {
      subheading.innerText = t.subheading || "";
    }

    const paragraphs = document.querySelectorAll(".content-paragraph");
    paragraphs.forEach((p, i) => {
      p.textContent = t.paragraphs[i] || "";
    });
  };

  if (langSelector) {
    langSelector.addEventListener("change", function () {
      updateLanguage(this.value);
      console.log("Language changed to:", this.value);
    });
  }

  if (langSelector && langSelector.value) {
    updateLanguage(langSelector.value);
  } else {
    updateLanguage("en");
  }
});
