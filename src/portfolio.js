/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samuel Fok",
  title: "Hi all, I'm Samuel",
  subTitle: emoji(
    "A passionate Front End Software Developer 🚀 having an experience of building Web and automation tools with JavaScript / Reactjs / Mochajs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/foks20",
  linkedin: "https://www.linkedin.com/in/samuel-fok/",
  gmail: "samuelfok629@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONT-END STACK DEVELOPER & ADAPTIVE MOBILITY INNOVATOR EAGER TO EXPLORE DIVERSE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Design scooter and wheelchair accessories tailored to your needs, from gas-powered to electric and hybrid models."),
    emoji(
      "⚡Provide tutoring in computer science and assistance with CS-related projects."
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "hybridScooter",
      fontAwesomeClassname: "fa fa-motorcycle"
    },
    {
      skillName: "tutor",
      fontAwesomeClassname: "fa fa-chalkboard"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California Los Angeles (UCLA)",
      logo: require("./assets/images/UCLA.png"),
      subHeader: "PHD of Science in Environmental and Sustainability",
      duration: "Leave of Absence",
      desc: "Participated in discussions on designing sensors to collect data and utilizing this data in VR technologies to alert workers about the air quality in their surroundings.",
      descBullets: [
        "Gates Millennium Scholar"
      ]
    },
    {
      schoolName: "Rensselaer Polytechnic Institute (RPI)",
      logo: require("./assets/images/RPI.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "January 2018 - December 2018",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Gates Millennium Scholar"]
    },
    {
      schoolName: "Rensselaer Polytechnic Institute (RPI)",
      logo: require("./assets/images/RPI.png"),
      subHeader: "Bachelor of Science in Information Technology and Web Science",
      duration: "January 2013 - December 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Gates Millennium Scholar", "National Nuclear Security Administration (NNSA) Scholarship"]
    },
    {
      schoolName: "Rochester Institute of Technology (RIT)",
      logo: require("./assets/images/RIT.png"),
      subHeader: "Computer Engineering Technology",
      duration: "January 2013 - December 2013",
      desc: "Transferred after the fall semester.",
      descBullets: ["Gates Millennium Scholar", "Dean's Honor 2013"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/JavaScript/CSS", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Motorized Vehicle Design and Engineering",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mid Level Software Commissioning Engineer",
      company: "Matthews Automation Solution",
      companylogo: require("./assets/images/images.jfif"),
      date: "May 2023 – Mar 2024",
      desc: "Developed user interfaces with advanced charting and data filtering capabilities for Warehouse Management Systems using C# and SQL. Additionally, I went onsite to integrate and test the WMS logic functionality and other related components."
    },
    {
      role: "Software QA Automation Engineer",
      company: "A + E Networks",
      companylogo: require("./assets/images/a-e-networks-logo.webp"),
      date: "Feb 2020 – Dec 2022",
      desc: "Led a diverse team of software engineers and manual QAs, applying Agile methodologies along with Jira to enhance project tracking, management,and CI/CD practices."
    },
    {
      role: "Software QA Automation Engineer",
      company: "Lawrence Livermore National Lab",
      companylogo: require("./assets/images/PLPQDzCi_400x400.jpg"),
      date: "Jun 2016 – Aug 2016",
      desc: "Contributed to the conversion of a Perl library into Django and analyzed the lab’s carbon footprint."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Compost Moves Up in NYC",
      subtitle:
        "I conducted research on the company's green roof, assisted in its maintenance, and learned about their sustainable farming practices.",
      image: require("./assets/images/Durst.png"),
      imageAlt: "Durst Logo",
      footerLink: [
        {
          name: "The Wall Street Journal - Compost Moves Up in NYC",
          url: "https://www.wsj.com/articles/SB10001424127887323968304578249811833655742"
        },
        {
          name: "Green Roof - Video",
          url: "https://vimeo.com/64579546"
        }
      ]
    },
    {
      title: "Gates Millennium Scholar",
      subtitle:
        "Selected as one of the less than 2% of 53,000 applicants to receive a Gates Millennium Scholarship, amounting to over half a million dollars in funds applicable to any school in the US and the US Virgin Islands for up to 10 years.",
      image: require("./assets/images/GMS.png"),
      imageAlt: "GMS Logo",
      footerLink: [

      ]
    },

    {
      title: "Green Building Project",
      subtitle: "Participated in a summer research project at The Cooper Union, leading a team of high school engineers in researching and designing sustainable building and construction practices.",
      image: require("./assets/images/cooper_logo.jpg"),
      imageAlt: "Cooper Union Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://cooper.edu/sites/default/files/uploads/assets/site/files/MEDIA_UPDATES8_24.pdf"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "samuelfok629@gmail.com"
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
