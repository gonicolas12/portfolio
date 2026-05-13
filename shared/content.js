// Shared content data for Nicolas Gouy portfolio V2
window.PORTFOLIO = {
  name: { first: "NICOLAS", last: "GOUY" },
  age: 21,
  location: "Toulouse, France",
  email: "nicolasgouy@yahoo.com",
  phone: "07 86 33 41 38",
  github: "gonicolas12",
  githubUrl: "https://github.com/gonicolas12/",
  linkedin: "nicolas-gouy",
  linkedinUrl: "https://www.linkedin.com/in/nicolas-gouy/",
  permis: "B + véhiculé",

  profile: {
    fr: "J'ai 21 ans, je suis à la recherche d'une alternance en data / IA pour mettre en pratique mes compétences en analyse de données et intelligence artificielle. Curieux et motivé, je souhaite contribuer activement à des projets innovants tout en enrichissant mon expérience professionnelle.",
    en: "I'm 21 and looking for a data / AI apprenticeship to put my skills in data analysis and artificial intelligence into practice. Curious and motivated, I want to actively contribute to innovative projects while growing my professional experience."
  },

  manifesto: {
    fr: [
      { t: "Je construis des", p: false },
      { t: "systèmes", p: true },
      { t: "qui comprennent,", p: false },
      { t: "raisonnent", p: false },
      { t: "et livrent.", p: true }
    ],
    en: [
      { t: "I build", p: false },
      { t: "systems", p: true },
      { t: "that understand,", p: false },
      { t: "reason", p: false },
      { t: "and ship.", p: true }
    ]
  },

  experiences: [
    {
      role: { fr: "IS PROJECT MANAGER — DAIS", en: "IS PROJECT MANAGER — DAIS" },
      company: "PIERRE FABRE",
      period: { fr: "SEPT. 2025 — SEPT. 2026", en: "SEP 2025 — SEP 2026" },
      type: { fr: "Alternance · Data / IA", en: "Apprenticeship · Data / AI" },
      desc: {
        fr: "Pilotage de projets Data & IA, collaboration avec les équipes Data Engineering et métiers, industrialisation de solutions IA génératives, amélioration des outils BI (Power BI, YOOI).",
        en: "Leading Data & AI projects, collaborating with Data Engineering and business teams, industrializing generative AI solutions, improving BI tools (Power BI, YOOI)."
      },
      stack: ["Power BI", "YOOI", "GenAI", "Data Gov"]
    },
    {
      role: { fr: "DATA ANALYST", en: "DATA ANALYST" },
      company: "PIERRE FABRE",
      period: { fr: "JUIN — AOÛT 2025", en: "JUN — AUG 2025" },
      type: { fr: "Stage · DAIS", en: "Internship · DAIS" },
      desc: {
        fr: "Stage de Data Analyst au sein du DAIS. Projets de gouvernance des données (V.R.A.I.), visualisation Power BI, développement d'un modèle IA en Python.",
        en: "Data Analyst internship in the DAIS. Data governance projects (V.R.A.I.), Power BI visualization, development of an AI model in Python."
      },
      stack: ["Python", "Power BI", "V.R.A.I.", "Data Gov"]
    }
  ],

  education: [
    { school: "TOULOUSE YNOV CAMPUS", degree: { fr: "Bachelor & Master Data / IA", en: "Bachelor & Master Data / AI" }, period: "2023 — 2028" },
    { school: "EPITECH TOULOUSE", degree: { fr: "Pré-MSc Informatique", en: "Pre-MSc Computer Science" }, period: "2022 — 2023" },
    { school: "LYCÉE PIERRE-PAUL RIQUET", degree: { fr: "Baccalauréat STI2D — SIN", en: "STI2D Baccalaureate — SIN" }, period: "2022" }
  ],

  skills: {
    languages: ["C", "Python", "Golang", "Java", "JavaScript", "HTML", "CSS"],
    databases: ["MySQL", "SQLite", "HeidiSQL", "ChromaDB"],
    tools: ["Power BI", "Ollama", "Git", "MCP"],
    soft: {
      fr: ["Communication", "Travail en équipe", "Autonomie", "Adaptabilité", "Créativité"],
      en: ["Communication", "Teamwork", "Autonomy", "Adaptability", "Creativity"]
    }
  },

  languages: [
    { name: { fr: "Français", en: "French" }, level: { fr: "Natif · Projet Voltaire", en: "Native · Projet Voltaire" }, dots: 5 },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Cambridge English · B2", en: "Cambridge English · B2" }, dots: 4 },
    { name: { fr: "Italien", en: "Italian" }, level: { fr: "Notions de base", en: "Basic notions" }, dots: 2 }
  ],

  interests: {
    fr: ["Jeux vidéo", "Batterie", "Piano", "Musculation", "Tennis", "Voyages"],
    en: ["Video games", "Drums", "Piano", "Strength training", "Tennis", "Travel"]
  },

  projects: [
    {
      id: "my-ai",
      name: "MY_AI",
      tagline: { fr: "Assistant IA 100% local", en: "100% local AI assistant" },
      year: "2025 — 2026",
      status: "LIVE",
      featured: true,
      repo: "gonicolas12/My_AI",
      desc: {
        fr: "Assistant IA 100% local en Python via Ollama. Mémoire vectorielle jusqu'à 10M tokens (ChromaDB), 9 agents spécialisés, pipeline documents (PDF, DOCX, Excel, CSV, code), API REST FastAPI, MCP, saisie vocale locale (faster-whisper, 99+ langues), accès mobile via Relay et extension VS Code agentique (9 outils workspace, E2EE AES-256-GCM).",
        en: "100% local AI assistant in Python via Ollama. Vector memory up to 10M tokens (ChromaDB), 9 specialized agents, document pipeline (PDF, DOCX, Excel, CSV, code), FastAPI REST API, MCP, local voice input (faster-whisper, 99+ languages), mobile access via Relay and an agentic VS Code extension (9 workspace tools, AES-256-GCM E2EE)."
      },
      stack: ["Python", "Ollama", "ChromaDB", "MCP", "FastAPI", "faster-whisper", "VS Code Extension"],
      metrics: [
        { k: "AGENTS", v: "9" },
        { k: "LOCAL", v: "100%" },
        { k: "TOKENS", v: "10M" }
      ]
    }
  ]
};

