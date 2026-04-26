// Content dictionary — EN / ES
// All visible text lives here; nothing user-facing is hardcoded in components.

const CONTENT = {
  en: {
    meta: {
      issue: "Profile / Nº 01",
      date: "Barcelona — April 2026",
      kicker: "A Profile",
      photoCaption: "Jean Carlo Vallejos — photographed in Barcelona, March 2026.",
      langLabel: "Language",
    },
    nav: {
      items: [
        { id: "profile", label: "Profile" },
        { id: "tracks", label: "Two Tracks" },
        { id: "role", label: "Current Role" },
        { id: "experience", label: "Experience" },
        { id: "domains", label: "Domains" },
        { id: "stories", label: "Selected Work" },
        { id: "academic", label: "Academic" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Download CV",
    },
    hero: {
      kicker: "Profile / Nº 01",
      location: "Barcelona · ES",
      headline: "Architecting enterprise Data & AI systems from strategy to production.",
      name: "Jean Carlo Vallejos",
      role: "Chief AI & Data Architect",
      standfirst:
        "Chief AI & Data Architect designing enterprise-grade Data, Analytics and GenAI architectures across cloud ecosystems, with focus on banking, governance, scalability and production delivery.",
      credibility: "AWS · GenAI · Banking · Data Architecture · Professor",
      meta: [
        { k: "Based in", v: "Barcelona, ES" },
        { k: "Practice", v: "Enterprise Data & AI" },
        { k: "Teaching", v: "Applied AI · Master & Postgraduate" },
        { k: "Languages", v: "English · Español · Português" },
      ],
    },
    profile: {
      number: "Nº 02",
      title: "Profile",
      lead: "An executive summary.",
      body: [
        "Chief AI & Data Architect with more than a decade designing the data and intelligence backbone of enterprises in banking, telecommunications, retail and the public sector. The work spans the full arc — from cloud foundation and data platform modernization, through governance and BI, to MLOps, LLMOps and the operational adoption of generative AI.",
        "The lens is consistently architectural. Strategy translated into reference architectures; reference architectures translated into systems people actually run, on AWS, Azure and modern data stacks. Programmes that survive the second year because they were designed to.",
        "In parallel, an academic practice — teaching at master and postgraduate level, mentoring data and AI engineers, and writing for practitioners. The two tracks are the same craft seen from two altitudes: how enterprises adopt AI, and how the next generation of architects learn to build it.",
      ],
    },
    tracks: {
      number: "Nº 03",
      title: "Two tracks. One architecture mindset.",
      lead: "Enterprise practice and academic practice, held in one hand.",
      pro: {
        eyebrow: "Professional Track",
        title: "Enterprise AI & Data Architecture",
        body: [
          "Architecture for regulated environments — banking, public sector, large-scale operations. Cloud-native data platforms on AWS and Azure, lakehouses, governance frameworks, BI modernization.",
          "End-to-end ownership: from C-level alignment and TOGAF-grade reference architectures, through team leadership, vendor and partner orchestration, to MLOps, LLMOps and the production adoption of generative AI.",
        ],
        bullets: [
          "Enterprise data platforms · AWS & Azure",
          "GenAI strategy & LLMOps in production",
          "Data governance, lineage, BI modernization",
          "C-level advisory and architecture leadership",
        ],
      },
      aca: {
        eyebrow: "Academic Track",
        title: "Teaching, Mentoring & Applied AI Education",
        body: [
          "Lecturer and mentor in applied AI, data engineering and modern architectures — at master and postgraduate level, with a focus on what students will actually build the day they leave the classroom.",
          "Curriculum design grounded in real enterprise practice. Mentoring of junior architects and data engineers across the EU and LATAM. Talks, workshops and writing for practitioner audiences.",
        ],
        bullets: [
          "Master & postgraduate lectureship",
          "Curriculum design — applied AI & data",
          "Mentoring of architects and engineers",
          "Talks, workshops, practitioner writing",
        ],
      },
      convergence:
        "The two tracks are not two careers. The architecture I teach is the architecture I ship — and what students press hardest on is what tomorrow's enterprise systems will need to answer for.",
    },
    role: {
      number: "Nº 04",
      title: "Current Role",
      lead: "Where the work happens today.",
      org: "Confidential — Enterprise Banking & AI Platform",
      title2: "Chief AI & Data Architect",
      period: "2024 — Present · Barcelona",
      summary:
        "Leading the enterprise AI & Data architecture function: cloud foundation on AWS, governed data platform, GenAI adoption framework, and the operating model that connects all three. Direct accountability to the executive committee.",
      points: [
        "Defined the multi-year AI & Data target architecture and its phased delivery roadmap.",
        "Built the GenAI adoption framework — from sandboxing to LLMOps and human oversight.",
        "Modernized BI and data governance across business units in a regulated environment.",
        "Led a multi-disciplinary architecture chapter — engineering, governance, ML, GenAI.",
      ],
    },
    experience: {
      number: "Nº 05",
      title: "Selected Experience",
      lead: "A condensed timeline.",
      items: [
        {
          year: "2024 — Now",
          org: "Enterprise Banking · Confidential",
          role: "Chief AI & Data Architect",
          note: "Cloud, data platform, GenAI adoption, governance.",
        },
        {
          year: "2022 — 2024",
          org: "Tier-1 Consulting · EU & LATAM",
          role: "Principal Data & AI Architect",
          note: "Lakehouse modernization, MLOps, LLM platform foundations.",
        },
        {
          year: "2019 — 2022",
          org: "Telecommunications & Retail",
          role: "Lead Data Architect",
          note: "AWS data platform, BI modernization, analytics products.",
        },
        {
          year: "2016 — 2019",
          org: "Public Sector & Banking",
          role: "Senior Data Engineer / Architect",
          note: "Data warehouse modernization, regulatory reporting, governance.",
        },
        {
          year: "2013 — 2016",
          org: "Software & Platform Engineering",
          role: "Data Engineer",
          note: "Data pipelines, integration, early cloud adoption.",
        },
      ],
    },
    domains: {
      number: "Nº 06",
      title: "Architecture Domains",
      lead: "The territory the practice covers.",
      items: [
        {
          k: "Cloud & Data Platform",
          v: "AWS and Azure foundations, lakehouses, streaming, the production-grade data plane.",
        },
        {
          k: "Generative AI & LLMOps",
          v: "Adoption frameworks, RAG architectures, evaluation, guardrails, human-in-the-loop.",
        },
        {
          k: "MLOps",
          v: "Model lifecycle, feature platforms, monitoring, the path from notebook to production.",
        },
        {
          k: "Data Governance",
          v: "Lineage, quality, catalog, regulatory alignment, data contracts and ownership.",
        },
        {
          k: "BI Modernization",
          v: "Semantic layers, self-service analytics, decommissioning legacy reporting estates.",
        },
        {
          k: "Architecture Leadership",
          v: "Reference architectures, TOGAF-grade artifacts, executive advisory, chapter design.",
        },
      ],
    },
    stories: {
      number: "Nº 07",
      title: "Selected Architecture Stories",
      lead: "Three engagements, told briefly.",
      items: [
        {
          tag: "Banking · 2024",
          title: "A GenAI adoption framework for a regulated bank.",
          body: "Designed the end-to-end framework for production adoption of large language models — sandbox, evaluation, LLMOps, human oversight and the governance contract with risk and compliance.",
        },
        {
          tag: "Public sector · 2022",
          title: "Lakehouse modernization across business units.",
          body: "Replaced a fragmented warehouse estate with a governed lakehouse. New BI semantic layer, data contracts between domains, measurable reduction of reporting time across the organization.",
        },
        {
          tag: "Telco · 2020",
          title: "An analytics product platform on AWS.",
          body: "Architected a multi-tenant analytics product on AWS — streaming ingestion, governed marts, a self-service BI surface, and the operating model that allowed product teams to ship without waiting on central engineering.",
        },
      ],
    },
    academic: {
      number: "Nº 08",
      title: "Academic Profile",
      lead: "Teaching, mentoring, writing.",
      body: [
        "Lecturer at master and postgraduate level on applied AI, data engineering and modern enterprise architectures. Curriculum designed alongside enterprise practice, not in isolation from it.",
        "Mentor to data and AI engineers across the EU and LATAM — focused on architectural judgment rather than tooling fluency. Frequent speaker at practitioner events and contributor to applied-AI publications.",
      ],
      reading: [
        { y: "2025", t: "Applied Generative AI — Master programme" },
        { y: "2024", t: "Data & AI Architecture — Postgraduate course" },
        { y: "2023", t: "Cloud Data Platforms — Postgraduate module" },
        { y: "2022", t: "MLOps in Practice — Executive workshop series" },
      ],
    },
    education: {
      number: "Nº 09",
      title: "Education",
      lead: "",
      items: [
        { y: "M.Sc.", t: "Artificial Intelligence", o: "European university · Spain" },
        { y: "M.Sc.", t: "Data Science & Big Data", o: "European university · Spain" },
        { y: "B.Eng.", t: "Computer Engineering", o: "Latin America" },
        { y: "Cert.", t: "AWS Solutions Architect · Professional", o: "Amazon Web Services" },
        { y: "Cert.", t: "TOGAF — Enterprise Architecture", o: "The Open Group" },
      ],
    },
    stack: {
      number: "Nº 10",
      title: "Tech Stack",
      lead: "Tools the practice runs on, not a wishlist.",
      groups: [
        { k: "Cloud", v: "AWS · Azure · Terraform · Kubernetes" },
        { k: "Data Platform", v: "Snowflake · Databricks · BigQuery · dbt · Airflow" },
        { k: "Streaming & Ingest", v: "Kafka · Kinesis · Debezium · Flink" },
        { k: "ML & GenAI", v: "PyTorch · LangChain · LlamaIndex · MLflow · Vertex AI · Bedrock" },
        { k: "Governance & BI", v: "Collibra · Alation · Power BI · Tableau · Looker" },
        { k: "Languages", v: "Python · SQL · Scala · TypeScript" },
      ],
    },
    contact: {
      number: "Nº 11",
      title: "Contact",
      lead: "For consulting engagements, advisory, talks and lectureships.",
      lines: [
        { k: "Email", v: "hello@jcjvp.com", href: "mailto:hello@jcjvp.com" },
        { k: "LinkedIn", v: "linkedin.com/in/jcjvp", href: "https://linkedin.com/in/jcjvp" },
        { k: "GitHub", v: "github.com/jcjvp", href: "https://github.com/jcjvp" },
        { k: "CV", v: "Download — PDF", href: "#" },
      ],
      note: "Based in Barcelona. Engagements across the EU and LATAM.",
    },
    footer: {
      colophon:
        "Set in Newsreader, Instrument Sans and JetBrains Mono. Photographed in Barcelona, March 2026.",
      rights: "© 2026 Jean Carlo Vallejos. All rights reserved.",
    },
  },

  es: {
    meta: {
      issue: "Perfil / Nº 01",
      date: "Barcelona — Abril 2026",
      kicker: "Un Perfil",
      photoCaption: "Jean Carlo Vallejos — fotografiado en Barcelona, marzo de 2026.",
      langLabel: "Idioma",
    },
    nav: {
      items: [
        { id: "profile", label: "Perfil" },
        { id: "tracks", label: "Dos Perfiles" },
        { id: "role", label: "Rol Actual" },
        { id: "experience", label: "Experiencia" },
        { id: "domains", label: "Dominios" },
        { id: "stories", label: "Trabajo Seleccionado" },
        { id: "academic", label: "Académico" },
        { id: "contact", label: "Contacto" },
      ],
      cta: "Descargar CV",
    },
    hero: {
      kicker: "Perfil / Nº 01",
      location: "Barcelona · ES",
      headline: "Arquitectando sistemas empresariales de Datos e IA, desde la estrategia hasta producción.",
      name: "Jean Carlo Vallejos",
      role: "Chief AI & Data Architect",
      standfirst:
        "Chief AI & Data Architect especializado en arquitecturas empresariales de Datos, Analítica e IA Generativa sobre ecosistemas cloud, con foco en banca, gobierno, escalabilidad y paso a producción.",
      credibility: "AWS · GenAI · Banca · Arquitectura de Datos · Profesor",
      meta: [
        { k: "Base", v: "Barcelona, ES" },
        { k: "Práctica", v: "Datos e IA empresarial" },
        { k: "Docencia", v: "IA Aplicada · Máster y Postgrado" },
        { k: "Idiomas", v: "Español · English · Português" },
      ],
    },
    profile: {
      number: "Nº 02",
      title: "Perfil",
      lead: "Un resumen ejecutivo.",
      body: [
        "Chief AI & Data Architect con más de una década diseñando la columna vertebral de datos e inteligencia de empresas en banca, telecomunicaciones, retail y sector público. La práctica abarca el arco completo — desde la base cloud y la modernización de plataformas de datos, pasando por gobierno del dato y BI, hasta MLOps, LLMOps y la adopción operativa de IA generativa.",
        "La mirada es siempre arquitectónica. Estrategia traducida en arquitecturas de referencia; arquitecturas de referencia traducidas en sistemas que la gente realmente opera, sobre AWS, Azure y stacks modernos de datos. Programas que sobreviven al segundo año porque fueron diseñados para hacerlo.",
        "En paralelo, una práctica académica — docencia a nivel máster y postgrado, mentoría de ingenieros de datos e IA, y escritura dirigida a profesionales. Los dos perfiles son el mismo oficio observado a dos altitudes: cómo las empresas adoptan IA, y cómo aprende a construirla la siguiente generación de arquitectos.",
      ],
    },
    tracks: {
      number: "Nº 03",
      title: "Dos perfiles. Una misma mentalidad arquitectónica.",
      lead: "Práctica empresarial y práctica académica, sostenidas en una misma mano.",
      pro: {
        eyebrow: "Perfil Profesional",
        title: "Arquitectura empresarial de Datos e IA",
        body: [
          "Arquitectura para entornos regulados — banca, sector público, operaciones a gran escala. Plataformas de datos cloud-native sobre AWS y Azure, lakehouses, marcos de gobierno, modernización de BI.",
          "Responsabilidad de extremo a extremo: desde la alineación con C-level y arquitecturas de referencia con calidad TOGAF, pasando por liderazgo de equipos, orquestación de proveedores y partners, hasta MLOps, LLMOps y la adopción en producción de IA generativa.",
        ],
        bullets: [
          "Plataformas empresariales de datos · AWS y Azure",
          "Estrategia de IA Generativa y LLMOps en producción",
          "Gobierno del dato, linaje, modernización de BI",
          "Asesoría a C-level y liderazgo de arquitectura",
        ],
      },
      aca: {
        eyebrow: "Perfil Académico",
        title: "Docencia, mentoría y educación aplicada en IA",
        body: [
          "Docente y mentor en IA aplicada, ingeniería de datos y arquitecturas modernas — a nivel máster y postgrado, con foco en lo que el alumnado va a construir el día siguiente al aula.",
          "Diseño curricular anclado en la práctica empresarial real. Mentoría de arquitectos junior e ingenieros de datos en la UE y LATAM. Charlas, talleres y publicaciones para audiencias profesionales.",
        ],
        bullets: [
          "Docencia en máster y postgrado",
          "Diseño curricular — IA aplicada y datos",
          "Mentoría de arquitectos e ingenieros",
          "Charlas, talleres y publicaciones técnicas",
        ],
      },
      convergence:
        "Los dos perfiles no son dos carreras. La arquitectura que enseño es la arquitectura que entrego — y aquello sobre lo que el alumnado más presiona es lo que tendrán que responder los sistemas empresariales del mañana.",
    },
    role: {
      number: "Nº 04",
      title: "Rol Actual",
      lead: "Dónde sucede hoy el trabajo.",
      org: "Confidencial — Banca empresarial y plataforma de IA",
      title2: "Chief AI & Data Architect",
      period: "2024 — Presente · Barcelona",
      summary:
        "Liderando la función de arquitectura empresarial de IA y Datos: base cloud sobre AWS, plataforma de datos gobernada, marco de adopción de IA generativa y el modelo operativo que conecta a los tres. Reporte directo al comité ejecutivo.",
      points: [
        "Definición de la arquitectura objetivo plurianual de IA y Datos y su hoja de ruta por fases.",
        "Construcción del marco de adopción de IA Generativa — desde el sandbox hasta LLMOps y supervisión humana.",
        "Modernización de BI y gobierno del dato a través de líneas de negocio en un entorno regulado.",
        "Liderazgo de un capítulo multidisciplinar de arquitectura — ingeniería, gobierno, ML, GenAI.",
      ],
    },
    experience: {
      number: "Nº 05",
      title: "Experiencia Seleccionada",
      lead: "Una línea de tiempo condensada.",
      items: [
        {
          year: "2024 — Hoy",
          org: "Banca empresarial · Confidencial",
          role: "Chief AI & Data Architect",
          note: "Cloud, plataforma de datos, adopción de IA generativa, gobierno.",
        },
        {
          year: "2022 — 2024",
          org: "Consultora Tier-1 · UE y LATAM",
          role: "Principal Data & AI Architect",
          note: "Modernización de lakehouse, MLOps, fundamentos de plataforma LLM.",
        },
        {
          year: "2019 — 2022",
          org: "Telecomunicaciones y Retail",
          role: "Lead Data Architect",
          note: "Plataforma de datos en AWS, modernización de BI, productos analíticos.",
        },
        {
          year: "2016 — 2019",
          org: "Sector público y banca",
          role: "Senior Data Engineer / Architect",
          note: "Modernización del data warehouse, reporte regulatorio, gobierno.",
        },
        {
          year: "2013 — 2016",
          org: "Ingeniería de software y plataformas",
          role: "Data Engineer",
          note: "Pipelines de datos, integración, primera adopción cloud.",
        },
      ],
    },
    domains: {
      number: "Nº 06",
      title: "Dominios de Arquitectura",
      lead: "El territorio que cubre la práctica.",
      items: [
        {
          k: "Cloud y Plataforma de Datos",
          v: "Bases AWS y Azure, lakehouses, streaming, el plano de datos a nivel de producción.",
        },
        {
          k: "IA Generativa y LLMOps",
          v: "Marcos de adopción, arquitecturas RAG, evaluación, guardrails, humano en el bucle.",
        },
        {
          k: "MLOps",
          v: "Ciclo de vida del modelo, feature platforms, monitorización, el camino del notebook a producción.",
        },
        {
          k: "Gobierno del Dato",
          v: "Linaje, calidad, catálogo, alineación regulatoria, contratos de datos y propiedad.",
        },
        {
          k: "Modernización de BI",
          v: "Capas semánticas, analítica self-service, retirada de estados de reporte heredados.",
        },
        {
          k: "Liderazgo de Arquitectura",
          v: "Arquitecturas de referencia, artefactos con calidad TOGAF, asesoría ejecutiva, diseño de chapter.",
        },
      ],
    },
    stories: {
      number: "Nº 07",
      title: "Historias de Arquitectura Seleccionadas",
      lead: "Tres compromisos, contados de forma breve.",
      items: [
        {
          tag: "Banca · 2024",
          title: "Un marco de adopción de IA generativa para un banco regulado.",
          body: "Diseño del marco extremo a extremo para la adopción en producción de modelos de lenguaje — sandbox, evaluación, LLMOps, supervisión humana y el contrato de gobierno con riesgo y cumplimiento.",
        },
        {
          tag: "Sector público · 2022",
          title: "Modernización a lakehouse en líneas de negocio.",
          body: "Sustitución de un estado de almacén fragmentado por un lakehouse gobernado. Nueva capa semántica de BI, contratos de datos entre dominios, reducción medible del tiempo de reporte en toda la organización.",
        },
        {
          tag: "Telco · 2020",
          title: "Una plataforma de producto analítico sobre AWS.",
          body: "Arquitectura de un producto analítico multi-tenant en AWS — ingestión por streaming, marts gobernados, una superficie de BI self-service y el modelo operativo que permitió a los equipos de producto entregar sin esperar a la ingeniería central.",
        },
      ],
    },
    academic: {
      number: "Nº 08",
      title: "Perfil Académico",
      lead: "Docencia, mentoría, escritura.",
      body: [
        "Docente a nivel máster y postgrado en IA aplicada, ingeniería de datos y arquitecturas empresariales modernas. Currículo diseñado junto a la práctica empresarial, no aislado de ella.",
        "Mentor de ingenieros de datos e IA en la UE y LATAM — con foco en el criterio arquitectónico, no en la fluidez con herramientas. Ponente frecuente en eventos profesionales y autor en publicaciones de IA aplicada.",
      ],
      reading: [
        { y: "2025", t: "IA Generativa Aplicada — Programa de máster" },
        { y: "2024", t: "Arquitectura de Datos e IA — Curso de postgrado" },
        { y: "2023", t: "Plataformas de Datos en Cloud — Módulo de postgrado" },
        { y: "2022", t: "MLOps en la práctica — Serie ejecutiva de talleres" },
      ],
    },
    education: {
      number: "Nº 09",
      title: "Formación",
      lead: "",
      items: [
        { y: "M.Sc.", t: "Inteligencia Artificial", o: "Universidad europea · España" },
        { y: "M.Sc.", t: "Ciencia de Datos y Big Data", o: "Universidad europea · España" },
        { y: "Ing.", t: "Ingeniería Informática", o: "Latinoamérica" },
        { y: "Cert.", t: "AWS Solutions Architect · Professional", o: "Amazon Web Services" },
        { y: "Cert.", t: "TOGAF — Arquitectura Empresarial", o: "The Open Group" },
      ],
    },
    stack: {
      number: "Nº 10",
      title: "Stack Técnico",
      lead: "Herramientas con las que opera la práctica, no una lista de deseos.",
      groups: [
        { k: "Cloud", v: "AWS · Azure · Terraform · Kubernetes" },
        { k: "Plataforma de Datos", v: "Snowflake · Databricks · BigQuery · dbt · Airflow" },
        { k: "Streaming e Ingesta", v: "Kafka · Kinesis · Debezium · Flink" },
        { k: "ML e IA Generativa", v: "PyTorch · LangChain · LlamaIndex · MLflow · Vertex AI · Bedrock" },
        { k: "Gobierno y BI", v: "Collibra · Alation · Power BI · Tableau · Looker" },
        { k: "Lenguajes", v: "Python · SQL · Scala · TypeScript" },
      ],
    },
    contact: {
      number: "Nº 11",
      title: "Contacto",
      lead: "Para encargos de consultoría, asesoría, ponencias y docencia.",
      lines: [
        { k: "Email", v: "hello@jcjvp.com", href: "mailto:hello@jcjvp.com" },
        { k: "LinkedIn", v: "linkedin.com/in/jcjvp", href: "https://linkedin.com/in/jcjvp" },
        { k: "GitHub", v: "github.com/jcjvp", href: "https://github.com/jcjvp" },
        { k: "CV", v: "Descargar — PDF", href: "#" },
      ],
      note: "Con base en Barcelona. Encargos en la UE y LATAM.",
    },
    footer: {
      colophon:
        "Tipografías Newsreader, Instrument Sans y JetBrains Mono. Fotografiado en Barcelona, marzo de 2026.",
      rights: "© 2026 Jean Carlo Vallejos. Todos los derechos reservados.",
    },
  },
};

window.CONTENT = CONTENT;
