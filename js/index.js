console.clear();

//Show/Hide Answercard

const buttonShowAnswer1 = document.querySelector(
  '[data-js="button-show-answer_1"]'
);

const Box1 = document.querySelector('[data-js="qabox_1"]');

buttonShowAnswer1.addEventListener("click", () => {
  Box1.classList.toggle("qabox--answer-visible");
});

const buttonShowAnswer2 = document.querySelector(
  '[data-js="button-show-answer_2"]'
);

const Box2 = document.querySelector('[data-js="qabox_2"]');

buttonShowAnswer2.addEventListener("click", () => {
  Box2.classList.toggle("qabox--answer-visible");
});

//Switch bookmarkicon on buttonclick + Anzeige auf Bookmarked-Page

//Dark-Mode

//Counter

//Categorien-Keywords?
//Change Userpic/-name?
