// data/portfolio.ts
export type Social = {
  label: "LinkedIn" | "GitHub" | "X" | "Facebook";
  url: string;
};

export type Course = {
  name: string;
  outcome: string;
  project?: string;
  repo?: string;
  image?: string;
};
export type Degree = {
  school: string;
  program: string;
  years: string;
  cgpa?: string;
  logo?: string;
  courses?: Course[];
};
export type Experience = { range: string; title: string; bullets: string[] };
export type Project = {
  name: string;
  description: string;
  repo?: string;
  images?: string[];
  tags?: string[];
};

export type Blog = {
  title: string;
  url: string;
  image?: string;
};

const portfolio = {
  about: {
    headline: "FULL STACK SOFTWARE DEVELOPER",
    blurb:
      "Experienced Full Stack Software Developer with expertise in fintech, sales, and medical journal projects. Skilled in Angular, Java Spring Boot, React, and Flutter, with a focus on clean code and architecture. Proven leadership abilities, coupled with a strong educational background, ensure adept problem-solving and innovative solutions delivery.",
    avatar: "./images/DP1.png",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ayeshanoorkhan" },
      {
        label: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100049869494230",
      },
      { label: "GitHub", url: "https://github.com/ayeshank" },
      { label: "X", url: "https://twitter.com/AyeshaNoorKhan3" },
    ] as Social[],
    ctas: {
      resume:
        "https://drive.google.com/file/d/1-itGdxvLNOFhOW13qMbYbgCPtcVZVjQJ/view?usp=sharing",
      hireMe: "https://www.upwork.com/freelancers/~01933ca17937429ca8",
    },
  },
  education: [
    {
      school: "INSTITUTE OF BUSINESS ADMINISTRATION",
      program: "MASTERS IN COMPUTER SCIENCE",
      years: "Aug 2023 – Jun 2025",
      cgpa: "3.47",
      logo: "/images/ibaLogo.png",
      courses: [
        {
          name: "Advanced Cloud Computing",
          outcome:
            "Learning Outcome: Design and implement cloud solutions using virtualization, containerization, and SDN for networking, with a focus on resource management, security, and cloud migration strategies. Address privacy challenges and apply best practices for cloud computing",
          project: "Multi Cloud GDPR Conformity Assessor",
          repo: "https://github.com/ayeshank/gdpr-conformity-assessor",
          image: "/images/gdpr/gdpr3.png",
        },
        {
          name: "Enterprise Integration",
          outcome:
            "Learning Outcome: Understanding different methods of Integration e.g. Blockchain Middlewares APIs ESB.",
          project:
            "Research Paper on how usage of different methods and importance of Enterprise Integration.",
          repo: "https://drive.google.com/file/d/1Th81gvByrASNrHQy09z9HBAtUc7TKaqi/view?usp=sharing",
        },
        {
          name: "Supervised Machine Learning",
          outcome:
            "Learning Outcome: Gain proficiency in supervised machine learning by applying mathematical concepts and algorithms to classification, regression, and time-series problems. Evaluate and select the best ML methods, considering bias-variance tradeoffs, feature reduction, and overfitting. Build complete ML systems from data preparation to model evaluation, and participate in data analytics competitions using Python libraries.",
          project: "ML Solutions to Avoid Class Imbalance issues in Datasets",
          repo: "https://github.com/ayeshank/Machine-Learning-I/tree/master/Project-Class-Imbalance",
        },
        {
          name: "DevOps",
          outcome:
            "Learning Outcome: Understanding the concepts of Docker Ansible Terraform Virtual Private Networks, developing code pipeline and deploying web application using DNS and SSL certificate on private networks mainly through Nginx Let's Encrypt and AWS services.",
          project:
            "Full-stack app on AWS (GoDaddy + Route 53), IaC with Terraform, CI/CD via AWS & GitHub Actions",
          repo: "https://github.com/ayeshank/devops-terraform-aws",
        },
        {
          name: "Software Project Management",
          outcome:
            "Learning Outcome: Understanding a major concept of maintaining a balance between PMP Triangle and getting know about different knowledge Areas and phases of PMP.",
          project:
            "Hands on Case Study on Harvard Business School PMP SImulation to manage the resource cost and schedule efficiently while delivering level of work.",
          repo: "https://drive.google.com/drive/folders/148tDjXqMeiYdxWKyBUMQu-YODzVIJoQO?usp=sharing",
        },
        {
          name: "Text Analytics (Large Language Models)",
          outcome:
            "Learning Outcome: Learn the Transformer architecture (attention, positional encodings, multi-head attention), tokenization, pre-training/fine-tuning (SFT, LoRA/QLoRA), prompt engineering, evaluation (BLEU/ROUGE, perplexity), embeddings & vector search, and Retrieval-Augmented Generation (RAG) design; deploy LLMs with guardrails and latency/cost optimizations.",
          project:
            "Developed a Retrieval-Augmented Generation chatbot to simplify U.S. visa queries by retrieving official policy documents and generating user-friendly responses. Stack: Python, RAG, Vector DB, LLMs.",
          repo: "https://github.com/ayeshank/IBA-MS-Text-Analytics-Fall-2024",
        },
        {
          name: "Cybersecurity Essentials",
          outcome:
            "Learning Outcome:   Gain practical proficiency in network traffic analysis for security; author and enforce network security policies with pfSense; perform threat risk assessments using DREAD; implement AAA (authentication, authorization, accounting) in a Kali Linux–based simulated network; conduct risk analysis with Kaggle’s CISA vulnerability dataset; configure Linux RBAC; execute and mitigate MITM attacks with Kali; and run vulnerability assessments with OpenVAS.",
          project:
            "Research Paper on Enhancing Framework-Level Code Security through Large Language Models",
          repo: "https://drive.google.com/file/d/1wS2GBkGm5nm8msflj3_sK3G_llRXMHOQ/view?usp=sharing",
        },
        {
          name: "Programming Quantum Computers",
          outcome:
            "Learning Outcome: Understand quantum computing principles, qubits, gates, and algorithms. Gain hands-on experience with Qiskit for building and simulating quantum circuits, exploring quantum algorithms like Grover's and Shor's, and addressing quantum error correction and real-world applications.",
          project:
            "Assignments and Quizzes based on Qiskit and Python Programming",
          repo: "",
        },
        {
          name: "Requirement Engineering",
          outcome:
            "Learning Outcome: Understanding the concepts of requirements gathering, analysis, documentation and management through different techniques and tools.",
          project:
            "Requirements Risk Assessment and Management Plan for a Case Study of Nokia Downfall.",
          repo: "https://drive.google.com/file/d/1ZvcWbdfctPrKxz4Z9436JA3VrWW8PCy_/view?usp=sharing",
        },
        {
          name: "MS Project",
          outcome:
            "Learning Outcome: An end-to-end system that automatically turns news from multiple sources into concise, podcast-style audio using large-language-model summarization. A background ingestion engine scrapes, cleans and classifies articles, stores their embeddings in a vector database, and a runtime LLM engine retrieves, summarizes and converts them to speech. Development stack: Scrapy +Python + Fast API backend, Chroma vector DB, local LLMs (Mistral-7B, LLaMA-3B), Edge TTS, Next.js frontend, deployment onAWS and Hugging Face.",
          project:
            "AUTOMATED NEWS SUMMARIZATION AND PODCAST GENERATION SYSTEM USING LLMS.",
          repo: "https://drive.google.com/file/d/192WWMio2F8j4fapYQ8Ijgyz8xgb3Fvla/view?usp=sharing",
        },
      ],
    },
    {
      school: "NED UNIVERSITY OF ENGINEERING AND TECHNOLOGY",
      program: "BACHELORS IN SOFTWARE ENGINEERING",
      years: "Oct 2018 – Sep 2022",
      cgpa: "3.78",
      logo: "/images/nedLogo.png",
      courses: [
        {
          name: "Object-Oriented Programming (OOP)",
          outcome:
            "Applied classes/objects, encapsulation, inheritance, polymorphism, interfaces, SOLID, exception handling, and basic design patterns with unit testing.",
          project:
            "Food Management System in C# (.NET): CRUD for menus, orders, and users; role-based flows; layered design; basic validation and reporting.",
        },
        {
          name: "Data Structures & Algorithms (DSA)",
          outcome:
            "Implemented arrays, linked lists, stacks, queues, hash maps, trees/heaps, graphs; sorting/searching; recursion; analyzed time/space using Big-O.",
          project:
            "Algorithm toolkit with benchmarks: implemented and profiled sorting, search, and shortest-path routines with comparative performance reports.",
        },
        {
          name: "Operating Systems",
          outcome:
            "Understood processes/threads, scheduling, synchronization (mutexes/semaphores), deadlocks, memory management (paging/VM), file systems, and I/O.",
          project:
            "Multithreaded Producer–Consumer simulator: bounded buffer with semaphores/mutexes, starvation/deadlock experiments, and scheduler comparisons.",
        },
        {
          name: "Logic Design and Switching Theory",
          outcome:
            "Applied Boolean algebra, Karnaugh maps, minimization; designed combinational/sequential circuits and finite state machines (FSM).",
          project:
            "Traffic-Light Controller FSM (Logisim/Verilog): designed, minimized, and simulated timing-accurate state transitions with reset/fault handling.",
        },
        {
          name: "Software Architecture",
          outcome:
            "Evaluated architectural styles (layered, microservices, event-driven), quality attributes/trade-offs, C4/UML modeling, and architecture documentation (ADRs).",
          project:
            "Order & Inventory module blueprint: layered architecture with domain entities/use cases, API contracts, ADRs, and deployment view for scalability.",
        },
      ],
    },
  ] as Degree[],
  experience: [
    {
      range: "Dec 2024 - Jan 2026",
      title: "Massachusetts Medical Society - CLINICIAN Product",
      bullets: [
        "Led development of medium-to-large complexity features with a focus on scalability, performance, and maintainability.",
        "Drove architectural decisions and milestone planning; delivered a POC for a referral-based sign-in mechanism; ran sprint planning and task breakdown with cross-functional teams.",
        "Mentored junior developers on frontend best practices and performed detailed code reviews.",
        "Integrated MuleSoft APIs, Adobe Analytics, and Google Publisher Tags (GPTs) to improve observability, user tracking, and ad revenue.",
        "Implemented SSR optimizations and introduced multi-session authentication (OpenAthens) for secure, modernized access.",
        "Contributed to hiring in shadow: evaluated coding assignments and onboarded new frontend engineers.",
        "Implemented authentication/authorization and gateway mechanisms to enhance medical journal security.",
        "Added Zod schemas for API request validation to ensure data consistency, type safety, and robust error handling.",
        "Refactored and organized code for readability, maintainability, and reuse.",
        "Independently developed the OneAccess application for user access management across journal websites.",
        "Integrated Redis caching for frequently accessed articles and session data to handle heavy load efficiently.",
        "Worked in Agile with cross-functional collaboration to meet deadlines and improve development workflows.",
      ],
    },
    {
      range: "Dec 2023 - Nov 2024",
      title: "AL-FARDAN EXCHANGE - Fintech Project",
      bullets: [
        "Led two project modules end-to-end, translating complex client requirements into technical solutions and running UAT for successful delivery.",
        "Designed a custom Angular rule engine for regulatory compliance and validations.",
        "Migrated and refactored legacy services into .NET Core microservices to improve reliability.",
        "Resolved performance bottlenecks by optimizing database queries and fine-tuning the application architecture.",
        "Engineered an advanced Kendo Spreadsheet customization for financial workflows; documented the solution in a Medium post (see resume).",
        "Integrated third-party APIs for real-time currency conversion and financial data.",
        "Served as Scrum Master to streamline Agile ceremonies, improve collaboration, and accelerate delivery.",
        "Coordinated directly with clients for UAT feedback, driving higher satisfaction and smoother releases.",
      ],
    },
    {
      range: "Sep 2022 - Nov 2023",
      title: "TMX-SD - Sales & Distribution",
      bullets: [
        "Migrated a large-scale application from AngularJS to Angular 14, modernizing UI/UX and reducing maintenance overhead.",
        "Designed and implemented EF Core repositories with async LINQ and Dependency Injection.",
        ".NET Core backend services for data management with query optimization for large datasets.",
        "Built reusable Angular components following clean architecture principles to improve maintainability.",
        "Implemented document upload/preview flows integrated with Azure Blob Storage.",
        "Handled bulk data processing and additional query optimizations for scale.",
        "Drove performance tuning and scalability improvements in long-running backend services.",
      ],
    },
    {
      range: "Apr 2022 - Aug 2022",
      title: "Massachusetts Medical Society - Medical Journal",
      bullets: [
        "Developed reusable components in a custom React library and managed versioning after each deployment.",
        "Integrated the React component library into a parent Next.js application for platform-wide reuse.",
        "Utilized Directus to manage and consume APIs on the frontend.",
        "Enabled on-site journal content editing with role-based privilege controls.",
        "Resolved Next.js SSR challenges arising from separating components into a library and a host app.",
      ],
    },
    // internships
    {
      range: "Feb 2022 - Mar 2022",
      title: "Trainee Software Developer - Euronet Worldwide",
      bullets: ["Built reusable IBM RPG functions", "Refactored legacy code"],
    },
    {
      range: "Jul 2021 - Jan 2022",
      title: "MERN Stack Developer - NI3 Industries",
      bullets: ["Project plan, DB design, agile", "XNA Shares app end-to-end"],
    },
    {
      range: "Feb 2021 - May 2021",
      title: "Software Engineering Intern - Signbox",
      bullets: ["SDLC docs, proposals, SRS, manuals"],
    },
    {
      range: "Dec 2020 - Mar 2021",
      title: "ReactJS Developer Intern - CSRD Lab (NEDUET)",
      bullets: [
        "Implemented DEGHJEE catering platform",
        "Managed APIs & MongoDB",
      ],
    },
    {
      range: "May 2020 - Jul 2020",
      title: "Front-End Developer Intern - NCAI",
      bullets: ["Improved components and responsive layouts"],
    },
  ] as Experience[],
  projects: [
    {
      name: "Multi Cloud GDPR Assessor",
      description:
        "A multi-cloud GDPR conformity assessor which helps organizations to know the violations of their multi-cloud storage account in terms of GDPR Policies. It fetches the storage configuration of multi-cloud and examines those configurations based on GDPR compliant.",
      repo: "https://github.com/ayeshank/gdpr-conformity-assessor",
      images: [
        "/images/gdpr/gdpr1.png",
        "/images/gdpr/gdpr2.png",
        "/images/gdpr/gdpr3.png",
      ],
      tags: ["React", "Node", "Cloud", "GDPR"],
    },
    {
      name: "BlockEd (React Native)",
      description:
        "A blockchain based education mobile app, developed on react native which allow the user to register in the app with the help of blockchain ledger. The students and teachers both can use this app for effective learning.",
      images: [
        "/images/blocked/Blocked1.jpeg",
        "/images/blocked/Blocked2.jpeg",
        "/images/blocked/Blocked3.jpeg",
      ],
      tags: ["React Native", "Blockchain"],
    },
  ] as Project[],
  blogs: [
    {
      title:
        "Securing Private IP Addresses: SSL with Route 53, OpenSSL & Let’s Encrypt",
      url: "https://medium.com/stackademic/securing-private-ip-addresses-a-guide-to-ssl-certificate-acquisition-with-route-53-openssl-and-a6679e9c803e",
      image: "/images/blogs/blog2.png",
    },
    {
      title: "Customize Kendo Spreadsheet in Angular – Dev Guide",
      url: "https://medium.com/stackademic/a-developers-guide-to-customizing-kendo-spreadsheet-in-angular-941e9cab285e",
      image: "/images/blogs/blog1.png",
    },
    {
      title:
        "Unlocking the Power of Transformers: The Hidden Engines Behind Modern AI",
      url: "https://medium.com/stackademic/unlocking-the-power-of-transformers-the-hidden-engines-behind-modern-ai-6466f8bec035",
      image: "/images/blogs/blog3.png",
    },
  ] as Blog[],
  contact: {
    emailTo: "ayeshanoorank19@gmail.com",
  },
};
export default portfolio;
