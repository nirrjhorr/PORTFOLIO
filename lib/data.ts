import {
    SiJira,
    SiTrello,
    SiPostman,
    SiSwagger,
    SiApachejmeter,
    SiBlazemeter,
    SiSelenium,
    SiGit,
    SiGitlab,
    SiGithub,
    SiNotion,
    SiMysql,
    SiLinux,
    SiLinkedin,
    SiInstagram,
    SiFacebook,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiSpringboot,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiAmazon,
    SiAngular,
    SiNestjs,
} from "react-icons/si";
import {
    Users,
    FileSpreadsheet,
    Terminal,
    Camera,
    BrainCircuit,
    Clapperboard,
    Layout,
    CheckSquare,
    RefreshCw,
    Activity,
    Search,
    FileText,
    ShieldCheck,
    Database,
    Cpu,
    Webhook,
    Sparkles,
} from "lucide-react";

export const PROFILE = {
    name: "MD Hasan Al Rashid",
    role: "QA Engineer",
    summary: "QA Engineer with nearly 2 years of experience testing SaaS-based, multi-tenant platforms, including LMS/LXP, ERP, HR, POS, and e-commerce systems. Skilled in manual, API, regression, and end-to-end testing, test planning, and Agile/Scrum collaboration, with exposure to microservices and performance testing and a growing focus on test automation.",
    location: "Dhaka, Bangladesh",
    email: "mdhasanxtech@gmail.com",
    phone: "+880 1993 324 032",
    linkedin: "https://www.linkedin.com/in/nirrjhorr",
    github: "https://github.com/nirrjhorr",
    resumeUrl: "/Md_Hasan_Al_Rashid_QA_Resume.pdf",
    profileImage: "/profile.jpg",
};

