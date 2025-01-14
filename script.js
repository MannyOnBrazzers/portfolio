import { CountUp } from "./node_modules/countup.js/dist/countUp.min.js";

const elements = {
  nav: document.querySelectorAll(".nav__link"),
  home: {
    page: document.getElementById("home"),
    name: document.querySelector(".home__bio_info_intro"),
    role: document.querySelector(".home__bio_info_title"),
    bio: document.querySelector(".home__bio_info_text"),
    image: document.querySelector(".home__bio_image"),
    buttons: document.querySelector(".home__bio_social"),
    downloadTemplate: document.getElementById("download-button").content,
    socialTemplate: document.getElementById("social-button").content,
    stats: document.querySelector(".home__stats"),
    statTemplate: document.getElementById("stat").content,
  },
  skills: {
    page: document.getElementById("skills"),
    list: document.querySelector(".skills__content"),
    template: document.getElementById("skill").content,
  },
  projects: {
    stats: document.querySelector(".projects__stats"),
    statTemplate: document.getElementById("project-stat").content,
    work: document.querySelector(".projects__work"),
    workTemplate: document.getElementById("project").content,
  },
  overlay: {
    menu: document.querySelector(".overlay"),
    close: document.querySelector(".overlay__close"),
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function animateElement(element, duration = 1000) {
  element.style.display = "flex";
  element.style.opacity = "0";

  setTimeout(() => {
    element.style.transition = `opacity ${duration / 1000}s ease`;
    element.style.opacity = "1";
  }, 10);
}

function hideAllSections() {
  document.querySelectorAll("main section").forEach((section) => {
    section.style.display = "none";
  });
}

function showSection(id = window.location.hash, duration = 1000) {
  const section = document.querySelector(id);
  if (section) {
    animateElement(section);
  }

  updateActiveLink(id);
}

function updateActiveLink(activeId) {
  const { nav } = elements;
  nav.forEach((link) => {
    if (link.getAttribute("href") === activeId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function initialize() {
  const { nav } = elements;
  nav.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("href");
      window.history.pushState(null, "", target);

      if (target === "#home") {
        home();
      } else if (target === "#skills") {
        skills();
      } else if (target === "#projects") {
        projects();
      }
    });
  });

  home();
}

function home() {
  const { home } = elements;

  hideAllSections();

  home.name.textContent = `Hey, I am ${config.profile.name.split(" ")[0]}`;
  home.role.textContent = config.profile.role;
  home.bio.textContent = config.profile.bio;
  home.image.src = config.profile.image;

  renderSocialButtons();
  renderStats();
  showSection("#home");

  function renderSocialButtons() {
    home.buttons.innerHTML = "";
    config.profile.socials.forEach((social) => {
      const buttonElement = createButtonElement(social);
      home.buttons.appendChild(buttonElement);
    });
  }

  function renderStats() {
    home.stats.innerHTML = "";
    config.stats.forEach((stat) => {
      const statElement = createStatElement(stat);
      home.stats.appendChild(statElement);
    });
  }

  /**
   * Create a button element for a given social configuration
   * @param {Object} social - Social configuration object
   * @returns {HTMLElement} The created button element
   */
  function createButtonElement(social) {
    const template = social.download
      ? home.downloadTemplate.cloneNode(true)
      : home.socialTemplate.cloneNode(true);

    const linkElement = template.querySelector("a");

    if (linkElement) {
      linkElement.href = social.link || "#";

      if (social.download) {
        linkElement.download = social.link.split("/").pop();
      } else {
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";
      }
    }

    const buttonIcon = linkElement.querySelector(".home__bio_social-icon");
    if (buttonIcon) buttonIcon.src = social.image;

    const buttonText = linkElement.querySelector(
      ".home__bio_social-button_text"
    );
    if (buttonText) buttonText.textContent = social.name;

    return template;
  }

  /**
   * Create a stat element for a given stat configuration
   * @param {Object} stat - Stat configuration object
   * @returns {HTMLElement} The created stat element
   */
  function createStatElement(stat) {
    const template = home.statTemplate.cloneNode(true);

    const titleElement = template.querySelector(".home__stats_item-title");
    const descriptionElement = template.querySelector(
      ".home__stats_item-description"
    );

    descriptionElement.textContent = stat.label;
    const countUp = new CountUp(titleElement, stat.value, {
      duration: 5,
      useEasing: true,
      separator: ",",
    });

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }

    return template;
  }
}

function skills() {
  const { skills } = elements;

  hideAllSections();

  renderSkills();
  showSection("#skills");

  function renderSkills() {
    skills.list.innerHTML = "";
    config.skills.forEach((skill) => {
      const skillElement = createSkillElement(skill);
      skills.list.appendChild(skillElement);
    });
  }

  function createSkillElement(skill) {
    const template = skills.template.cloneNode(true);

    template.querySelector(".skills__content_item-title").textContent =
      skill.label;
    template.querySelector(".skills__content_item-image").src = skill.image;

    const rangeItems = template.querySelectorAll(
      ".skills__content_item-range_item"
    );
    for (let i = 0; i < skill.efficiency; i++) {
      if (rangeItems[i]) {
        rangeItems[i].classList.add("active");
      }
    }

    return template;
  }
}

function projects() {
  const { projects } = elements;

  hideAllSections();
  renderProjectStats();
  renderProjects();
  showSection("#projects");

  function renderProjectStats() {
    projects.stats.innerHTML = "";
    config.projects.stats.forEach((stat) => {
      const statElement = createStatElement(stat);
      projects.stats.appendChild(statElement);
    });
  }

  function renderProjects() {
    projects.work.innerHTML = "";
    config.projects.work.forEach((project) => {
      const projectElement = createProjectElement(project);
      projects.work.appendChild(projectElement);
    });
  }

  function createStatElement(stat) {
    const template = projects.statTemplate.cloneNode(true);

    const titleElement = template.querySelector(
      ".projects__stats_item_block-title"
    );
    const descriptionElement = template.querySelector(
      ".projects__stats_item_block-description"
    );

    descriptionElement.textContent = stat.label;
    const countUp = new CountUp(titleElement, stat.value, {
      duration: 5,
      useEasing: true,
      separator: ",",
    });

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }

    return template;
  }

  function createProjectElement(project) {
    const template = projects.workTemplate.cloneNode(true);

    template.querySelector(".projects__work_item-overlay_title").textContent =
      project.name;

    const elemetImage = template.querySelector(".projects__work_item-image");
    elemetImage.src = project.image;

    elemetImage.addEventListener("click", () => {
      overlayModal(project);
    });

    return template;
  }
}

initialize();
