/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Irfan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohamed Irfan Portfolio",
    type: "website",
    url: "https://mdi-yt.github.io/Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Irfan",
  logo_name: "Mohamed Irfan",
  nickname: "MDI",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1e7FjbvJrF152faUPSbb4wIwKkix-I21A/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/MDI-YT",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/MDI-YT",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohamed-irfan-mdi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:mohamedirfanp3@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_md._irfan_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML,CSS,Javascript",
        "⚡ Creating application backend in Python-Flask",
        "⚡ Experience in using DataBases like Firebase, Sqlite",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Sqlite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mohamedirfanp",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mdi_12",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#323754",
      },
      profileLink: "https://leetcode.com/Mohamed_Irfan_P/",
    },

  ],
};

const degrees = {
  degrees: [
    {
      title: "Saveetha Engineering College",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "sec-logo.png",
      alt_name: "Saveetha Engineering College",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Python, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "http://saveetha.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VPBT2HM9VLE5",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Crash Course on Python",
      subtitle: "- Andrew Ng",
      logo_path: "python-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/LVQVDG2637FM",
      alt_name: "crashcourseonpython.ai",
      color_code: "#00000099",
    },
    {
      title: "WhatsApp Stock Market Bot",
      subtitle: "- Rishabh Sharma",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ca98a1ad-f30f-4630-a137-64a55c6716ce/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Software Engineer Developer and Web Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Junior Web Developer",
          company: "Failsafe Hiring",
          company_url: "https://www.failsafehiring.com/",
          logo_path: "failsafe-logo.svg",
          duration: "DEC 2021 - MAY 2022",
          location: "Chennai, Tamilnadu",
          description:
            "I have worked with Failsafe Hiring for developing E-learning WebApp. I played a key role in developing the frontend and backend of the application. I also helped to deploy the application on Server.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "KKR Engineering",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "Jan 2021 - Mar 2021",
          location: "Chennai, Tamilnadu",
          description:
            "I had been playing a major role in making the custom software to scan and extract text from handwritten documents.Working with a team to convert all written documents into digitized format.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "CodeChef Volunteer - President",
          company: "CodeChef",
          company_url: "https://www.codechef.com/",
          logo_path: "cc-logo.svg",
          duration: "June 2020 - PRESENT",
          location: "Chennai, Tamilnadu",
          description:
            "I got an opportunity to lead a CodeChef Chapter of my College as a President.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create FullStack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_irfan.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Projects.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   // link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Chennai, Tamilnadu, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/nUcC2ZBTFqAXyGyZ7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8778942543",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  contactPageData,
};