export const SKILLS = [
    // Testing Methodologies
    { name: "Manual Testing", icon: CheckSquare, color: "#4CAF50" },
    { name: "API Testing", icon: Webhook, color: "#FF6C37" },
    { name: "Regression Testing", icon: RefreshCw, color: "#2196F3" },
    { name: "Performance Testing", icon: Activity, color: "#F44336" },
    { name: "Security Testing", icon: ShieldCheck, color: "#9C27B0" },
    { name: "Smoke Testing", icon: Search, color: "#FF9800" },
    { name: "Exploratory Testing", icon: Terminal, color: "#795548" },
    { name: "Test Case Design", icon: FileText, color: "#607D8B" },
    // Tools
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "JMeter", icon: SiApachejmeter, color: "#D22128" },
    { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
    { name: "Playwright", icon: Clapperboard, color: "#2EAD33" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    // Programming
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: Cpu, color: "#007396" }, // SiJava is not in simple-icons sometimes
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    // Utils
    { name: "Notion", icon: SiNotion, color: "#000000" },
    { name: "XMind", icon: BrainCircuit, color: "#F05032" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Prompt Engineering", icon: Sparkles, color: "#FFD700" },
    { name: "Agile & Scrum", icon: Users, color: "#6264A7" },
];

export const EXPERIENCE = [
    {
        company: "SodiumLearn",
        role: "Associate SQA Engineer",
        period: "Nov 2025 - Present",
        icon: BrainCircuit,
        logo: "/logos/sodiumlearn.svg",
        achievements: [
            "Ensured quality of SaaS-based, multi-tenant LMS/LXP platforms through manual, regression, UI, API, and data validation testing.",
            "Performed API testing on microservice-based systems using Postman and Swagger, with backend validation via SQL.",
            "Used GitLab primarily for version control while working in a CI/CD-enabled environment, collaborating with teams to support release quality.",
            "Participated in Sprint Planning and Agile/Scrum ceremonies, collaborating through Jira and Notion to manage requirements, testing, and defect tracking across services and tenants.",
            "Created and maintained test cases, defect reports, and QA documentation, supporting project planning and cross-team collaboration.",
            "Continuously improving QA practices, with an interest in test automation."
        ],
    },
    {
        company: "Vitasoft Solutions",
        role: "Jr. SQA Engineer",
        period: "Sep 2024 - Oct 2025",
        icon: Database,
        logo: "/logos/vitasoft.svg",
        achievements: [
            "Wrote and executed test cases for SaaS-based, multi-tenant products, including VIstock (inventory & POS system), HRMaster (HR management software) and Viscon (ERP solution).",
            "Performed manual, API (Postman), and performance testing (JMeter) to identify defects and improve system performance.",
            "Created and maintained test plans, test documentation, and user guides to support project delivery and release readiness.",
            "Logged, tracked, and verified software defects using Jira, collaborating closely with developers in Agile/Scrum sprints.",
            "Validated end-to-end user workflows across multiple releases, ensuring system stability and data consistency across services.",
            "Delivered tasks on time and worked effectively under pressure, demonstrating attention to detail and problem-solving."
        ],
    },
    {
        company: "Freelance",
        role: "QA Engineer",
        period: "Jan 2025 - June 2025",
        icon: Terminal,
        logo: "/logos/freelance.svg",
        achievements: [
            "Performed manual end-to-end testing for e-commerce web platforms, validating complete user journeys (product browsing, cart, checkout, payments, and order processing).",
            "Conducted functional, regression, smoke, and exploratory testing to ensure feature stability across releases.",
            "Validated backend workflows and API responses to ensure data consistency across frontend, inventory, orders, and payment systems.",
            "Executed UI, cross-browser, and responsive testing to verify compatibility across devices and browsers.",
            "Tested applications built using WordPress and MERN stack, ensuring correct functionality and integration flows.",
            "Logged and tracked defects with clear reproduction steps, collaborating closely with developers to verify fixes."
        ],
    },
];

export const PROJECTS = [
    {
        title: "SodiumLearn | LMS & LXP Platform",
        description: "Performed manual, regression, and end-to-end testing on a SaaS-based, multi-tenant LMS/LXP platform. Validated frontend-backend integrations in a CI/CD-driven environment using GitLab.",
        tags: ["Manual Testing", "API Testing", "GitLab", "SaaS"],
        link: "#",
    },
    {
        title: "AgroMart | E-commerce Platform",
        description: "Developed a MERN stack e-commerce platform and performed extensive load and performance testing on key workflows to evaluate system behavior under stress.",
        tags: ["MongoDB", "Express", "React", "Node", "JMeter"],
        link: "#",
    },
    {
        title: "Student Hub API | API Test Suite",
        description: "Created an automated API test suite for CRUD operations and authentication using Postman & Newman. Included data-driven testing and generated detailed HTML reports.",
        tags: ["Postman", "Newman", "API Automation", "CSV"],
        link: "#",
    },
    {
        title: "RESTful Booker | API Testing",
        description: "Designed and executed automated API tests for booking management, handling environment variables and complex CRUD workflows with high precision.",
        tags: ["Postman", "Newman", "API Testing"],
        link: "#",
    },
    {
        title: "VIstock | POS & Inventory",
        description: "Designed and executed comprehensive test cases for dashboard, inventory, transactions, and HR modules of a complex POS system. Validated core API endpoints.",
        tags: ["Manual Testing", "API", "Jira", "Excel"],
        link: "#",
    },
    {
        title: "HRMaster | HR Management",
        description: "Verified employee tracking, attendance, payroll, and leave management modules through rigorous manual and API testing to ensure business logic compliance.",
        tags: ["Manual Testing", "API", "Jira", "Software QA"],
        link: "#",
    },
    {
        title: "Midnight Feast Pizza | Freelance",
        description: "Designed and tested a WordPress website for a local business. Performed functional testing on menu browsing, online ordering, and contact forms.",
        tags: ["WordPress", "Manual Testing", "Web Design"],
        link: "#",
    },
    {
        title: "Konnect | Edtech Platform",
        description: "Conducted manual testing of a social networking platform, covering authentication, profile management, messaging, notifications, and search functions.",
        tags: ["Jira", "XMind", "Manual Testing", "Usability"],
        link: "#",
    },
    {
        title: "Dmoney | Fintech Platform",
        description: "Tested a digital payment platform focusing on service charges, cashback policies, and loan workflows. Validated functional and business rule compliance.",
        tags: ["Manual Testing", "Fintech", "XMind", "Excel"],
        link: "#",
    },
    {
        title: "Fabrilife | E-commerce",
        description: "Performed deep manual testing on a major e-commerce platform, identifying bugs across UI, functional, usability, performance, and security areas.",
        tags: ["Manual Testing", "Bug Hunting", "Excel", "UI/UX"],
        link: "#",
    },
    {
        title: "OrangeHRM | HR Management System",
        description: "Performed manual and API testing on an open-source HRM platform, validating employee management, attendance, leave workflows, and role-based access control to ensure business rule compliance.",
        tags: ["Manual Testing", "API Testing"],
        link: "#",
    },
    {
        title: "Bug Report Automation | QA Tool",
        description: "Built a Python-based desktop tool to analyze and visualize bug reports from Excel/CSV files, enabling quick QA insights through an interactive GUI.",
        tags: ["Python", "Tkinter", "Pandas", "Excel"],
        link: "#",
    },
    {
        title: "BanglaPuzzle | Performance Testing",
        description: "Performed load and performance testing on core web application workflows to evaluate system stability, response time, and behavior under stress.",
        tags: ["JMeter", "Performance Testing"],
        link: "#",
    },
    {
        title: "Daraz | Manual Test Cases",
        description: "Designed and maintained structured manual test cases for key e-commerce workflows to ensure functional accuracy and business requirement coverage.",
        tags: ["Manual Testing", "Test Case Design"],
        link: "#",
    },
    {
        title: "Vitadoc | Documentation Platform",
        description: "Performed manual testing on a documentation management system, validating document creation, editing, organization, and overall usability to ensure reliable documentation workflows.",
        tags: ["Manual Testing", "Documentation", "Usability"],
        link: "#",
    },
];

export const EDUCATION = [
    {
        degree: "Bachelor of Computer Science and Engineering",
        institution: "Daffodil International University",
        year: "2019 - 2023",
        result: "CGPA: 3.59/4.00"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Brahmanbaria Govt. College",
        year: "2018",
        result: "GPA: 3.50/5.00"
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Agrabad Govt. Colony High School",
        year: "2016",
        result: "GPA: 4.89/5.00"
    }
];

export const CERTIFICATIONS = [
    {
        name: "SQA Virtual Training Program",
        issuer: "Skilljobs",
        year: "2024",
        color: "bg-blue-500",
    },
    {
        name: "SQA & Cybersecurity",
        issuer: "IT Training BD",
        year: "2024",
        color: "bg-amber-500",
    },
    {
        name: "Mastering Cybersecurity: Essential Knowledge and Techniques",
        issuer: "Udemy",
        year: "2024",
        color: "bg-purple-600",
    },
    {
        name: "Master Agile & Scrum Basics",
        issuer: "Udemy",
        year: "2024",
        color: "bg-orange-500",
    },
    {
        name: "Project Management Fundamentals",
        issuer: "IBM SkillsBuild",
        year: "2024",
        color: "bg-green-500",
    },
    {
        name: "Registered Scrum Basics",
        issuer: "Scrum Inc.",
        year: "2024",
        color: "bg-red-500",
    },
    {
        name: "AWS Educate – Getting Started with Databases",
        issuer: "Amazon Web Services (AWS)",
        year: "2023",
        color: "bg-orange-600",
    },
    {
        name: "Digital Security Essentials",
        issuer: "MuktoPaath",
        year: "2024",
        color: "bg-blue-600",
    },
    {
        name: "EF SET English Certificate (C2 Proficient)",
        issuer: "EF SET",
        year: "2024",
        color: "bg-indigo-600",
    },
];

export const ACHIEVEMENTS = [
    {
        title: "Runner-Up, DIU Battle of Minds | Vroom",
        description: "Contributed to the development of an MVP autonomous vehicle project for urban transportation, demonstrated innovation and technical skills, and secured initial funding for the prototype.",
        year: "2020"
    }
];

export const CONTACT = {
    handle: "@nirrjhorr",
    email: "mdhasanxtech@gmail.com",
    phone: "+880 1993 324 032",
    socials: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/nirrjhorr", icon: SiLinkedin, color: "#0A66C2" },
        { name: "GitHub", href: "https://github.com/nirrjhorr", icon: SiGithub, color: "#ffffff" },
        { name: "Instagram", href: "https://instagram.com/nirrjhorr", icon: SiInstagram, color: "#E4405F" },
        { name: "Facebook", href: "https://facebook.com/nirrjhorr", icon: SiFacebook, color: "#1877F2" },
    ]
};