// Language + Mode state
window.PORTFOLIO_STATE = {
  lang: localStorage.getItem('ng-lang') || 'fr',
  mode: localStorage.getItem('ng-mode') || 'rec'
};
window.setLang = (l) => {
  window.PORTFOLIO_STATE.lang = l;
  localStorage.setItem('ng-lang', l);
  document.documentElement.setAttribute('data-lang', l);
  document.querySelectorAll('[data-fr]').forEach(el => {
    const v = l === 'fr' ? el.dataset.fr : el.dataset.en;
    if (v == null) return;
    // If the string contains HTML tags, use innerHTML so <strong>, <em>, etc. render properly.
    if (/<[a-z][\s\S]*>/i.test(v)) {
      el.innerHTML = v;
    } else {
      el.textContent = v;
    }
  });
  document.querySelectorAll('[data-fr-html]').forEach(el => {
    el.innerHTML = l === 'fr' ? el.dataset.frHtml : el.dataset.enHtml;
  });
  document.querySelectorAll('.btn-lang').forEach(b => {
    b.classList.toggle('active', b.dataset.l === l);
  });
  if (window.onLangChange) window.onLangChange(l);
};
window.setMode = (m) => {
  window.PORTFOLIO_STATE.mode = m;
  localStorage.setItem('ng-mode', m);
  document.body.classList.remove('mode-rec', 'mode-dev');
  document.body.classList.add('mode-' + m);
  document.querySelectorAll('.btn-mode').forEach(b => {
    b.classList.toggle('active', b.dataset.m === m);
  });
};
