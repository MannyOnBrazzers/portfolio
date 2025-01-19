import { CountUp } from "https://cdn.jsdelivr.net/npm/countup.js@2.0.8/dist/countUp.min.js";

const elements = {
  nav: document.querySelectorAll(".nav__link"),
  contact: document.querySelector(".header__button"),
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
    title: document.querySelector(".overlay__content_container_info-header"),
    profile: {
      image: document.querySelector(
        ".overlay__content_container_info-profile_image"
      ),
      name: document.querySelector(
        ".overlay__content_container_info-profile_block_name"
      ),
      availability: document.querySelector(
        ".overlay__content_container_info-profile_block_availability"
      ),
      button: document.querySelector(
        ".overlay__content_container_info-profile_button_text"
      ),
    },
    project: {
      image: document.querySelector(".overlay__content_container_info-image"),
      links: document.querySelector(".overlay__description_header_links"),
      linkTemplate: document.getElementById("overlay-link-text-button").content,
      tags: document.querySelector(".overlay__description_header_tags"),
      tagTemplate: document.getElementById("tag").content,
      description: document.querySelector(
        ".overlay__description_content_block_text"
      ),
      features: document.querySelector(
        ".overlay__description_content_block_indent"
      ),
      languages: document.querySelector(
        ".overlay__description_content_block_list"
      ),
      languageTemplate: document.getElementById("language").content,
    },
    footer: {
      name: document.querySelector(".overlay__footer_description_name"),
      description: document.querySelector(".overlay__footer_description_info"),
      button: document.querySelector(
        ".overlay__footer_description_info_button"
      ),
      header: document.querySelector(".overlay__footer_similar_header"),
      images: document.querySelector(".overlay__footer_similar_images"),
      template: document.getElementById("more-work").content,
    },
  },
  form: {
    menu: document.querySelector(".form"),
    close: document.querySelector(".form__container_close"),
    submit: document.querySelector(".form__container_button"),
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

      navigateTo(target);
    });
  });

  window.addEventListener("popstate", () => {
    navigateTo(window.location.hash || "#home");
  });

  navigateTo(window.location.hash || "#home");
}

function navigateTo(target) {
  if (target === "#home") {
    home();
  } else if (target === "#skills") {
    skills();
  } else if (target === "#projects") {
    projects();
  } else {
    hideAllSections();
  }

  updateActiveLink(target);
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

    const imageElement = template.querySelector(".projects__stats_item-image");

    imageElement.src = stat.image;
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
    elemetImage.src =
      project.images.length >= 1 ? project.images[0] : project.images;

    elemetImage.addEventListener("click", () => {
      overlayModal(project);
    });

    return template;
  }
}

