/**
 * Portfolio Configuration for Kishlay Kumar
 * All personal details, titles, links, and content are centralized here for easy editing.
 */

export const portfolioConfig = {
  personal: {
    name: "Kishlay Kumar",
    nickname: "Kishlay",
    shortBio: "Creative developer, designer & B.Tech CSE student passionate about crafting expressive, future-ready digital experiences.",
    location: "India",
    locationDetail: "Noida / IN",
    currentStatus: "B.Tech CSE Student",
    interests: ["UI Design", "Frontend Development", "Backend Development", "IoT"],
    availability: "Open for freelance & collaborative builds",
    tagline: "Delivering concepts into real world",
    email: "kishlaykumar0005@gmail.com",
    hubUrl: "https://github.com/beyondcode776",
    resumePdfUrl: "/Kishlay_Resume.pdf",
  },

  welcomeScreen: {
    coverBadge: "CONFIDENTIAL // DEV LOG",
    coverTitle: "DEVELOPER'S DIARY",
    subtitle: "Kishlay Kumar's Personal Work Journal",
    tagline: "Ideas, interfaces & things I'm building.",
    buttonText: "OPEN NOTEBOOK →",
    buttonHint: "(click to open or press Enter / Space)",
    skipText: "Skip intro",
    storageKey: "kishlay_notebook_opened_v1",
  },

  hero: {
    headline: {
      line1: "BUILDING",
      highlight: "FUTURE-READY",
      line3: "DIGITAL EXPERIENCES.",
    },
    rotatingTitles: [
      "UI Designer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "IoT Explorer",
      "Creative Problem Solver",
      "Tech Enthusiast"
    ],
    summary: "I craft responsive web interfaces, build full-stack applications, and explore IoT-powered ideas with a focus on clean design, smooth interactions, and practical problem-solving.",
    buttons: {
      primary: {
        text: "EXPLORE WORK ↗",
        href: "#projects",
        type: "scroll",
        description: "View curated projects & builds"
      },
      secondary: {
        text: "HIRE ME",
        href: "#contact",
        emailFallback: "mailto:kishlay@example.com?subject=Project%20Inquiry",
        type: "link",
        description: "Get in touch for opportunities"
      }
    },
    infoCard: {
      heading: "FIELD NOTES",
      basedIn: "India",
      currently: "B.Tech CSE Student",
      interests: "UI Design · Frontend Development · Backend · IoT",
    }
  },

  polaroid: {
    // Kishlay's formal portrait from public/kishlay.png
    actualPortrait: "/kishlay.png",
    altText: "Kishlay Kumar - B.Tech CSE Student & Developer",
    caption: "That's me! (Kishlay) was here ✌️",
    annotations: [
      { text: "UI Designer", position: "top-left", arrowDirection: "to-right-down" },
      { text: "Frontend Developer", position: "top-right", arrowDirection: "to-left-down" },
      { text: "Backend Developer", position: "mid-left", arrowDirection: "to-right-up" },
      { text: "Delivering concepts into real world", position: "bottom-right", arrowDirection: "to-left-up" },
    ]
  },

  navigation: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],

  marquee: [
    "UI DESIGNER",
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "FULL STACK DEVELOPER",
    "IoT EXPLORER",
    "CREATIVE PROBLEM SOLVER",
    "TECH ENTHUSIAST",
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/beyondcode776", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kishlay-kumar-763534435", icon: "linkedin" },
    { name: "Discord", url: "https://discord.gg/frUcCKGkw", icon: "discord" },
    { name: "X", url: "https://x.com/Kishlaykumar346", icon: "x" },
  ]
};
