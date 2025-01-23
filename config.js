const config = {
  profile: {
    name: "Manny Almodovar",
    role: "Junior Fullstack Developer",
    image: "./images/IMG_3189.jpg",
    brief: `Junior Fullstack Developer with a sprinkle of gaming`,
    bio: `Equipped for delivering innovative solutions that align with
      business goals and enhance user experience. Whether it's
      developing a sleek, modern website, designing a dynamic
      application, or optimizing workflows for scalability and
      performance, I thrive on turning ideas into reality. Let’s
      create something amazing together!`,
    socials: [
      {
        name: "Download CV",
        image: "./images/download-solid.svg",
        link: "./files/resume.pdf",
        download: true,
      },
      {
        name: "GitHub",
        image: "./images/github-purple.svg",
        link: "https://github.com/MannyOnBrazzers",
      },
      {
        name: "LinkedIn",
        image: "./images/linkedin-brands-solid.svg",
        link: "https://www.linkedin.com/in/manny-almodovar/",
      },
      {
        name: "X",
        image: "./images/square-x-twitter-brands-solid.svg",
        link: "https://x.com/MannyOnBrazzers",
      },
      {
        name: "Instagram",
        image: "./images/square-instagram-brands-solid.svg",
        link: "https://www.instagram.com/mannyalmodovar/",
      },
      {
        name: "Discord",
        image: "./images/discord-brands-solid.svg",
        link: "https://discordapp.com/users/284812973036404736",
      },
    ],
  },
  stats: [
    { label: "Years of Experience", value: 5 },
    { label: "Projects Completed", value: 7 },
    { label: "Technical Skills", value: 13 },
    { label: "Happy Clients", value: 10 },
  ],
  skills: [
    { label: "HTML", image: "./images/html.svg", efficiency: 4 },
    { label: "CSS3", image: "./images/css.svg", efficiency: 4 },
    { label: "JavaScript", image: "./images/js.svg", efficiency: 4 },
    { label: "React", image: "./images/react.svg", efficiency: 1 },
    { label: "Git", image: "./images/git.svg", efficiency: 3 },
    { label: "BEM", image: "./images/bem.svg", efficiency: 4 },
    { label: "Figma", image: "./images/figma.svg", efficiency: 3 },
    { label: "Webpack", image: "./images/webpack.svg", efficiency: 2 },
    { label: "GitHub", image: "./images/github.svg", efficiency: 5 },
    { label: "NodeJS", image: "./images/node.svg", efficiency: 3 },
    { label: "MongoDB", image: "./images/mongo.svg", efficiency: 3 },
    { label: "Lua", image: "./images/lua.svg", efficiency: 5 },
    { label: "Jira", image: "./images/jira.svg", efficiency: 3 },
  ],
  projects: {
    stats: [
      {
        label: "Projects completed",
        images: {
          dark: "./images/fire.svg",
          light: "./images/fire-black.svg",
        },
        value: 7,
      },
      {
        label: "Cup of coffee",
        images: {
          dark: "./images/coffee.svg",
          light: "./images/coffee-black.svg",
        },
        value: 8734,
      },
      {
        label: "Liked projects",
        images: {
          dark: "./images/heart.svg",
          light: "./images/heart-black.svg",
        },
        value: 6,
      },
    ],
    work: [
      {
        name: "Solunify",
        description: `An open-source, customizable landing page tailored for solar companies, designed to showcase renewable energy solutions with modern aesthetics, intuitive navigation, and performance optimization. Built to help businesses in the solar industry effectively highlight their services, connect with clients, and promote sustainable energy initiatives. This project is not yet fully completed but here is a list of features.`,
        features: [
          "Responsive and Mobile-Friendly",
          "Service Showcase",
          "Benefits Section",
          "Contact Form with Lead Capture",
          "Easy Deployment",
        ],
        images: ["./images/solunify/solunify1.png"],
        links: [
          {
            label: "Video Demo",
            url: "https://mannyonbrazzers.github.io/solunify/",
          },
          {
            label: "GitHub",
            url: "https://github.com/MannyOnBrazzers/solunify",
          },
        ],
        tags: ["Website", "Public"],
        languages: [
          { name: "CSS", percentage: 57.9 },
          { name: "HTML", percentage: 42.1 },
        ],
      },
      {
        name: "Radar System",
        description: `Radar & Lidar system including a settings menu made for the CFX platform. Settings allows full control of the theme of the radar, and full scalability and position of all UI's on the clients screen. This entire system retrieves data from the CFX platform using Lua`,
        features: [
          "Complete UI control, allowing the user to move around all UI's, change scale, and alter themes. All changes are saved and will never require you to do it again.",
        ],
        images: ["./images/radar/radar.png"],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/Brazzers-Development/brazzers_radar",
          },
        ],
        tags: ["UI/UX Design", "Private"],
        languages: [
          { name: "Lua", percentage: 52.7 },
          { name: "JavaScript", percentage: 20.7 },
          { name: "CSS", percentage: 15.7 },
          { name: "HTML", percentage: 10.9 },
        ],
      },
      {
        name: "Business Application",
        description: `The app's user interface is sleek and modern, designed
          with a flexbox layout to ensure alignment and
          responsiveness across various screen sizes. The intended system is to be tied
          into the CFX platform utilizing Lua to retrieve the data, but can be used for many
          different cases.`,
        features: [
          "Sleek and modern design",
          "Role Management",
          "Employee Management",
        ],
        images: ["./images/phone-app/phone-app-employment.png"],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/Rush-Hour-Roleplay/phone_business_app",
          },
        ],
        tags: ["UI/UX Design", "Phone App", "Private"],
        languages: [
          { name: "JavaScript", percentage: 49.4 },
          { name: "CSS", percentage: 35.0 },
          { name: "HTML", percentage: 15.6 },
        ],
      },
      {
        name: "Laptop",
        description: `This project is a sophisticated and fully functional laptop system developed using JavaScript, HTML, and CSS. The system offers a dynamic and interactive user experience, featuring 16 unique applications that simulate real-world laptop functionalities. Each application is seamlessly integrated into the system, providing a cohesive and intuitive interface.`,
        features: [
          "Comprehensive App Suite",
          "Modern UI/UX Design",
          "JavaScript-Powered Interactivity",
          "App Diversity",
        ],
        images: [
          "./images/laptop/laptop1.png",
          "./images/laptop/laptop2.png",
          "./images/laptop/laptop3.png",
          "./images/laptop/laptop4.png",
          "./images/laptop/laptop5.png",
          "./images/laptop/laptop6.png",
          "./images/laptop/laptop7.png",
          "./images/laptop/laptop8.png",
          "./images/laptop/laptop9.png",
          "./images/laptop/laptop10.png",
          "./images/laptop/laptop11.png",
          "./images/laptop/laptop12.png",
          "./images/laptop/laptop13.png",
          "./images/laptop/laptop14.png",
          "./images/laptop/laptop15.png",
          "./images/laptop/laptop16.png",
          "./images/laptop/laptop17.png",
          "./images/laptop/laptop18.png",
          "./images/laptop/laptop19.png",
          "./images/laptop/laptop20.png",
          "./images/laptop/laptop21.png",
          "./images/laptop/laptop22.png",
        ],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/Rush-Hour-Roleplay/Laptop",
          },
        ],
        tags: ["Application", "UI/UX Design", "Private"],
        languages: [
          { name: "JavaScript", percentage: 37.0 },
          { name: "CSS", percentage: 34.9 },
          { name: "HTML", percentage: 28.1 },
        ],
      },
      {
        name: "Nexus Menu",
        description: `This project is a comprehensive game User Interface (UI) developed using JavaScript, HTML, and CSS. The UI integrates seamlessly with the game, offering players an intuitive and visually engaging experience. It is designed to enhance player interaction through a skill system, mission engagement interface, emote selection menu, and a robust settings menu.`,
        features: [
          "Dynamic Content",
          "Polished Design",
          "Modular Architecture",
          "Smooth Animations",
        ],
        images: [
          "./images/nexus/nexus1.png",
          "./images/nexus/nexus2.png",
          "./images/nexus/nexus3.png",
          "./images/nexus/nexus4.png",
        ],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/Rush-Hour-Roleplay/specialization_menu",
          },
        ],
        tags: ["Game Design", "UI/UX Design", "Private"],
        languages: [
          { name: "JavaScript", percentage: 41.0 },
          { name: "CSS", percentage: 37.8 },
          { name: "HTML", percentage: 21.2 },
        ],
      },
      {
        name: "HUD",
        description: `This project is a highly functional and visually engaging Heads-Up Display (HUD) developed using JavaScript, HTML, and CSS for an immersive in-game experience. The HUD is designed to provide real-time feedback to players, combining critical gameplay elements such as a vehicle dashboard, a map HUD, and a directional compass into a seamless interface.`,
        features: [
          "Real-Time Feedback",
          "Responsive Design",
          "Smooth Animations",
          "Immersive Integration",
          "Clutter-Free Layout",
        ],
        images: ["./images/hud/hud.png"],
        links: [
          { label: "GitHub", url: "https://github.com/Rush-Hour-Roleplay/hud" },
        ],
        tags: ["Game Design", "UI/UX  Design", "Private"],
        languages: [
          { name: "HTML", percentage: 40.0 },
          { name: "JavaScript", percentage: 38.4 },
          { name: "CSS", percentage: 21.6 },
        ],
      },
      {
        name: "Character Customization",
        description: `This project is a fully interactive clothing menu developed using JavaScript, HTML, and CSS, designed to enhance in-game character customization. The menu allows players to personalize their characters with a variety of clothing options, accessories, and styles. With a sleek and responsive interface, the clothing menu provides a user-friendly experience while integrating seamlessly with the game environment.`,
        features: [
          "Preview System",
          "Sliders",
          "Toggle Buttons",
          "Color Palette",
        ],
        images: ["./images/clothing/clothing.png"],
        links: [
          {
            label: "GitHub",
            url: "https://github.com/Rush-Hour-Roleplay/clothing_menu",
          },
        ],
        tags: ["Game Design", "UI/UX  Design", "Private"],
        languages: [
          { name: "HTML", percentage: 84.7 },
          { name: "JavaScript", percentage: 8.8 },
          { name: "CSS", percentage: 6.5 },
        ],
      },
    ],
  },
};
