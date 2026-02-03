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
    LocateFixed,
    Mail,
    Phone,
    Linkedin,
    Github,
    FileText,
    Terminal,
    Camera,
    BrainCircuit,
    Users,
    FileSpreadsheet,
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
            "Conduct comprehensive manual testing for web applications, ensuring functional and visual consistency.",
            "Design and execute detailed test cases for new features, reporting bugs with precise reproduction steps in Jira.",
            "Perform API testing using Postman to validate endpoints and ensure data integrity.",
            "Collaborate with developers to assist in debugging and verifying fixes for reported defects.",
        ],
    },
    {
        company: "Vitasoft Solutions",
        role: "SQA Engineer",
        period: "Sep 2024 - Oct 2025",
        achievements: [
            "Executed regression testing cycles before major releases to maintain system stability.",
            "Conducted performance load testing using JMeter for high-traffic modules.",
            "Documented test plans and release notes, ensuring clear communication with stakeholders.",
            "Assisted in the initial setup of automated test scripts using Selenium.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "AgroMart",
        description: "E-commerce platform for agricultural products. Performed extensive manual testing on shopping cart flows and payment gateway integrations.",
        tags: ["Manual Testing", "Jira", "Test Rails"],
        link: "#",
    },
    {
        title: "Vistock",
        description: "Inventory management system. Responsible for API validation using Postman and ensuring RBAC (Role-Based Access Control) functionality.",
        tags: ["Postman", "API Testing", "Swagger"],
        link: "#",
    },
    {
        title: "HRMaster",
        description: "HRM solution with employee tracking. Conducted performance testing to handle 500+ concurrent users.",
        tags: ["JMeter", "Performance", "MySQL"],
        link: "#",
    },
    {
        title: "EduLearn LMS",
        description: "Learning Management System. Verified course enrollment workflows and certificate generation logic.",
        tags: ["Manual Testing", "Usability", "Bugzilla"],
        link: "#",
    },
    {
        title: "FinTrack",
        description: "Personal finance tracker. Validated data visualization charts and secure login implementations.",
        tags: ["Security Testing", "Owasp ZAP", "Penetration"],
        link: "#",
    },
];

export const CERTIFICATIONS = [
    {
        name: "ISTQB Foundation Level",
        issuer: "ISTQB",
        year: "2024",
        color: "bg-blue-500",
    },
    {
        name: "Postman API Fundamentals",
        issuer: "Postman",
        year: "2024",
        color: "bg-orange-500",
    },
    {
        name: "Selenium Webdriver with Java",
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
