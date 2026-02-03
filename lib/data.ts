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
} from "react-icons/si";
import {
    Users,
    FileSpreadsheet,
    Terminal,
    Camera,
    BrainCircuit,
    Clapperboard
} from "lucide-react";

export const PROFILE = {
    name: "MD Hasan Al Rashid",
    role: "SQA Engineer",
    summary: "Detail-oriented Software Quality Assurance Engineer specializing in manual testing, API validation (Postman), and performance testing (JMeter). Currently expanding expertise in test automation with Selenium & Cypress.",
    location: "Dhaka, Bangladesh",
    email: "contact@example.com",
    phone: "+880 1234 567 890",
    linkedin: "https://linkedin.com/in/nirrjhorr",
    github: "https://github.com/nirrjhorr",
    resumeUrl: "/Md_Hasan_Al_Rashid_QA_Resume.pdf",
};

export const SKILLS = [
    // Management
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Trello", icon: SiTrello, color: "#0052CC" },
    { name: "Teams", icon: Users, color: "#6264A7" },
    // API & Performance
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
    { name: "JMeter", icon: SiApachejmeter, color: "#D22128" },
    { name: "BlazeMeter", icon: SiBlazemeter, color: "#CA2428" },
    // Automation (Learning)
    { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
    { name: "Playwright", icon: Clapperboard, color: "#2EAD33" },
    // DevOps
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    // Docs & Utils
    { name: "Notion", icon: SiNotion, color: "#000000" },
    { name: "Excel", icon: FileSpreadsheet, color: "#217346" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Newman", icon: Terminal, color: "#333333" },
    { name: "Lightshot", icon: Camera, color: "#8A2BE2" },
    { name: "XMind", icon: BrainCircuit, color: "#F05032" },
];

export const EXPERIENCE = [
    {
        company: "SodiumLearn",
        role: "Associate SQA Engineer",
        period: "Nov 2025 - Present",
        achievements: [
            "Conduct manual testing for web applications to ensure functional consistency.",
            "Execute test cases for new features and report bugs in Jira.",
            "Perform API testing using Postman to validate endpoints.",
            "Collaborate with developers to assist in debugging defects.",
        ],
    },
    {
        company: "Vitasoft Solutions",
        role: "SQA Engineer",
        period: "Sep 2024 - Oct 2025",
        achievements: [
            "Executed regression testing cycles before major releases.",
            "Conducted performance load testing using JMeter.",
            "Documented test plans and release notes.",
            "Assisted in automated test script setup with Selenium.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "AgroMart",
        description: "E-commerce platform for agricultural products. Focused on functional testing and bug reporting.",
        tags: ["Manual Testing", "Jira", "Test Rails"],
        link: "#",
    },
    {
        title: "Vistock",
        description: "Inventory management system. Responsible for API validation and data consistency checks.",
        tags: ["Postman", "API Testing", "Swagger"],
        link: "#",
    },
    {
        title: "HRMaster",
        description: "HRM solution with employee tracking. Conducted performance testing/load testing.",
        tags: ["JMeter", "Performance", "MySQL"],
        link: "#",
    },
    {
        title: "EduLearn LMS",
        description: "Learning Management System. Verified user workflows and course management features.",
        tags: ["Manual Testing", "Usability", "Bugzilla"],
        link: "#",
    },
    {
        title: "FinTrack",
        description: "Personal finance tracker. Validated security features and login mechanisms.",
        tags: ["Security Testing", "Owasp ZAP", "Penetration"],
        link: "#",
    },
];

export const EDUCATION = [
    {
        degree: "Bachelor of Science in Computer Science & Engineering",
        institution: "Independent University, Bangladesh (IUB)",
        year: "2019 - 2023",
        result: "CGPA: 3.52/4.00"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Dhaka Residential Model College",
        year: "2018",
        result: "GPA: 5.00/5.00"
    }
];

export const CERTIFICATIONS = [
    {
        name: "ISTQB Certified Tester Foundation Level (CTFL)",
        issuer: "ISTQB",
        year: "2024",
        color: "bg-blue-500",
    },
    {
        name: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
        year: "2024",
        color: "bg-orange-500",
    },
    {
        name: "Selenium Webdriver with Java for Beginners",
        issuer: "Udemy",
        year: "2023",
        color: "bg-green-500",
    },
];

export const CONTACT = {
    handle: "@nirrjhorr",
    email: "contact@example.com",
    phone: "+880 1234 567 890",
    socials: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/nirrjhorr", icon: SiLinkedin, color: "#0A66C2" },
        { name: "GitHub", href: "https://github.com/nirrjhorr", icon: SiGithub, color: "#ffffff" },
        { name: "Instagram", href: "https://instagram.com/nirrjhorr", icon: SiInstagram, color: "#E4405F" },
        { name: "Facebook", href: "https://facebook.com/nirrjhorr", icon: SiFacebook, color: "#1877F2" },
    ]
};
