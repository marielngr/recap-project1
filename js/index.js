console.clear();

//Show/Hide Answercard

function addToggleClassListenerBySelectors(buttonselector, boxselector, clazz) {
  const button = document.querySelector(buttonselector);
  const box = document.querySelector(boxselector);

  addToggleClassListenerToElements(button, box, clazz);
}

function addToggleClassListenerToElements(button, box, clazz) {
  if (button !== null) {
    button.addEventListener("click", () => {
      box.classList.toggle(clazz);
    });
  }
}

addToggleClassListenerBySelectors(
  '[data-js="button-show-answer_1"]',
  '[data-js="qabox_1"]',
  "qabox--answer-visible"
);
addToggleClassListenerBySelectors(
  '[data-js="button-show-answer_2"]',
  '[data-js="qabox_2"]',
  "qabox--answer-visible"
);

//Dark-Mode

const checkboxDarkMode = document.querySelector('[data-js="darkModeToggle"]');

if (checkboxDarkMode) {
  checkboxDarkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}

//Switch bookmarkicon on buttonclick + entsprechende Anzeige auf Bookmarked-Page (fehlt noch)

addToggleClassListenerBySelectors(
  '[data-js="bookmark-button1"]',
  '[data-js="qabox_1"]',
  "qabox--bookmarked"
);

addToggleClassListenerBySelectors(
  '[data-js="bookmark-button2"]',
  '[data-js="qabox_2"]',
  "qabox--bookmarked"
);

// const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
// console.log(bookmarkButton);

// let isDefaultBookmark = true;

// if (bookmarkButton) {
//   bookmarkButton.addEventListener("click", () => {
//     if (isDefaultBookmark) {
//       bookmarkButton.style.backgroundImage =
//         "url('../../assets/bookmark-regular.svg')";
//     } else {
//       bookmarkButton.style.backgroundImage =
//         "url('../../assets/bookmark-solid.svg')";
//     }

//     isDefaultBookmark = !isDefaultBookmark;
//   });
// }

//Form - Submit-button

const formButtonSubmit = document.querySelector('[data-js="buttonSubmit"]');
const form = document.querySelector('[data-js="form"]');
// const yourQuestion = document.querySelector("#your-question");

if (form !== null) {
  form.addEventListener("submit", (event) => {
    //prevent default behavior
    event.preventDefault();

    //read entered data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(event.target.elements);
    console.log(data);

    // Funktionsaufruf für newCard mit Argumenten
    createNewCard(data.question, data.answer, data.tag);

    //reset all formfields after submit and refocus
    event.target.reset();
    event.target.elements.question.focus();
  });
}

//Erstellung der DOM-Elemente für neue Karten + Parameter für Eingabetexte

const mainElement = document.querySelector("body > main");

function createNewCard(question, answer, tag) {
  const section = document.createElement("section");
  section.classList.add("qabox");

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("button-bookmark");
  buttonBookmark.setAttribute("data-js", "bookmark-button");
  section.append(buttonBookmark);

  const pQuestion = document.createElement("p");
  pQuestion.classList.add("question");
  pQuestion.textContent = question;
  section.append(pQuestion);

  const buttonShowAnswer = document.createElement("button");
  buttonShowAnswer.classList.add("button-show-answer");
  buttonShowAnswer.setAttribute("data-js", "bookmark-button");
  section.append(buttonShowAnswer);

  const spanShow = document.createElement("span");
  spanShow.classList.add("button-show-answer_show");
  spanShow.textContent = "Show Answer";
  buttonShowAnswer.append(spanShow);

  const spanHide = document.createElement("span");
  spanHide.classList.add("button-show-answer_hide");
  spanHide.textContent = "Hide Answer";
  buttonShowAnswer.append(spanHide);

  const pAnswer = document.createElement("p");
  pAnswer.classList.add("answer");
  pAnswer.textContent = answer;
  section.append(pAnswer);

  const ul = document.createElement("ul");
  ul.classList.add("categories");
  section.append(ul);

  const li = document.createElement("li");
  li.textContent = tag;
  ul.append(li);

  mainElement.append(section);

  addToggleClassListenerToElements(
    buttonShowAnswer,
    section,
    "qabox--answer-visible"
  );

  addToggleClassListenerToElements(
    buttonBookmark,
    section,
    "qabox--bookmarked"
  );
}

//Text field counter

//Diese Funktion fügt einem Inputelement, das dem gegebenen Selektor entspricht, einen Eventlistener hinzu, der bei jedem Input die verbleibenden Zeichen ausrechnet und in dem Element, das durch den Outputselektor spezifiziert wird, anzeigt.

function addTextFieldCounter(inputSelector, outputSelector) {
  //definiere Constante,  für Selektor eines gegebenen Inputelements
  const input = document.querySelector(inputSelector);

  //definiere Const für Ausgabe
  const output = document.querySelector(outputSelector);

  if (input) {
    //füge auf Input Eventlistener hinzu
    input.addEventListener("input", (event) => {
      //lokale const für aktuelle Eingabeläge
      //textContent des Ausgabeelements anpassen
      const currentCharacterCount = event.target.value.length;
      output.textContent = 150 - currentCharacterCount;
    });
  }
}

addTextFieldCounter("#your-question", '[data-js="remaining-characters"]');

// const questionInput = document.querySelector("#your-question");
// const characterDisplay = document.querySelector(
//   '[data-js="remaining-characters"]'
// );

// questionInput.addEventListener("input", (event) => {
//   const currentCharacterCount = event.target.value.length;
//   characterDisplay.textContent = 150 - currentCharacterCount;
// });

addTextFieldCounter("#your-answer", '[data-js="remaining-characters2"]');

addTextFieldCounter("#tag", '[data-js="remaining-characters3"]');

// SPA

const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
      allLinks.forEach((link) => {
        link.parentElement.classList.remove("active");
      });
    });
    const hrefAttribute = link.getAttribute("href");
    const currentPage = document.querySelector(hrefAttribute);
    currentPage.classList.add("current");
    link.parentElement.classList.add("active");
  });
});

//bookmarked js kaputt, da 2x gleicher name (bookmark-button 1) --> auf Array umstellen und for.each - ggfls querySelektor auf QA-Box

//Inhalt von html weg in js

//css-klasse formular Name fixen

//js modules einführen und js components
