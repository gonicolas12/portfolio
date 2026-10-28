// Shared content data for Nicolas Gouy portfolio V2
window.PORTFOLIO = {
  name: { first: "NICOLAS", last: "GOUY" },
  age: 22,
  location: "Toulouse, France",
  email: "nicolasgouy@yahoo.com",
  phone: "07 86 33 41 38",
  github: "gonicolas12",
  githubUrl: "https://github.com/gonicolas12/",
  linkedin: "nicolas-gouy",
  linkedinUrl: "https://www.linkedin.com/in/nicolas-gouy/",
  permis: "B + véhiculé",

  profile: {
    fr: "J'ai 22 ans et je suis Ingénieur IA en alternance chez Gaches Chimie, dans le cadre de mon Mastère Data & IA à Toulouse Ynov Campus. Je conçois des solutions d'IA générative (RAG, agents IA, automatisation) qui simplifient les processus métiers, et je les industrialise jusqu'en production.",
    en: "I'm 22 and an AI Engineer apprentice at Gaches Chimie, as part of my Master's in Data & AI at Toulouse Ynov Campus. I design generative AI solutions (RAG, AI agents, automation) that simplify business processes, and I industrialize them all the way to production."
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
      role: { fr: "INGÉNIEUR IA", en: "AI ENGINEER" },
      company: "GACHES CHIMIE",
      period: { fr: "SEPT. 2026 — 2028", en: "SEP 2026 — 2028" },
      type: { fr: "Alternance · DSI", en: "Apprenticeship · IT Department" },
      desc: {
        fr: "Alternance de 2 ans (M1 et M2) à la DSI, rattaché au Directeur des SI. Recueil des besoins métier, conception d'applications et de flux IA (RAG, agents IA, automatisation), intégration et industrialisation dans le SI, formation des utilisateurs, support de premier niveau et veille technologique.",
        en: "2-year apprenticeship (M1 and M2) in the IT department, reporting to the CIO. Gathering business needs, designing AI applications and flows (RAG, AI agents, automation), integrating and industrializing them into the IS, user training, first-level support and tech watch."
      },
      stack: ["Python", "LLM", "RAG", "AI Agents", "Automation", "Cloud"]
    },
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
      type: { fr: "Stage · Data Office", en: "Internship · Data Office" },
      desc: {
        fr: "Stage de Data Analyst au sein du Data Office. Projets de gouvernance des données (V.R.A.I.), visualisation Power BI, et début du développement d'un modèle IA en Python, qui deviendra My_AI.",
        en: "Data Analyst internship at the Data Office. Data governance projects (V.R.A.I.), Power BI visualization, and the start of an AI model in Python that would grow into My_AI."
      },
      stack: ["Python", "Power BI", "V.R.A.I.", "Data Gov"]
    }
  ],

  education: [
    { school: "TOULOUSE YNOV CAMPUS", degree: { fr: "Bachelor puis Mastère Data & IA", en: "Bachelor's then Master's in Data & AI" }, period: "2023 — 2028" },
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
        fr: "Assistant IA 100% local en Python via Ollama, dans une fenêtre native React + TypeScript en 12 langues, sous Windows, macOS et Linux. Modèle placé automatiquement au plus rapide (GPU intégré, contexte 8 bits), mémoire vectorielle jusqu'à 10M tokens (ChromaDB) avec recherche globale et gestion mémoire, 9 agents spécialisés, recherche web à sources citées, génération d'images locale (ComfyUI / diffusers), génération de documents Word, PDF, PowerPoint et Excel avec édition sur copie et aperçu natif, commandes slash + contexte @codebase, aperçu live des artifacts, tâches planifiées en arrière-plan, pipeline documents (PDF avec OCR, DOCX, PowerPoint, Excel, CSV, code), API REST FastAPI, MCP, voix locale entrée/sortie (faster-whisper + pyttsx3, 99+ langues), accès mobile via Relay (onglets Chat / Agents, code d'accès) et extension VS Code agentique (9 outils workspace, E2EE AES-256-GCM).",
        en: "100% local AI assistant in Python via Ollama, in a native React + TypeScript window in 12 languages, on Windows, macOS and Linux. Model automatically placed for speed (integrated GPU, 8-bit context), vector memory up to 10M tokens (ChromaDB) with global search and memory management, 9 specialized agents, web search with cited sources, local image generation (ComfyUI / diffusers), Word, PDF, PowerPoint and Excel document generation with copy-based editing and native preview, slash commands + @codebase context, live artifacts preview, background scheduled tasks, document pipeline (PDF with OCR, DOCX, PowerPoint, Excel, CSV, code), FastAPI REST API, MCP, local voice in/out (faster-whisper + pyttsx3, 99+ languages), mobile access via Relay (Chat / Agents tabs, access code) and an agentic VS Code extension (9 workspace tools, AES-256-GCM E2EE)."
      },
      stack: ["Python", "Ollama", "ChromaDB", "MCP", "FastAPI", "React", "TypeScript", "faster-whisper", "ComfyUI", "VS Code Extension"],
      metrics: [
        { k: "AGENTS", v: "9" },
        { k: "LOCAL", v: "100%" },
        { k: "TOKENS", v: "10M" }
      ]
    },
    {
      id: "my-os",
      name: "MY_OS",
      tagline: { fr: "Linux avec IA intégrée au système", en: "Linux with system-integrated AI" },
      year: "2026",
      status: "LIVE",
      featured: false,
      repo: "gonicolas12/My_OS",
      desc: {
        fr: "Distribution Linux (base Arch) avec un assistant IA intégré au système, publiée en ISO live et testée de bout en bout en VM (BIOS et UEFI). Raccourci clavier global, pilotage du PC en langage naturel (fichiers, paquets, réglages, processus), contrôle de l'ordinateur à la souris et au clavier (le modèle local voit l'écran), modèle local Qwen via Ollama par défaut + cloud Claude optionnel par requête, en français ou en anglais, moteur de permissions à 4 niveaux de risque fixés par du code statique, confirmations, élévation polkit ponctuelle et journal d'audit SQLite.",
        en: "Arch-based Linux distribution with a system-integrated AI assistant, shipped as a live ISO and tested end to end in a VM (BIOS and UEFI). Global keyboard shortcut, natural language PC control (files, packages, settings, processes), computer control with the mouse and keyboard (the local model sees the screen), local Qwen model via Ollama by default + optional per-request Claude cloud, in English or French, 4-level permission engine with risk set by static code, confirmations, one-off polkit elevation and an SQLite audit log."
      },
      stack: ["Arch Linux", "Python", "Ollama", "Qwen", "Claude", "PySide6", "systemd", "polkit", "SQLite"],
      metrics: [
        { k: "LOCAL", v: "100%" },
        { k: "RISK LEVELS", v: "4" },
        { k: "VM SCENARIOS", v: "42" }
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
