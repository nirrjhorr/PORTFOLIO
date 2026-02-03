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
    role: "Associate SQA Engineer",
    summary: "Detail-oriented Associate Software Quality Assurance Engineer with extensive experience in automation and manual testing. Expert in building robust test frameworks using Selenium, Appium, and Cypress to ensure flawless software delivery.",
    location: "Dhaka, Bangladesh",
    email: "contact@example.com",
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
    // Automation
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
            "Led the transition from manual to automated testing coverage.",
            "Implemented rigorous API testing protocols using Postman and Swagger.",
            "Managed defect lifecycles using Jira and improved team velocity.",
        ],
    },
    {
        company: "Vitasoft Solutions",
        role: "SQA Engineer",
        period: "Sep 2024 - Oct 2025",
        achievements: [
            "Developed automated test scripts using Selenium and Java.",
            "Conducted performance testing for high-traffic modules using JMeter.",
            "Collaborated with developers to ensure zero-bug releases.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "AgroMart",
        description: "E-commerce platform for agricultural products.",
        tags: ["Selenium", "Java", "TestNG"],
        link: "#",
    },
    {
        title: "Vistock",
        description: "Inventory management system with proper QA coverage.",
        tags: ["Postman", "API Testing", "JMeter"],
        link: "#",
    },
    {
        title: "HRMaster",
        description: "HRM solution validated for high concurrency.",
        tags: ["Cypress", "JavaScript", "Manual Test"],
        link: "#",
    },
];

export const CONTACT = {
    handle: "@nirrjhorr",
    socials: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/nirrjhorr", icon: SiLinkedin, color: "#0A66C2" },
        { name: "GitHub", href: "https://github.com/nirrjhorr", icon: SiGithub, color: "#ffffff" },
        { name: "Instagram", href: "https://instagram.com/nirrjhorr", icon: SiInstagram, color: "#E4405F" },
        { name: "Facebook", href: "https://facebook.com/nirrjhorr", icon: SiFacebook, color: "#1877F2" },
    ]
};
