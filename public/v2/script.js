const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const contactDialog = document.querySelector("[data-contact-dialog]");
const contactTriggers = document.querySelectorAll("[data-contact-trigger]");
const contactClosers = document.querySelectorAll("[data-contact-close]");
const methodSection = document.querySelector("[data-method-section]");
const methodStageRoot = document.querySelector("[data-method-stage-root]");
const methodFlowRoot = document.querySelector("[data-method-flow-root]");
const methodStageTriggers = document.querySelectorAll("[data-method-stage-trigger]");
const methodStageCards = document.querySelectorAll("[data-method-stage-card]");
const methodFlowItems = document.querySelectorAll("[data-method-flow]");
let activeContactTrigger = null;

const setHeaderState = () => {
  if (!header) return;
  header.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    document.body.dataset.menuOpen = expanded ? "false" : "true";
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.dataset.menuOpen = "false";
    }
  });
}

const methodStages = ["build", "create", "amplify"];

const setMethodStage = (stage) => {
  if (!methodStages.includes(stage)) return;

  [methodSection, methodStageRoot, methodFlowRoot].forEach((element) => {
    if (element) {
      element.dataset.activeStage = stage;
    }
  });

  methodStageTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.methodStage === stage;
    trigger.classList.toggle("is-active", isActive);
    trigger.setAttribute("aria-pressed", String(isActive));
  });

  methodStageCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.methodStageCard === stage);
  });

  methodFlowItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.methodFlow === stage);
  });
};

methodStageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    setMethodStage(trigger.dataset.methodStage);
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    const currentIndex = methodStages.indexOf(trigger.dataset.methodStage);
    if (currentIndex === -1) return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + direction + methodStages.length) % methodStages.length;
    const nextStage = methodStages[nextIndex];
    const nextTrigger = document.querySelector(`.method-title__stage[data-method-stage="${nextStage}"]`);

    setMethodStage(nextStage);

    if (nextTrigger instanceof HTMLElement) {
      nextTrigger.focus();
    }
  });
});

const openContactDialog = (trigger) => {
  if (!contactDialog) return;
  activeContactTrigger = trigger;
  contactDialog.hidden = false;
  document.body.dataset.contactOpen = "true";

  const firstOption = contactDialog.querySelector(".contact-option");
  if (firstOption instanceof HTMLElement) {
    firstOption.focus();
  }
};

const closeContactDialog = () => {
  if (!contactDialog || contactDialog.hidden) return;
  contactDialog.hidden = true;
  document.body.dataset.contactOpen = "false";

  if (activeContactTrigger instanceof HTMLElement) {
    activeContactTrigger.focus();
  }
};

contactTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openContactDialog(trigger));
});

contactClosers.forEach((closer) => {
  closer.addEventListener("click", closeContactDialog);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeContactDialog();
  }
});
