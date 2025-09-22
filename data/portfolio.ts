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
            "Learning Outcome: Understanding a major concept of maintaining a balance between PMP Triangle and getting know about different knowledge Areas and phases of PMP.",
          project:
            "Hands on Case Study on Harvard Business School PMP SImulation to manage the resource cost and schedule efficiently while delivering level of work.",
          repo: "https://drive.google.com/drive/folders/148tDjXqMeiYdxWKyBUMQu-YODzVIJoQO?usp=sharing",
        },
        {
          name: "Cybersecurity Essentials",
          outcome:
            "Learning Outcome: Understanding a major concept of maintaining a balance between PMP Triangle and getting know about different knowledge Areas and phases of PMP.",
          project:
            "Hands on Case Study on Harvard Business School PMP SImulation to manage the resource cost and schedule efficiently while delivering level of work.",
          repo: "https://drive.google.com/drive/folders/148tDjXqMeiYdxWKyBUMQu-YODzVIJoQO?usp=sharing",
        },
        {
          name: "Programming Quantum Computers",
          outcome:
            "Learning Outcome: Understanding a major concept of maintaining a balance between PMP Triangle and getting know about different knowledge Areas and phases of PMP.",
          project:
            "Hands on Case Study on Harvard Business School PMP SImulation to manage the resource cost and schedule efficiently while delivering level of work.",
          repo: "https://drive.google.com/drive/folders/148tDjXqMeiYdxWKyBUMQu-YODzVIJoQO?usp=sharing",
        },
        {
          name: "Requirement Engineering",
          outcome:
            "Learning Outcome: Understanding a major concept of maintaining a balance between PMP Triangle and getting know about different knowledge Areas and phases of PMP.",
          project:
            "Hands on Case Study on Harvard Business School PMP SImulation to manage the resource cost and schedule efficiently while delivering level of work.",
          repo: "https://drive.google.com/drive/folders/148tDjXqMeiYdxWKyBUMQu-YODzVIJoQO?usp=sharing",
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
          name: "Software Design",
          outcome: "Mastered architecture & design patterns",
          project: "Scalable microservices architecture",
        },
      ],
    },
  ] as Degree[],
  experience: [
    {
      range: "Dec 2023 – Current",
      title: "AL-FARDAN EXCHANGE – Fintech Project",
      bullets: [
        "Implemented authN/authZ in Angular frontend and Spring Boot backend",
        "Designed funds transfer logic with compliance",
        "Optimized DB queries and resolved bottlenecks",
        "Customized Kendo Spreadsheet for financial workflows",
        "Integrated 3rd-party APIs for currency and real-time updates",
        "Led agile ceremonies and improved collaboration",
      ],
    },
    {
      range: "Sep 2022 – Nov 2023",
      title: "TMX-SD – Sales & Distribution",
      bullets: [
        "Built REST APIs in microservice architecture",
        "Optimized queries and integrated Azure Blob Storage",
        "Migrated AngularJS → Angular 14 with clean code",
        "Implemented scalable patterns for Flutter app",
      ],
    },
    {
      range: "Apr 2022 – Aug 2022",
      title: "Massachusetts Medical Society – Medical Journal",
      bullets: [
        "Developed reusable components in a React library",
        "Integrated the library into a Next.js host app",
        "Used Directus for API content",
        "Enabled on-site journal editing with privileges",
        "Handled SSR challenges across library + host app",
      ],
    },
    // internships
    {
      range: "Feb 2022 – Mar 2022",
      title: "Trainee Software Developer – Euronet Worldwide",
      bullets: ["Built reusable IBM RPG functions", "Refactored legacy code"],
    },
    {
      range: "Jul 2021 – Jan 2022",
      title: "MERN Stack Developer – NI3 Industries",
      bullets: ["Project plan, DB design, agile", "XNA Shares app end-to-end"],
    },
    {
      range: "Feb 2021 – May 2021",
      title: "Software Engineering Intern – Signbox",
      bullets: ["SDLC docs, proposals, SRS, manuals"],
    },
    {
      range: "Dec 2020 – Mar 2021",
      title: "ReactJS Developer Intern – CSRD Lab (NEDUET)",
      bullets: [
        "Implemented DEGHJEE catering platform",
        "Managed APIs & MongoDB",
      ],
    },
    {
      range: "May 2020 – Jul 2020",
      title: "Front-End Developer Intern – NCAI",
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
