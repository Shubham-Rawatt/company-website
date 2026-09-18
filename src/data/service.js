// data/services.ts

import {
  FiLayout,
  FiCode,
  FiSmartphone,
  FiCpu,
  FiCloud,
  FiLayers,
} from "react-icons/fi";

export const services = [
  {
    id: 1,
    title: "Website Design",
    description:
      "We design conversion-focused websites that reflect your brand and hold up under real traffic. As a website development company in Delhi, we pair visual craft with performance engineering, so every page loads fast and looks premium on any device.",
    features: [
      "Custom UI/UX design",
      "Mobile-first responsive builds",
      "Conversion-focused layouts",
    ],
    icon: FiLayout,
  },

  {
    id: 2,
    title: "Web Development",
    description:
      "Beyond design, we engineer the systems that keep your site fast and secure at scale. Working as a web development company in Delhi and a web application development company, we build custom portals, dashboards, and internal tools your team actually enjoys using.",
    features: [
      "Custom web applications",
      "API & backend architecture",
      "Secure, scalable codebases",
    ],
    icon: FiCode,
  },

  {
    id: 3,
    title: "Mobile App Development",
    description:
      "We create native and cross-platform apps that feel fast, intuitive, and reliable from day one. As a mobile app development company serving startups and enterprises alike, we handle everything from architecture to App Store deployment.",
    features: [
      "iOS & Android native apps",
      "Cross-platform development",
      "App Store & Play Store deployment",
    ],
    icon: FiSmartphone,
  },

  {
    id: 4,
    title: "AI Development",
    description:
    //   "We build practical AI-powered products that automate workflows, improve decision-making, and create smarter customer experiences.",
        "We integrate AI-powered solutions into real business workflows, not as a buzzword, but as working automation that saves hours and reduces error. As an AI development company, we build custom models and intelligent tools tailored to how your business actually operates.",
    features: [
      "AI-powered applications",
      "Machine learning solutions",
      "Intelligent workflow automation",
    ],
    icon: FiCpu,
  },

  {
    id: 5,
    title: "Cloud & Enterprise Solutions",
    description:
    "We architect cloud-native infrastructure and enterprise software development built to handle real load without breaking your budget. Our cloud application development work spans migration, containerization, and ongoing optimization for growing businesses.",
    features: [
      "Cloud architecture",
      "Infrastructure modernization",
      "Scalable deployment solutions",
    ],
    icon: FiCloud,
  },

  {
    id: 6,
    title: "Digital Transformation & IT Consulting",
    description:
    "We help businesses modernize legacy systems and replace manual processes with connected digital tools. As an IT consulting company offering end-to-end digital transformation services, we plan and implement technology roadmaps aligned to where your business is headed.",
    features: [
      "Business process automation",
      "Custom enterprise software",
      "Third-party integrations",
    ],
    icon: FiLayers,
  },
];