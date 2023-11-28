console.clear();

//Show/Hide Answercard

function addToggleClassListener(buttonselector, boxselector, clazz) {
  const button = document.querySelector(buttonselector);
  const box = document.querySelector(boxselector);

  if (button !== null) {
    button.addEventListener("click", () => {
      box.classList.toggle(clazz);
    });
  }
}

addToggleClassListener(
  '[data-js="button-show-answer_1"]',
  '[data-js="qabox_1"]',
  "qabox--answer-visible"
);
addToggleClassListener(
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

addToggleClassListener(
  '[data-js="bookmark-button1"]',
  '[data-js="qabox_1"]',
  "qabox--bookmarked"
);

addToggleClassListener(
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
  buttonShowAnswer.textContent = "Answer";
  section.append(buttonShowAnswer);

  const spanShow = document.createElement("span");
  spanShow.classList.add("button-show-answer_show");
  spanShow.textContent = "Show";
  buttonShowAnswer.append(spanShow);

  const spanHide = document.createElement("span");
  spanShow.classList.add("button-show-answer_hide");
  spanShow.textContent = "Hide";
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
}

//Text field counter

const questionInput = document.querySelector("#your-question");
const characterDisplay = document.querySelector(
  '[data-js="remaining-characters"]'
);

questionInput.addEventListener("input", (event) => {
  const currentCharacterCount = event.target.value.length;
  characterDisplay.textContent = 150 - currentCharacterCount;
});

const answerInput = document.querySelector("#your-answer");
const characterDisplay2 = document.querySelector(
  '[data-js="remaining-characters2"]'
);

answerInput.addEventListener("input", (event) => {
  const currentCharacterCount = event.target.value.length;
  characterDisplay2.textContent = 150 - currentCharacterCount;
});

const tagInput = document.querySelector("#tag");
const characterDisplay3 = document.querySelector(
  '[data-js="remaining-characters3"]'
);

tagInput.addEventListener("input", (event) => {
  const currentCharacterCount = event.target.value.length;
  characterDisplay3.textContent = 150 - currentCharacterCount;
});

//Categorien-Keywords?

//Change Userpic/-name?
