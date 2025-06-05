/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
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
  username: "anushkastar",
  title: "Hi all, I'm Anushka ",
  subTitle: emoji(
    "A passionate Full Stack Software Developer , aspiring Data Engineer, Cloud Computing Enthusiast, AI/Ml passionate 🚀 having  experience of building Web  applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bB5jua0Sd4-TRg7bRjE-AFdDD08WepP_/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anushkastar",
  linkedin: "https://www.linkedin.com/in/anushka-tripathi-a1591527b/",
  gmail: "anushka.tripathig2038@gmail.com",
  instagram: "https://www.instagram.com/anushkatripathi864/",
  medium: "https://medium.com/@anushka.tripathig2038",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madan Mohan Malaviya University Of Technology",
      logo: require("./assets/images/mmmut logo.png"),
      subHeader: "Bachelor Of Technology in Information Technology",
      duration: "November 2022 - May 2026",
      desc: "Currently having a CGPA of 9.12 (till V Sem).",
      descBullets: [
        "Secured a Branch Upgrade from ECE to IT in second year with a CGPA of 9.29  (Oct 2023)",
        "Runner up in Smart India Hackathon held at college ( Nov 2024)"
      ]
    },
    {
      schoolName: "St. Mary's Convent High School, Kanpur",
      logo: require("./assets/images/smc kanpur logo.png"),
      subHeader: "High School and Intermediate",
      duration:
        "High School:April 2019-May 2020|| Intermediate:April 2021- May 2022",
      desc: "Among top 5 in both High School and Intermediate with 95.2% and 96.25%respectively.",
      descBullets: [
        "Blue House Captain (2021-2022) || Two times MUN Winner || Qualified National level Spell Bee "
      ]
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
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



// Some big projects you have worked on
const bigProjects = {
  title: "Self-Driven Projects",
  subtitle: "WALKTHROUGH OF SOME OF THE SELF-DRIVEN PROJECTS.",
  projects: [
    {
      image: require("./assets/images/atlasairr.png"),
      projectName: "Atlasair",
      projectDesc:
        " Stay beyond the ordinary:Atlasair curates rare, awe-inspiring stays for the bold travelers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://atlasair.onrender.com/listings"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/invest.png"),
      projectName: "InvestEcho",
      projectDesc: "A financial analytics platform providing real-time market insights and investment recommendations",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/anushkastar/investecho"
        }
      ]
    },

    {
      image: require("./assets/images/Virtu.png"),
      projectName: "VirtuConvo",
      projectDesc:
        " Privacy and Security :Ensures user data is protected with end-to-end encryption and robust measures.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/anushkastar/virtuconvo"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Github.png"),
      projectName: "GitHub Clone",
      projectDesc:
        " A GitHub-inspired platform with essential version control and collaboration features.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/anushkastar/aws-githubclone-frontend"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Group Projects  "),
  subtitle:
    "Walkthrough of some of the group projects.",

  achievementsCards: [
    {
      title: "TRIFLES",
      subtitle:
        "Connecting farmers directly to consumers — fresh produce, no middlemen.",
      image: require("./assets/images/farmer.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://github.com/iamanujkumar/Farmer-item-sell"
        },
       
      ]
    },
    {
      title: "University Innovation Cell",
      subtitle:
        "College Society Website(Showcasing the spirit of innovation on campus)",
      image: require("./assets/images/UIC.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "Live Website Link",
          url: "https://www.uicmmmut.tech/"
        }
      ]
    },

    {
      title: "ShareKart",
      subtitle: "ShareKart is a platform to buy, sell, and donate pre-owned items at minimal or no cost.",
      image: require("./assets/images/Share.png"),
      imageAlt: "",
      footerLink: [
        
        {
          name: "Visit Link",
          url: "https://github.com/Priyadav17/ShareKart"
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
  title: "Achievements and Certifications🏆",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Certificate from IIT Kanpur (AWS Cloud) .",
      subtitle: "Completed a 4-week project on “AWS Elastic Load Balancing in a VPC ",
      slides_url: "https://drive.google.com/file/d/1NET2vsHLZr5fxqTzPATKyLu92lmMAU2M/view?usp=drive_linkg",
      event_url: "https://drive.google.com/file/d/1NET2vsHLZr5fxqTzPATKyLu92lmMAU2M/view?usp=drive_link"
    },
    {
      title: "NPTEL (Elite+Silver) on Computer Vision",
      subtitle: "Ranked in the top 1% nationwide in NPTEL Computer Vision certification.",
      slides_url:"https://drive.google.com/file/d/1e5N2heQSHXM25iTzVDtQGIzzISUuInzW/view?usp=sharing",
      event_url: "https://drive.google.com/file/d/1e5N2heQSHXM25iTzVDtQGIzzISUuInzW/view?usp=sharing",

    },
    {
      title: "NPTEL (Elite) on Deep Learning",
      subtitle: "Earned NPTEL Elite certification for high distinction in Deep Learning",
      slides_url: "https://drive.google.com/file/d/1FVCCn3x2uPatYGeNLREy8dGah2JHNcpb/view?usp=sharing",
      event_url: "https://drive.google.com/file/d/1FVCCn3x2uPatYGeNLREy8dGah2JHNcpb/view?usp=sharing"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Alumni interaction session🎙️"),
  subtitle: "Live interaction with alumni shared via a YouTube video post — insights, experiences, and guidance in real time.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/embed/fjRbY5CVAeA?si=KZEF8OnjPoIPTlG0" 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7235086020",
  email_address: "anushka.tripathig2038@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
