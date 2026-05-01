// Content dictionary — EN / ES
// All visible text lives here; nothing user-facing is hardcoded in components.

export const CONTENT = {
  en: {
    meta: {
      wordmark: "JCJVP",
      homeLabel: "JCJVP — Jean Carlo Jesus Vallejos Pongo",
      issue: "Profile / Nº 01",
      date: "Barcelona — April 2026",
      kicker: "A Profile",
      photoCaption: "Jean Carlo Jesus Vallejos Pongo — photographed in Helsinki, Finland, October 2025.",
      langLabel: "Language",
      langOptions: [
        { code: "en", label: "EN" },
        { code: "es", label: "ES" },
      ],
      navLabel: "Sections",
    },
    nav: {
      items: [
        { id: "profile", label: "Profile" },
        { id: "tracks", label: "Tracks" },
        { id: "experience", label: "Experience" },
        { id: "stories", label: "Work" },
        { id: "academic", label: "Academic" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Download CV",
      ctaHref: "/cv-jean-carlo-vallejos.pdf",
    },
    hero: {
      kicker: "Profile / Nº 01",
      location: "Barcelona · ES",
      headline: "Architecting enterprise Data & AI platforms where strategy, governance and production delivery meet.",
      name: "Jean Carlo Jesus Vallejos Pongo",
      role: "Chief AI & Data Architect",
      standfirst:
        "Chief AI & Data Architect leading enterprise Data, Analytics and GenAI architecture across complex enterprise environments, governed data platforms, conversational AI and agentic workflows.",
      credibility: "AWS · GenAI · Enterprise Data & AI · Architecture · Professor",
      imageAlt:
        "Jean Carlo Jesus Vallejos Pongo seated outdoors in Barcelona, presented as an enterprise AI and data architecture profile.",
      meta: [
        { k: "Current", v: "Chief AI Architect · NTT DATA" },
        { k: "Based in", v: "Barcelona, ES" },
        { k: "Focus", v: "Enterprise Data & AI · Cloud · Governance · GenAI" },
        { k: "Teaching", v: "UPC · UB · USMP" },
        { k: "Languages", v: "English · Spanish" },
      ],
    },
    profile: {
      number: "Nº 02",
      title: "Profile",
      lead: "An executive summary.",
      body: [
        "Chief AI & Data Architect with a career spanning enterprise architecture, cloud data platforms, analytics modernization and applied AI. The work sits where executive strategy becomes production systems: reference architectures, governance models, reusable blueprints and delivery standards that teams can operate.",
        "The formal current role is Chief AI Architect at NTT DATA, following leadership roles as Head of Data & AI Practice at Capitole and Data & AI Lead at Kyndryl. The consistent thread is enterprise-grade delivery across AWS, Azure, GCP, Snowflake, Databricks and modern lakehouse architectures: secure, compliant, scalable and cost-aware.",
        "Alongside consulting and architecture leadership, an academic practice connects the work back to teaching and mentoring. Courses at Universidad San Martín de Porres, Universitat Politècnica de Catalunya and Universitat de Barcelona cover AI, Big Data, BI, data science, cloud ecosystems and responsible technology adoption.",
      ],
    },
    help: {
      number: "Nº 03",
      title: "Where I can help",
      lead: "Architecture, strategy and enablement for enterprise Data & AI.",
      closing:
        "I work best where technology decisions need to be technically sound, business-aware and production-minded.",
      items: [
        {
          title: "Enterprise GenAI Architecture",
          body: "Designing governed GenAI architectures that connect LLMs, enterprise data, orchestration, guardrails and observability.",
          tags: ["LLMs", "RAG", "Agents", "Guardrails"],
        },
        {
          title: "Cloud Data Platforms",
          body: "Modern data platforms across lakehouse, data mesh and cloud-native analytics patterns.",
          tags: ["AWS", "Lakehouse", "Data Mesh", "Analytics"],
        },
        {
          title: "AI Governance & Production Readiness",
          body: "Turning AI ideas into secure, auditable and production-oriented enterprise systems.",
          tags: ["Governance", "Security", "Auditability", "FinOps"],
        },
        {
          title: "BI & Analytics Modernization",
          body: "Modernizing BI ecosystems, semantic layers and analytics experiences with cloud and AI-assisted approaches.",
          tags: ["BI", "QuickSight", "Semantic Layer", "Migration"],
        },
        {
          title: "Executive & Technical Advisory",
          body: "Helping leadership and technical teams align architecture decisions with business outcomes.",
          tags: ["Strategy", "Architecture", "Stakeholders", "Delivery"],
        },
        {
          title: "Teaching, Talks & Workshops",
          body: "Designing practical learning experiences around Big Data, Cloud, AI, BI and emerging technologies.",
          tags: ["Teaching", "Workshops", "Mentoring", "AI Literacy"],
        },
      ],
    },
    tracks: {
      number: "Nº 04",
      title: "Two tracks. One architecture mindset.",
      lead: "Enterprise practice and academic practice, held in one hand.",
      pro: {
        eyebrow: "Professional Track",
        title: "Enterprise AI & Data Architecture",
        body: [
        "Architecture leadership across complex enterprise, regulated and data-intensive environments. The scope spans platform strategy, operating model, data governance, BI modernization, cloud architecture, GenAI adoption and delivery enablement.",
          "The role is not only to design platforms, but to make them repeatable: standards, patterns, training, mentoring and alliances that allow organizations to scale Data & AI capability beyond a single project.",
        ],
        bullets: [
          "NTT DATA · Capitole · Kyndryl · Delosi · Globant",
          "AWS, Azure, GCP, Snowflake and Databricks platforms",
          "GenAI, agentic workflows, RAG and LLM-enabled products",
          "Practice leadership, executive advisory and delivery governance",
        ],
      },
      aca: {
        eyebrow: "Academic Track",
        title: "Teaching, Mentoring & Applied AI Education",
        body: [
          "Professor and mentor across undergraduate, postgraduate and professional programs in AI, Big Data, Business Intelligence, Data Science, Blockchain and digital transformation.",
          "Academic work is grounded in production experience: students work with real use cases, cloud patterns, governance constraints, AI ethics and modern architectures such as lakehouse, data mesh and Fabric.",
        ],
        bullets: [
          "Associate Professor · Universidad San Martín de Porres",
          "Professor Part-time · Universitat Politècnica de Catalunya",
          "Professor Part-time · Universitat de Barcelona",
          "Thesis mentoring, curriculum design and executive enablement",
        ],
      },
      convergence:
        "The same judgment connects both tracks: how to make AI and data systems useful, governable and teachable enough to survive beyond the first demo.",
    },
    role: {
      number: "Nº 05",
      title: "Current Role",
      lead: "Where the work happens today.",
      org: "NTT DATA — Barcelona, Spain",
      title2: "Chief AI Architect",
      period: "Jan 2026 — Present",
      summary:
        "Leading end-to-end architecture for Data, Analytics and GenAI initiatives across regulated and data-intensive enterprise environments, with accountability for governance, scalability and production delivery on AWS.",
      points: [
        "Define reference architectures, standards and reusable blueprints that move proofs of concept toward production-grade delivery.",
        "Architect conversational AI and agentic workflows, including RAG over enterprise data, SQL interaction, tool use and orchestration patterns.",
        "Design AWS-based lakehouse, data mesh and governance solutions with attention to observability, operational excellence and FinOps.",
        "Serve as an internal instructor and mentor in Data Architecture enablement programs for consultants and delivery teams.",
      ],
    },
    experience: {
      number: "Nº 06",
      title: "Selected Experience",
      lead: "A condensed timeline.",
      items: [
        {
          year: "2026 — Now",
          org: "NTT DATA · Barcelona",
          role: "Chief AI Architect",
          note: "Banking AI architecture, GenAI platforms, AWS lakehouse, governance and delivery standards.",
        },
        {
          year: "2025",
          org: "Capitole · Barcelona",
          role: "Head of Data & AI Practice",
          note: "Founded and scaled the Data & AI practice, operating model, capability framework and strategic alliances.",
        },
        {
          year: "2022 — 2025",
          org: "Kyndryl · Barcelona",
          role: "Data & AI Lead",
          note: "Led AWS and GCP data architectures, data lake migration, ML/AI blueprints, PoCs and team mentoring.",
        },
        {
          year: "2021 — 2022",
          org: "Delosi · Lima",
          role: "Data Lead",
          note: "Created the Data Analytics Center of Excellence and modernized AWS data, analytics and governance capabilities.",
        },
        {
          year: "2021",
          org: "Globant · Lima",
          role: "Data Architect",
          note: "Designed AWS data architectures for advanced analytics, fraud detection and cloud migration initiatives.",
        },
        {
          year: "2020 — 2021",
          org: "Indra · Lima",
          role: "Big Data Engineer Lead",
          note: "Contributed to BBVA's enterprise data platform, governance flows, Teradata, Spark and large-scale ingestion.",
        },
        {
          year: "2019",
          org: "SEAT · Barcelona",
          role: "Big Data Engineer",
          note: "Delivered sentiment analysis, chatbot and connected-car data flows using Hadoop, Kafka, Spark and AWS services.",
        },
        {
          year: "2018 — 2019",
          org: "Ourlimm · Lima",
          role: "Power BI Data Analyst & Coach",
          note: "Trained business and IT users in Power BI, data modeling, DAX, visualization and SQL Server data marts.",
        },
        {
          year: "2017 — 2018",
          org: "ENGIE · Lima",
          role: "Digital Solution Analyst",
          note: "Supported digital transformation, IT service analytics, Power BI dashboards and Azure-based process automation.",
        },
      ],
    },
    domains: {
      number: "Nº 07",
      title: "Architecture Domains",
      lead: "The territory the practice covers.",
      items: [
        {
          k: "Enterprise AI Architecture",
          v: "Reference architectures, adoption paths, standards and patterns for GenAI, conversational AI and agentic workflows.",
        },
        {
          k: "Cloud Data Platforms",
          v: "AWS, Azure and GCP foundations for lakehouse, data mesh, streaming, analytics and scalable data products.",
        },
        {
          k: "Data Governance & Compliance",
          v: "Lineage, quality, security, regulatory alignment, operating models and data ownership for enterprise environments.",
        },
        {
          k: "Analytics & BI Modernization",
          v: "Power BI, Qlik, semantic thinking, dashboard governance and business-facing analytics enablement.",
        },
        {
          k: "ML, MLOps & LLMOps",
          v: "Applied machine learning, computer vision, model lifecycle, evaluation, monitoring and production enablement.",
        },
        {
          k: "Practice Leadership",
          v: "Capability frameworks, career paths, mentoring, training programs, partner alliances and executive proposals.",
        },
      ],
    },
    stories: {
      number: "Nº 08",
      title: "Selected Work",
      lead: "Three engagements, told briefly.",
      items: [
        {
          tag: "Regulated enterprise · 2026",
          title: "GenAI architecture for a regulated enterprise environment.",
          body: "Defined reusable blueprints for conversational AI and agentic workflows, connecting enterprise data, RAG, SQL interaction, orchestration and governance so experiments can move toward controlled production delivery.",
        },
        {
          tag: "Practice leadership · 2025",
          title: "A Data & AI practice built for scale.",
          body: "Founded a consulting practice operating model across Data Engineering, BI, Governance, Data Science, LLMs and RPA, supported by capability standards, alliances and an internal AI solution for practice operations.",
        },
        {
          tag: "Cloud modernization · 2022—2025",
          title: "Enterprise data platforms across AWS and GCP.",
          body: "Led data lake and lakehouse architectures, ingestion pipelines, ML/AI blueprints and migration initiatives using services such as S3, Glue, Kinesis, Redshift, BigQuery, Dataform and Dataproc.",
        },
      ],
    },
    academic: {
      number: "Nº 09",
      title: "Academic Profile",
      lead: "Teaching, mentoring, curriculum design.",
      listTitle: "Academic Roles",
      body: [
        "Associate Professor at Universidad San Martín de Porres, teaching undergraduate and postgraduate courses in Big Data, Business Intelligence and Data Science, with course design grounded in real cloud and enterprise architecture scenarios.",
        "Professor Part-time at Universitat Politècnica de Catalunya and Universitat de Barcelona, connecting AI, Big Data and emerging technologies with sustainability, built environments, sports, governance and ethical technology adoption.",
      ],
      reading: [
        { y: "2022 — Now", t: "Associate Professor · Universidad San Martín de Porres" },
        { y: "2025 — Now", t: "Professor Part-time · Universitat Politècnica de Catalunya" },
        { y: "2025 — Now", t: "Professor Part-time · Universitat de Barcelona" },
        { y: "Mentoring", t: "Thesis supervision, applied AI projects and data engineering guidance" },
      ],
    },
    education: {
      number: "Nº 10",
      title: "Education",
      lead: "Executive, technical and international formation.",
      items: [
        { y: "2024 — Now", t: "Executive MBA", o: "ESADE Business School · Barcelona" },
        { y: "2025", t: "Executive MBA — International Immersion Week", o: "American University in Dubai · UAE" },
        { y: "2025", t: "Leading Change and Transformation", o: "Aalto University · Helsinki" },
        { y: "2026", t: "Executive MBA — International Immersion Week", o: "Globis Business School · Tokyo" },
        { y: "2020 — 2021", t: "Master Degree in Artificial Intelligence", o: "UCAM · Murcia" },
        { y: "2019 — 2020", t: "Postgraduate in Agile Project Management", o: "IEBS Business School · Barcelona" },
        { y: "2018 — 2019", t: "Master Degree in Big Data", o: "Universidad de La Salle · Barcelona" },
        { y: "2017", t: "Business Analytics and Big Data · Data Science", o: "National University of Engineering · Lima" },
        { y: "2011 — 2017", t: "Computing Systems Engineering", o: "Universidad San Martín de Porres · Lima" },
      ],
    },
    stack: {
      number: "Nº 11",
      title: "Tech Stack",
      lead: "Tools the practice runs on, not a wishlist.",
      groups: [
        { k: "Cloud", v: "AWS · Azure · GCP · serverless · FinOps · observability" },
        { k: "AWS Data", v: "S3 · Glue · Lambda · Kinesis · Redshift · Athena · EMR · DynamoDB · Step Functions" },
        { k: "Data Platform", v: "Snowflake · Databricks · Delta Lake · BigQuery · Dataform · Fabric · Qlik Sense" },
        { k: "AI & ML", v: "Bedrock · Claude · SageMaker · Rekognition · MLflow · RAG · LLMOps · agentic workflows" },
        { k: "Engineering", v: "Python · SQL · Spark · PySpark · Kafka · Hadoop · Hive · HBase · Teradata" },
        { k: "BI & Delivery", v: "Power BI · DAX · SQL Server · Agile · Scrum · Kanban · TOGAF-grade artifacts" },
      ],
    },
    contact: {
      number: "Nº 12",
      title: "Contact",
      lead: "For enterprise AI architecture, Data & AI strategy, advisory, talks and academic collaboration.",
      imageAlt:
        "Close-up portrait of Jean Carlo Jesus Vallejos Pongo, Chief AI and Data Architect.",
      card: {
        name: "Jean Carlo Jesus Vallejos Pongo",
        role: "Chief AI & Data Architect",
        location: "Barcelona, Spain",
      },
      lines: [
        { k: "Email", v: "jean@jcjvp.com", href: "mailto:jean@jcjvp.com" },
        { k: "LinkedIn", v: "linkedin.com/in/jcvallpon", href: "https://www.linkedin.com/in/jcvallpon/" },
        { k: "CV", v: "Download — PDF", href: "/cv-jean-carlo-vallejos.pdf" },
      ],
      futureLinks: [
        { k: "GitHub", v: "github.com/jcjvp", href: "https://github.com/jcjvp" },
      ],
      note: "Based in Barcelona. Available for advisory, architecture leadership, lectures and selected consulting engagements.",
    },
    footer: {
      colophon:
        "Set in Newsreader, Instrument Sans and JetBrains Mono. Photographed in Barcelona, March 2026.",
      rights: "© 2026 Jean Carlo Jesus Vallejos Pongo. All rights reserved.",
    },
  },

  es: {
    meta: {
      wordmark: "JCJVP",
      homeLabel: "JCJVP — Jean Carlo Jesus Vallejos Pongo",
      issue: "Perfil / Nº 01",
      date: "Barcelona — Abril 2026",
      kicker: "Un Perfil",
      photoCaption: "Jean Carlo Jesus Vallejos Pongo — fotografiado en Helsinki, Finlandia, octubre de 2025.",
      langLabel: "Idioma",
      langOptions: [
        { code: "en", label: "EN" },
        { code: "es", label: "ES" },
      ],
      navLabel: "Secciones",
    },
    nav: {
      items: [
        { id: "profile", label: "Perfil" },
        { id: "tracks", label: "Perfiles" },
        { id: "experience", label: "Experiencia" },
        { id: "stories", label: "Trabajo" },
        { id: "academic", label: "Académico" },
        { id: "contact", label: "Contacto" },
      ],
      cta: "Descargar CV",
      ctaHref: "/cv-jean-carlo-vallejos.pdf",
    },
    hero: {
      kicker: "Perfil / Nº 01",
      location: "Barcelona · ES",
      headline: "Diseñando plataformas empresariales de Datos e IA donde convergen estrategia, gobierno y paso a producción.",
      name: "Jean Carlo Jesus Vallejos Pongo",
      role: "Chief AI & Data Architect",
      standfirst:
        "Chief AI & Data Architect especializado en arquitectura empresarial de Datos, Analítica e IA Generativa para entornos empresariales complejos, plataformas gobernadas, IA conversacional y flujos agentic.",
      credibility: "AWS · GenAI · Datos e IA empresarial · Arquitectura · Profesor",
      imageAlt:
        "Jean Carlo Jesus Vallejos Pongo sentado en exteriores en Barcelona, presentado como perfil de arquitectura empresarial de IA y datos.",
      meta: [
        { k: "Actual", v: "Chief AI Architect · NTT DATA" },
        { k: "Base", v: "Barcelona, ES" },
        { k: "Foco", v: "Datos e IA empresarial · Cloud · Gobierno · GenAI" },
        { k: "Docencia", v: "UPC · UB · USMP" },
        { k: "Idiomas", v: "Inglés · Español" },
      ],
    },
    profile: {
      number: "Nº 02",
      title: "Perfil",
      lead: "Un resumen ejecutivo.",
      body: [
        "Chief AI & Data Architect con una trayectoria que combina arquitectura empresarial, plataformas cloud de datos, modernización analítica e IA aplicada. El trabajo se sitúa donde la estrategia ejecutiva se convierte en sistemas productivos: arquitecturas de referencia, modelos de gobierno, blueprints reutilizables y estándares de entrega.",
        "El rol formal actual es Chief AI Architect en NTT DATA, tras posiciones de liderazgo como Head of Data & AI Practice en Capitole y Data & AI Lead en Kyndryl. El hilo conductor es la entrega enterprise sobre AWS, Azure, GCP, Snowflake, Databricks y arquitecturas lakehouse modernas: segura, gobernada, escalable y consciente del coste.",
        "En paralelo, mantiene una práctica académica que conecta la experiencia de consultoría con la docencia y mentoría. En Universidad San Martín de Porres, Universitat Politècnica de Catalunya y Universitat de Barcelona enseña IA, Big Data, BI, ciencia de datos, ecosistemas cloud y adopción responsable de tecnología.",
      ],
    },
    help: {
      number: "Nº 03",
      title: "Dónde puedo aportar valor",
      lead: "Arquitectura, estrategia y enablement para Datos e IA empresarial.",
      closing:
        "Aporto más valor donde las decisiones tecnológicas necesitan ser técnicamente sólidas, conscientes del negocio y orientadas a producción.",
      items: [
        {
          title: "Arquitectura GenAI empresarial",
          body: "Diseño de arquitecturas GenAI gobernadas que conectan LLMs, datos empresariales, orquestación, guardrails y observabilidad.",
          tags: ["LLMs", "RAG", "Agentes", "Guardrails"],
        },
        {
          title: "Plataformas Cloud Data",
          body: "Plataformas modernas de datos basadas en lakehouse, data mesh y patrones cloud-native de analítica.",
          tags: ["AWS", "Lakehouse", "Data Mesh", "Analítica"],
        },
        {
          title: "Gobierno de IA & paso a producción",
          body: "Conversión de ideas de IA en sistemas empresariales seguros, auditables y orientados a producción.",
          tags: ["Gobierno", "Seguridad", "Auditabilidad", "FinOps"],
        },
        {
          title: "Modernización BI & Analítica",
          body: "Modernización de ecosistemas BI, capas semánticas y experiencias analíticas con enfoques cloud y asistidos por IA.",
          tags: ["BI", "QuickSight", "Capa Semántica", "Migración"],
        },
        {
          title: "Advisory ejecutivo & técnico",
          body: "Acompañamiento a líderes y equipos técnicos para alinear decisiones de arquitectura con resultados de negocio.",
          tags: ["Estrategia", "Arquitectura", "Stakeholders", "Delivery"],
        },
        {
          title: "Docencia, charlas & workshops",
          body: "Diseño de experiencias formativas prácticas sobre Big Data, Cloud, IA, BI y tecnologías emergentes.",
          tags: ["Docencia", "Workshops", "Mentoría", "AI Literacy"],
        },
      ],
    },
    tracks: {
      number: "Nº 04",
      title: "Dos perfiles. Una misma mentalidad arquitectónica.",
      lead: "Práctica empresarial y práctica académica, sostenidas en una misma mano.",
      pro: {
        eyebrow: "Perfil Profesional",
        title: "Arquitectura empresarial de Datos e IA",
        body: [
          "Liderazgo de arquitectura en entornos empresariales complejos, regulados e intensivos en datos. El alcance cubre estrategia de plataforma, modelo operativo, gobierno del dato, modernización BI, arquitectura cloud, adopción GenAI y habilitación de delivery.",
          "El rol no consiste solo en diseñar plataformas, sino en hacerlas repetibles: estándares, patrones, formación, mentoría y alianzas que permiten escalar la capacidad de Data & AI más allá de un proyecto aislado.",
        ],
        bullets: [
          "NTT DATA · Capitole · Kyndryl · Delosi · Globant",
          "Plataformas AWS, Azure, GCP, Snowflake y Databricks",
          "GenAI, flujos agentic, RAG y productos habilitados por LLMs",
          "Liderazgo de práctica, asesoría ejecutiva y gobierno de delivery",
        ],
      },
      aca: {
        eyebrow: "Perfil Académico",
        title: "Docencia, mentoría y educación aplicada en IA",
        body: [
          "Profesor y mentor en programas de pregrado, postgrado y formación profesional sobre IA, Big Data, Business Intelligence, Data Science, Blockchain y transformación digital.",
          "La docencia parte de experiencia productiva: casos reales, patrones cloud, restricciones de gobierno, ética en IA y arquitecturas modernas como lakehouse, data mesh y Fabric.",
        ],
        bullets: [
          "Associate Professor · Universidad San Martín de Porres",
          "Professor Part-time · Universitat Politècnica de Catalunya",
          "Professor Part-time · Universitat de Barcelona",
          "Mentoría de tesis, diseño curricular y habilitación ejecutiva",
        ],
      },
      convergence:
        "El mismo criterio conecta ambos perfiles: hacer que los sistemas de IA y datos sean útiles, gobernables y suficientemente enseñables para sobrevivir más allá de la primera demo.",
    },
    role: {
      number: "Nº 05",
      title: "Rol Actual",
      lead: "Dónde sucede hoy el trabajo.",
      org: "NTT DATA — Barcelona, España",
      title2: "Chief AI Architect",
      period: "Ene 2026 — Presente",
      summary:
        "Lidera la arquitectura end-to-end de iniciativas de Datos, Analítica e IA Generativa en entornos regulados e intensivos en datos, con foco en gobierno, escalabilidad y paso a producción sobre AWS.",
      points: [
        "Define arquitecturas de referencia, estándares y blueprints reutilizables para llevar PoCs hacia entregas productivas.",
        "Arquitecta IA conversacional y flujos agentic, incluyendo RAG sobre datos empresariales, interacción SQL, tool use y patrones de orquestación.",
        "Diseña soluciones lakehouse, data mesh y gobierno del dato en AWS, incorporando observabilidad, excelencia operativa y FinOps.",
        "Actúa como instructor interno y mentor en programas de habilitación de Data Architecture para consultores y equipos de delivery.",
      ],
    },
    experience: {
      number: "Nº 06",
      title: "Experiencia Seleccionada",
      lead: "Una línea de tiempo condensada.",
      items: [
        {
          year: "2026 — Hoy",
          org: "NTT DATA · Barcelona",
          role: "Chief AI Architect",
          note: "Arquitectura de IA para banca, plataformas GenAI, lakehouse en AWS, gobierno y estándares de entrega.",
        },
        {
          year: "2025",
          org: "Capitole · Barcelona",
          role: "Head of Data & AI Practice",
          note: "Fundación y escalado de la práctica de Data & AI, modelo operativo, framework de capacidades y alianzas estratégicas.",
        },
        {
          year: "2022 — 2025",
          org: "Kyndryl · Barcelona",
          role: "Data & AI Lead",
          note: "Arquitecturas de datos en AWS y GCP, migración de data lake, blueprints ML/AI, PoCs y mentoría técnica.",
        },
        {
          year: "2021 — 2022",
          org: "Delosi · Lima",
          role: "Data Lead",
          note: "Creación del Centro de Excelencia de Analítica y modernización de datos, analítica y gobierno sobre AWS.",
        },
        {
          year: "2021",
          org: "Globant · Lima",
          role: "Data Architect",
          note: "Diseño de arquitecturas AWS para analítica avanzada, detección de fraude e iniciativas de migración cloud.",
        },
        {
          year: "2020 — 2021",
          org: "Indra · Lima",
          role: "Big Data Engineer Lead",
          note: "Contribución a plataforma enterprise de datos para BBVA, gobierno, Teradata, Spark e ingesta a gran escala.",
        },
        {
          year: "2019",
          org: "SEAT · Barcelona",
          role: "Big Data Engineer",
          note: "Análisis de sentimiento, chatbot y flujos de connected car con Hadoop, Kafka, Spark y servicios AWS.",
        },
        {
          year: "2018 — 2019",
          org: "Ourlimm · Lima",
          role: "Power BI Data Analyst & Coach",
          note: "Formación a usuarios de negocio e IT en Power BI, modelado, DAX, visualización y data marts en SQL Server.",
        },
        {
          year: "2017 — 2018",
          org: "ENGIE · Lima",
          role: "Digital Solution Analyst",
          note: "Transformación digital, analítica de servicios IT, dashboards Power BI y automatización de procesos sobre Azure.",
        },
      ],
    },
    domains: {
      number: "Nº 07",
      title: "Dominios de Arquitectura",
      lead: "El territorio que cubre la práctica.",
      items: [
        {
          k: "Arquitectura Enterprise de IA",
          v: "Arquitecturas de referencia, rutas de adopción, estándares y patrones para GenAI, IA conversacional y flujos agentic.",
        },
        {
          k: "Plataformas Cloud de Datos",
          v: "Fundaciones AWS, Azure y GCP para lakehouse, data mesh, streaming, analítica y productos de datos escalables.",
        },
        {
          k: "Gobierno del Dato y Cumplimiento",
          v: "Linaje, calidad, seguridad, alineación regulatoria, modelos operativos y ownership en entornos empresariales.",
        },
        {
          k: "Modernización Analítica y BI",
          v: "Power BI, Qlik, pensamiento semántico, gobierno de dashboards y habilitación analítica para negocio.",
        },
        {
          k: "ML, MLOps y LLMOps",
          v: "Machine learning aplicado, visión computacional, ciclo de vida de modelos, evaluación, monitorización y paso a producción.",
        },
        {
          k: "Liderazgo de Práctica",
          v: "Frameworks de capacidades, rutas de carrera, mentoría, formación, alianzas y propuestas ejecutivas.",
        },
      ],
    },
    stories: {
      number: "Nº 08",
      title: "Trabajo Seleccionado",
      lead: "Tres compromisos, contados de forma breve.",
      items: [
        {
          tag: "Enterprise regulado · 2026",
          title: "Arquitectura GenAI para un entorno empresarial regulado.",
          body: "Definición de blueprints reutilizables para IA conversacional y flujos agentic, conectando datos empresariales, RAG, interacción SQL, orquestación y gobierno para mover experimentos hacia producción controlada.",
        },
        {
          tag: "Liderazgo de práctica · 2025",
          title: "Una práctica de Data & AI preparada para escalar.",
          body: "Creación de un modelo operativo de consultoría sobre Data Engineering, BI, Governance, Data Science, LLMs y RPA, apoyado en estándares de capacidad, alianzas y una solución interna de IA para operaciones de práctica.",
        },
        {
          tag: "Modernización cloud · 2022—2025",
          title: "Plataformas empresariales de datos en AWS y GCP.",
          body: "Liderazgo de arquitecturas data lake y lakehouse, pipelines de ingesta, blueprints ML/AI y migraciones usando servicios como S3, Glue, Kinesis, Redshift, BigQuery, Dataform y Dataproc.",
        },
      ],
    },
    academic: {
      number: "Nº 09",
      title: "Perfil Académico",
      lead: "Docencia, mentoría, diseño curricular.",
      listTitle: "Roles académicos",
      body: [
        "Associate Professor en Universidad San Martín de Porres, donde imparte cursos de pregrado y postgrado en Big Data, Business Intelligence y Data Science, con diseño curricular basado en escenarios reales de cloud y arquitectura empresarial.",
        "Professor Part-time en Universitat Politècnica de Catalunya y Universitat de Barcelona, conectando IA, Big Data y tecnologías emergentes con sostenibilidad, entornos construidos, deporte, gobierno y adopción ética de tecnología.",
      ],
      reading: [
        { y: "2022 — Hoy", t: "Associate Professor · Universidad San Martín de Porres" },
        { y: "2025 — Hoy", t: "Professor Part-time · Universitat Politècnica de Catalunya" },
        { y: "2025 — Hoy", t: "Professor Part-time · Universitat de Barcelona" },
        { y: "Mentoría", t: "Supervisión de tesis, proyectos de IA aplicada y guía en ingeniería de datos" },
      ],
    },
    education: {
      number: "Nº 10",
      title: "Formación",
      lead: "Formación ejecutiva, técnica e internacional.",
      items: [
        { y: "2024 — Hoy", t: "Executive MBA", o: "ESADE Business School · Barcelona" },
        { y: "2025", t: "Executive MBA — International Immersion Week", o: "American University in Dubai · EAU" },
        { y: "2025", t: "Leading Change and Transformation", o: "Aalto University · Helsinki" },
        { y: "2026", t: "Executive MBA — International Immersion Week", o: "Globis Business School · Tokio" },
        { y: "2020 — 2021", t: "Master Degree in Artificial Intelligence", o: "UCAM · Murcia" },
        { y: "2019 — 2020", t: "Postgraduate in Agile Project Management", o: "IEBS Business School · Barcelona" },
        { y: "2018 — 2019", t: "Master Degree in Big Data", o: "Universidad de La Salle · Barcelona" },
        { y: "2017", t: "Business Analytics and Big Data · Data Science", o: "National University of Engineering · Lima" },
        { y: "2011 — 2017", t: "Computing Systems Engineering", o: "Universidad San Martín de Porres · Lima" },
      ],
    },
    stack: {
      number: "Nº 11",
      title: "Stack Técnico",
      lead: "Herramientas con las que opera la práctica, no una lista de deseos.",
      groups: [
        { k: "Cloud", v: "AWS · Azure · GCP · serverless · FinOps · observabilidad" },
        { k: "AWS Data", v: "S3 · Glue · Lambda · Kinesis · Redshift · Athena · EMR · DynamoDB · Step Functions" },
        { k: "Plataforma de Datos", v: "Snowflake · Databricks · Delta Lake · BigQuery · Dataform · Fabric · Qlik Sense" },
        { k: "IA y ML", v: "Bedrock · Claude · SageMaker · Rekognition · MLflow · RAG · LLMOps · flujos agentic" },
        { k: "Ingeniería", v: "Python · SQL · Spark · PySpark · Kafka · Hadoop · Hive · HBase · Teradata" },
        { k: "BI y Delivery", v: "Power BI · DAX · SQL Server · Agile · Scrum · Kanban · artefactos tipo TOGAF" },
      ],
    },
    contact: {
      number: "Nº 12",
      title: "Contacto",
      lead: "Para arquitectura enterprise de IA, estrategia Data & AI, asesoría, ponencias y colaboración académica.",
      imageAlt:
        "Retrato cercano de Jean Carlo Jesus Vallejos Pongo, Chief AI and Data Architect.",
      card: {
        name: "Jean Carlo Jesus Vallejos Pongo",
        role: "Chief AI & Data Architect",
        location: "Barcelona, Spain",
      },
      lines: [
        { k: "Email", v: "jean@jcjvp.com", href: "mailto:jean@jcjvp.com" },
        { k: "LinkedIn", v: "linkedin.com/in/jcvallpon", href: "https://www.linkedin.com/in/jcvallpon/" },
        { k: "CV", v: "Descargar — PDF", href: "/cv-jean-carlo-vallejos.pdf" },
      ],
      futureLinks: [
        { k: "GitHub", v: "github.com/jcjvp", href: "https://github.com/jcjvp" },
      ],
      note: "Con base en Barcelona. Disponible para asesoría, liderazgo de arquitectura, docencia y proyectos seleccionados de consultoría.",
    },
    footer: {
      colophon:
        "Tipografías Newsreader, Instrument Sans y JetBrains Mono. Fotografiado en Barcelona, marzo de 2026.",
      rights: "© 2026 Jean Carlo Jesus Vallejos Pongo. Todos los derechos reservados.",
    },
  },
};
