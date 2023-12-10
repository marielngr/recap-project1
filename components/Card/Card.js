import { cards } from "../../data/data.js";
//import Bookmarkfunction!

export function Card(props) {
  console.log("hallo, hier bin ich in der card");
  console.log(props);

  const card = document.createElement("article");

  card.setAttribute("data-js", "qabox");

  card.classList.add("qabox");

  //fix css --> .card
  card.innerHTML = `
            <button class="button-bookmark" data-js="bookmark-button"></button>
            <p class="question" data-js="question"></p>
            <button class="button-show-answer" data-js="button-show-answer">
              <span class="button-show-answer_show">Show</span>
              <span class="button-show-answer_hide">Hide</span> Answer
            </button>
            <p class="answer" data-js="answer"></p>
            <ul class="categories" aria-label="categories" data-js="categories">
            </ul>
      `;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="button-show-answer"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="categories"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button"]'
  );

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("card__tag");
    //css anpassen
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  return card;
}
// als nächstes Import toggleElement von utils (erst in utils verschieben)