export const QA_JOKES = [
    "It works on my machine… but let’s see what QA has to say about it!",
    "Found a bug! Time to call the bug exterminator… oh wait, that’s me.",
    "QA: Breaking your code gracefully, one test at a time.",
    "If it compiles, it must be perfect… said no tester ever.",
    "Warning: Entering a bug-infested zone. Proceed with caution!",
    "I don’t always test software, but when I do, I break it spectacularly.",
    "Debugging is like being a detective in a crime movie where you are also the murderer.",
    "Another day, another bug… don’t worry, QA’s got this.",
    "Code works in theory… reality is overrated.",
    "QA: Making developers cry since the dawn of version control.",
    "Found a defect? Congratulations, you just unlocked the ‘QA Achievement’.",
    "Bugs are like gremlins… feed them and they multiply exponentially.",
    "Keep calm and let QA handle your nightmares disguised as code.",
    "Every bug you find today will become a heroic story tomorrow.",
    "QA doesn’t break things… we just reveal their true chaotic potential.",
    "If it ain’t tested, it ain’t trusted. QA’s motto forever.",
    "Debugging: The art of removing bugs that shouldn’t have existed in the first place.",
    "Code like a dev, break like a tester.",
    "QA: Saving users from the horrors that developers accidentally release.",
    "I write test cases for fun… and your panic for free.",
    "Bugs are like unicorns… rare, magical, and impossible to ignore.",
    "Your code just met QA… consider yourself inspected.",
    "Test, fail, repeat… the QA circle of life.",
    "Bug detected! QA is on it faster than a caffeine-powered squirrel.",
    "Errors, warnings, exceptions… QA sees them all, and laughs a little.",
    "QA doesn’t judge code… we just judge the people who wrote it.",
    "The build is stable… until QA touches it.",
    "Welcome to QA land, where every click might uncover chaos.",
    "If QA had a superpower, it would be finding bugs in less than a nanosecond.",
    "Congratulations! Your code survived the QA gauntlet… barely."
];
