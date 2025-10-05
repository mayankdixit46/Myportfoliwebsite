/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import ZetaglobalLogo from "./assets/images/zeta-global-logo.jpeg";
import PegasystemsLogo from "./assets/images/pega-company-logo.png";
import HPLogo from "./assets/images/HP_logo_2025.svg";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayank Dixit",
  title: "Hello world, I'm Mayank!",
  subTitle: emoji(
    "A passionate aspiring Full Stack Software Developer 🚀 transitioning from a successful career in Email Marketing. I’m currently building web applications with JavaScript, React.js, Node.js, and continuously upskilling through hands-on projects and certifications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mayankdixit46",
  linkedin: "https://www.linkedin.com/in/mayank-dixit-8869491b9/",
  gmail: "mayankdixit460@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "HUNGRY FULL STACK DEVELOPER IN THE MAKING, EXPLORING MODERN TECH STACKS",
  skills: [
    emoji(
      "⚡ Building responsive front-end UIs for real-life portfolio projects"
    ),
    emoji(
      "⚡ Working on full-stack apps with RESTful APIs and dynamic front ends"
    ),
    emoji("⚡ Developing internal tools that automate workflows & track data")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Krishna Institute of Technology",

      subHeader: "Bachelor of Mechanical Engineering",
      duration: "2016 - 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "0%"
    },
    {
      Stack: "Programming",
      progressPercentage: "10%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Campaign Manager",
      company: "Zeta Global",
      companylogo: ZetaglobalLogo,
      date: "July 2021 – September 2023",
      desc: "2.5 years of experience in Salesforce Marketing Cloud, specializing in email development, management, and quality assurance. Proven ability to replicate emails using XD and Figma files and proficient in conducting basic image editing using Adobe Photoshop. Committed to delivering exceptional results through hard work, attention to detail, and continuous improvement.",
      descBullets: [
        "Salesforce Marketing Cloud: Proficient in utilizing Email Studio for email marketing campaigns.",
        "HTML and CSS: Skilled in building visually appealing and responsive emails using HTML and CSS.",
        "SQL Basics: Proficient in utilizing SQL to check database sizes and perform basic queries.",
        "Audience Builder: Experienced in utilizing Audience Builder to create targeted and segmented audiences.",
        "Automation Studio: Proficient in using Automation Studio to build ad-hoc audiences and automate marketing processes.",
        "Ampscript: Skilled in using Ampscript, a scripting language specific to Salesforce Marketing Cloud, for dynamic content personalization and advanced email customization."
      ]
    },
    {
      role: "Email Marketing Specialist",
      company: "Pegasystems Inc.",
      companylogo: PegasystemsLogo,
      date: "October 2023 – Present",
      desc: "At Pegasystems Inc., I manage global email marketing initiatives using Pega's built-in Customer Decision Hub (CDH) software. My responsibilities include overseeing Next-Best-Action (NBA) email offers for both inbound and outbound channels, executing email outbound campaigns, and generating comprehensive email performance reports. I also focus on product enhancements, develop and maintain HTML email templates, conduct market research, and manage stakeholder relationships to ensure alignment with business objectives."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Major email template migration projects",
  projects: [
    {
      image: HPLogo,
      projectName: "HP (EMEA)",
      projectDesc:
        "Migrated the template for HP (EMEA) to the updated brand guidelines with thorough testing and approvals from client",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.hp.com/"
        }
      ]
    },
    {
      image: PegasystemsLogo,
      projectName: "PegaWorld Event",
      projectDesc:
        "Introduction to GIF in emails increasing registrations and awareness for the flagship event PegaWorld",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.pega.com/events/pegaworld"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Pega Certified Decisioning Consultant",
      subtitle:
        "Professional certification in Pega Customer Decision Hub, specializing in Next-Best-Action strategies and real-time customer decisioning.",
      image: require("./assets/images/Decisioning_Consultant.png"),
      imageAlt: "Pega Certified Decisioning Consultant Badge",
      footerLink: [
        {
          name: "Certificate",
          url: "/Myportfoliwebsite/1746868647406.pdf"
        }
      ]
    },
    {
      title: "Google AI Essentials",
      subtitle:
        "Professional certification in Google AI fundamentals, covering machine learning concepts, generative AI, and responsible AI practices for business applications.",
      image: require("./assets/images/google-logo.png"),
      imageAlt: "Google AI Essentials Certification Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "/Myportfoliwebsite/google-ai-essentials-cert.pdf"
        }
      ]
    },

    {
      title: "GTM India Hackathon Participant",
      subtitle:
        "Built a Hackathon project integrating PromoNest, automating discount code tracking and enabling real-time insights with GenAI for Pega Events team",
      image: PegasystemsLogo,
      imageAlt: "Pega Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "/Myportfoliwebsite/gtm-hackathon-cert.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8147135485",
  email_address: "mayankdixit460@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
