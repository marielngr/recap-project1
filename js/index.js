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

const formButtonSubmit = document.querySelector('[data-js="button-submit"]');
const form = document.querySelector('[data-js="form"]');
const yourQuestion = document.querySelector("#your-question");

if (form !== null) {
  form.addEventListener("submit", (event) => {
    //prevent default behavior
    event.preventDefault();

    //read entered data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(event.target.elements);
    console.log(data);

    // Funktionsaufruf für newCard

    //reset all formfields after submit and refocus
    event.target.reset();
    event.target.yourQuestion.focus();
  });
}

//Counter

//Categorien-Keywords?

//Change Userpic/-name?