function overlayModal(project) {
  const { overlay } = elements;

  overlay.title.textContent = project.name;
  overlay.profile.image.src = config.profile.image;
  overlay.profile.name.textContent = config.profile.name;
  overlay.profile.availability.textContent = "Available for work";

  overlay.project.image.src = project.images.length
    ? project.images[0]
    : project.images;

  renderProjectImages();
  renderProjectInfo();
  overlay.menu.classList.add("opened");

  function renderProjectImages() {
    const { imageTemplate, image } = overlay.project;
    const navPrev = document.querySelector(".swiper-button-prev");
    const navNext = document.querySelector(".swiper-button-next");
    const hasMultipleImages = project.images.length > 1;

    let currentIndex = 0;

    [navPrev, navNext].forEach(
      (nav) => (nav.style.display = hasMultipleImages ? "block" : "none")
    );

    if (!hasMultipleImages) return;

    navNext.replaceWith(navNext.cloneNode(true));
    navPrev.replaceWith(navPrev.cloneNode(true));

    const newNavNext = document.querySelector(".swiper-button-next");
    const newNavPrev = document.querySelector(".swiper-button-prev");

    newNavNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % project.images.length;
      updateMainImage(currentIndex);
    });

    newNavPrev.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + project.images.length) % project.images.length;
      updateMainImage(currentIndex);
    });

    function updateMainImage(index) {
      currentIndex = index;
      image.src = project.images[currentIndex];
      imageList
        .querySelectorAll(".overlay__info-images_more_image")
        .forEach((thumb, thumbIndex) => {
          thumb.classList.toggle("selected", thumbIndex === currentIndex);
        });
    }
  }

  function renderProjectInfo() {
    const { links, tags, description, features, languages } = overlay.project;

    renderLinks();
    renderTags();
    renderDescription();
    renderLanguages();
    renderFooter();

    function renderLinks() {
      links.innerHTML = "";
      project.links.forEach((link) => {
        const template = overlay.project.linkTemplate.cloneNode(true);
        const linkElement = template.querySelector("a");

        if (linkElement) {
          linkElement.textContent = link.label || "";
          linkElement.href = link.url || "#";
          linkElement.target = "_blank";
          linkElement.rel = "noopener noreferrer";
        }

        links.appendChild(template);
      });
    }

    function renderTags() {
      tags.innerHTML = "";
      project.tags.forEach((tag) => {
        const template = overlay.project.tagTemplate.cloneNode(true);
        template.querySelector(".overlay__description_header_tag").textContent =
          tag;
        tags.appendChild(template);
      });
    }

    function renderDescription() {
      description.textContent = project.description;
      features.innerHTML = project.features
        .map((feature) => `• ${feature}<br />`)
        .join("");
    }

    function renderLanguages() {
      languages.innerHTML = "";

      project.languages.forEach((language) => {
        const template = overlay.project.languageTemplate.cloneNode(true);

        template.querySelector(
          ".overlay__content_block_item_header_name"
        ).textContent = language.name;

        template.querySelector(
          ".overlay__content_block_item_header_percentage"
        ).textContent = `${language.percentage}%`;

        const bars = template.querySelectorAll(
          ".overlay__content_block_item_bar"
        );
        const filledBarsCount = Math.round(
          (language.percentage / 100) * bars.length
        );

        bars.forEach((bar, index) => {
          if (index < filledBarsCount) {
            bar.classList.add("filled");
          }
        });

        languages.appendChild(template);
      });
    }

    function renderFooter() {
      overlay.footer.name.textContent = config.profile.name;
      overlay.footer.description.textContent = config.profile.brief;
      overlay.footer.header.textContent = `More by ${config.profile.name}`;

      overlay.footer.images.innerHTML = "";

      config.projects.work.forEach((moreProjects) => {
        if (moreProjects.name !== project.name) {
          const template = overlay.footer.template.cloneNode(true);
          const image = template.querySelector(
            ".overlay__footer_similar_images_item-image"
          );

          image.src =
            moreProjects.images.length >= 1
              ? moreProjects.images[0]
              : moreProjects.images;

          template.querySelector(
            ".overlay__footer_similar_images_item-overlay_title"
          ).textContent = moreProjects.name;

          image.addEventListener("click", () => {
            overlayModal(moreProjects);
          });

          overlay.footer.images.appendChild(template);
        }
      });
    }
  }
}

function formModal() {
  const { form } = elements;
  form.menu.classList.add("opened");
}

/* -------------------------------------------------------------------------- */
/*                                  Listeners                                 */
/* -------------------------------------------------------------------------- */

// Open Form Modal
elements.contact.addEventListener("click", () => {
  formModal();
});

elements.overlay.footer.button.addEventListener("click", () => {
  formModal();
});

elements.overlay.profile.button.addEventListener("click", () => {
  formModal();
});

// Close Form Modal
elements.form.menu.addEventListener("click", (event) => {
  if (event.target === elements.form.menu) {
    elements.form.menu.classList.remove("opened");
  }
});

// Close Form Modal
elements.form.close.addEventListener("click", () => {
  elements.form.menu.classList.remove("opened");
});

// Close Overlay Modal
elements.overlay.menu.addEventListener("click", (event) => {
  if (event.target === elements.overlay.menu) {
    elements.overlay.menu.classList.remove("opened");
  }
});

// Close Overlay Modal
elements.overlay.close.addEventListener("click", () => {
  elements.overlay.menu.classList.remove("opened");
});

// Form submission
elements.form.menu.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(elements.form.menu);

  try {
    const response = await fetch(elements.form.menu.action, {
      method: elements.form.menu.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      elements.form.menu.reset();
      elements.form.menu.classList.remove("opened");
    } else {
      alert(
        "Oops! There was a problem submitting your form. Please try again."
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

initialize();
