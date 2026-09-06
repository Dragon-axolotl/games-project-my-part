document.body.innerHTML = `
  <header class="site-header">
    <div class="site-header__container">

      <a class="site-logo" href="#">
        <span class="site-logo__code">&lt;/&gt;</span>
        <span class="site-logo__text">
          Coding
          <small>Magic</small>
        </span>
      </a>

      <nav class="site-nav">

        <div class="site-nav__dropdown" id="games-dropdown">
          <button class="site-nav__toggle" id="games-menu-toggle">
            Інтерактиви
            <span class="site-nav__arrow">⌄</span>
          </button>

          <div class="site-nav__menu" id="games-menu">
            <a class="site-nav__menu-link" href="#">Числовий</a>
            <a class="site-nav__menu-link" href="#">Ігровий</a>
            <a class="site-nav__menu-link" href="#">Ознайомчий</a>
          </div>
        </div>

        <a class="site-nav__link" href="#team">Наша команда</a>
        <a class="site-nav__link" href="#contacts">Контакти</a>

      </nav>

      <label class="theme-switch">
        <input
          class="theme-switch__input"
          id="theme-toggle"
          type="checkbox"
        >
        <span class="theme-switch__slider"></span>
      </label>

      <span class="site-header__user" id="user-name">
        Вітаємо, User!
      </span>

    </div>
  </header>

  <main class="site-main">

    <div class="site-main__content">

      <section class="games" id="games">

        <h1 class="games__title">
          Популярні інтерактивні ігри
        </h1>

        <!-- МІСЦЕ ДЛЯ ІНШИХ ІГОР -->

        <div class="games__placeholder">
          <!--
            Сюди потім можна вставити інші ігри.
            Наприклад:
            - Перевірка року народження
            - Вгадай число
            - Камінь-ножиці-папір
            - Калькулятор часу
            - Google динозавр
          -->
        </div>

        <!-- КАЛЬКУЛЯТОР -->

        <section class="game-section">
          <h2 class="game-section__title">
            Калькулятор
          </h2>

          <div class="calculator">

            <input
              class="calculator__input"
              id="first-number"
              type="number"
              placeholder="Введіть число"
            >

            <div class="calculator__operations">

              <button
                class="calculator__operation"
                data-operation="add"
              >
                +
              </button>

              <button
                class="calculator__operation"
                data-operation="subtract"
              >
                −
              </button>

              <button
                class="calculator__operation"
                data-operation="multiply"
              >
                ×
              </button>

              <button
                class="calculator__operation"
                data-operation="divide"
              >
                ÷
              </button>

            </div>

            <input
              class="calculator__input"
              id="second-number"
              type="number"
              placeholder="Введіть число"
            >

            <button
              class="calculator__equals"
              id="calculate-button"
            >
              =
            </button>

            <input
              class="calculator__result"
              id="calculator-result"
              placeholder="Результат"
              readonly
            >

          </div>
        </section>


        <!-- ФУТБОЛ -->

        <section class="game-section">
          <h2 class="game-section__title">
            Футбол
          </h2>

          <div class="football-field" id="football-field">

            <div
              class="football-field__ball"
              id="football-ball"
            >
              ⚽
            </div>

          </div>
        </section>

      </section>


      <!-- НАША КОМАНДА -->

      <section class="game-section team" id="team">

        <h2 class="game-section__title">
          Наша команда
        </h2>

        <div class="team-slider">

          <button
            class="team-slider__arrow"
            id="team-prev"
            type="button"
            aria-label="Попередній учасник"
          >
            ‹
          </button>

          <div class="team-slider__card">

            <div
              class="team-slider__photo"
              id="team-photo"
            >
              Фото
            </div>

            <h3
              class="team-slider__name"
              id="team-name"
            >
              Ім'я студента 1
            </h3>

            <p
              class="team-slider__description"
              id="team-description"
            >
              Інформація про роботу, яку він/вона виконав/ла
            </p>

            <div
              class="team-slider__dots"
              id="team-dots"
            ></div>

          </div>

          <button
            class="team-slider__arrow"
            id="team-next"
            type="button"
            aria-label="Наступний учасник"
          >
            ›
          </button>

        </div>

      </section>

    </div>

  </main>


  <!-- FOOTER -->

  <footer class="site-footer" id="contacts">

    <div class="site-footer__container">

      <div class="site-footer__logo site-logo">

        <span class="site-logo__code">
          &lt;/&gt;
        </span>

        <span class="site-logo__text">
          Coding
          <small>Magic</small>
        </span>

      </div>


      <div class="site-footer__info">

        <p>Тел: +38 (123) 456 78 90</p>
        <p>E-mail: codingmagic@gmail.com</p>
        <p>Facebook: CodingMagic</p>
        <p>Twitter: CodingMagic</p>
        <p>Instagram: CodingMagic</p>

      </div>


      <form
        class="subscribe-form"
        id="subscribe-form"
      >

        <div class="subscribe-form__content">

          <input
            class="subscribe-form__input"
            type="email"
            placeholder="Ваша ел. адреса..."
            required
          >

          <button
            class="subscribe-form__button"
            type="submit"
          >
            Підписатись
          </button>

        </div>

        <small class="subscribe-form__hint">
          Підписавшись, Ви дозволяєте отримувати інформацію
          про новинки на сайті.
        </small>

      </form>

    </div>

  </footer>


  <!-- WELCOME MODAL -->

  <div
    class="modal"
    id="welcome-modal"
    hidden
  >

    <div class="modal__card">

      <button
        type="button"
        class="modal__close"
        aria-label="Закрити"
      >
        ×
      </button>

      <div class="modal__decor modal__decor--sword">
        ⚔
      </div>

      <div class="modal__decor modal__decor--puzzle">
        ♧
      </div>

      <div class="modal__decor modal__decor--code">
        &lt;/&gt;
      </div>

      <div class="modal__decor modal__decor--game">
        ⊞
      </div>

      <h2 class="modal__title">
        Привіт!
      </h2>

      <p class="modal__text">
        Ви потрапили на сайт інтерактивних ігор та завдань.
        Надіємось, що вам сподобається і ви отримаєте
        позитивні емоції! Бажаємо Вам гарно провести час!
      </p>

      <form
        id="welcome-form"
        class="welcome-form"
      >

        <label
          class="welcome-form__label"
          for="visitor-name"
        >
          Введіть своє ім'я:
        </label>

        <input
          class="welcome-form__input"
          id="visitor-name"
          placeholder="Ваше ім'я..."
          required
        >

        <button
          class="welcome-form__button"
          type="submit"
        >
          Зберегти
        </button>

      </form>

    </div>

  </div>


  <!-- SUBSCRIPTION MODAL -->

  <div
    class="modal"
    id="subscription-modal"
    hidden
  >

    <div class="modal__card">

      <button
        type="button"
        class="modal__close"
        aria-label="Закрити"
      >
        ×
      </button>

      <div class="modal__decor modal__decor--sword">
        ⚔
      </div>

      <div class="modal__decor modal__decor--puzzle">
        ♧
      </div>

      <div class="modal__decor modal__decor--code">
        &lt;/&gt;
      </div>

      <div class="modal__decor modal__decor--game">
        ⊞
      </div>

      <h2 class="modal__title">
        Дякую за підписку!
      </h2>

    </div>

  </div>
`;


const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


// =========================
// MODALS
// =========================

const open = modal => {
  modal.hidden = false;
  document.body.classList.add("page--modal-open");
};

const close = modal => {
  modal.hidden = true;

  if (
    !document.querySelector(".modal:not([hidden])")
  ) {
    document.body.classList.remove("page--modal-open");
  }
};


// =========================
// DARK / LIGHT THEME
// =========================

const toggle = $("#theme-toggle");

toggle.onchange = () => {
  document.body.classList.toggle(
    "page--dark",
    toggle.checked
  );
};


// =========================
// DROPDOWN
// =========================

const drop = $("#games-dropdown");
const menuToggle = $("#games-menu-toggle");

menuToggle.onclick = event => {
  event.stopPropagation();

  drop.classList.toggle(
    "site-nav__dropdown--open"
  );
};

document.addEventListener("click", event => {
  if (!drop.contains(event.target)) {
    drop.classList.remove(
      "site-nav__dropdown--open"
    );
  }
});


// =========================
// MODAL CLOSE
// =========================

$$(".modal__close").forEach(button => {

  button.onclick = () => {
    close(button.closest(".modal"));
  };

});

$$(".modal").forEach(modal => {

  modal.onclick = event => {

    if (event.target === modal) {
      close(modal);
    }

  };

});

document.onkeydown = event => {

  if (event.key === "Escape") {

    $$(".modal").forEach(modal => {
      if (!modal.hidden) {
        close(modal);
      }
    });

  }

};


// =========================
// WELCOME FORM
// =========================

$("#welcome-form").onsubmit = event => {

  event.preventDefault();

  const name = $("#visitor-name").value.trim();

  if (!name) {
    return;
  }

  $("#user-name").textContent =
    `Вітаємо, ${name}!`;

  close($("#welcome-modal"));

};


// =========================
// CALCULATOR
// =========================

let op;

$$("[data-operation]").forEach(button => {

  button.onclick = () => {

    op = button.dataset.operation;

    $$("[data-operation]").forEach(item => {
      item.classList.remove(
        "calculator__operation--selected"
      );
    });

    button.classList.add(
      "calculator__operation--selected"
    );

  };

});


$("#calculate-button").onclick = () => {

  const a = +$("#first-number").value;
  const b = +$("#second-number").value;

  $("#calculator-result").value =
    op === "add"
      ? a + b
      : op === "subtract"
        ? a - b
        : op === "multiply"
          ? a * b
          : op === "divide"
            ? b
              ? a / b
              : "Помилка"
            : "";

};


// =========================
// FOOTBALL
// =========================

const footballField = $("#football-field");
const ball = $("#football-ball");

footballField.onclick = event => {

  const rect =
    footballField.getBoundingClientRect();

  ball.style.left =
    event.clientX - rect.left + "px";

  ball.style.top =
    event.clientY - rect.top + "px";

  ball.style.transform =
    "translate(-50%, -50%)";

};


// =========================
// TEAM SLIDER
// =========================

const members = [
  {
    name: "Ім'я студента 1",
    description:
      "Інформація про роботу, яку він/вона виконав/ла"
  },
  {
    name: "Ім'я студента 2",
    description:
      "Інформація про роботу, яку він/вона виконав/ла"
  },
  {
    name: "Ім'я студента 3",
    description:
      "Інформація про роботу, яку він/вона виконав/ла"
  },
  {
    name: "Ім'я студента 4",
    description:
      "Інформація про роботу, яку він/вона виконав/ла"
  }
];

let currentMember = 0;


$("#team-dots").innerHTML =
  members
    .map(
      (_, index) =>
        `<span
          class="team-slider__dot ${
            index === 0
              ? "team-slider__dot--active"
              : ""
          }"
        ></span>`
    )
    .join("");


const showMember = () => {

  const member = members[currentMember];

  $("#team-name").textContent =
    member.name;

  $("#team-description").textContent =
    member.description;

  $$(".team-slider__dot").forEach(
    (dot, index) => {

      dot.classList.toggle(
        "team-slider__dot--active",
        index === currentMember
      );

    }
  );

};


$("#team-prev").onclick = () => {

  currentMember =
    (currentMember - 1 + members.length)
    % members.length;

  showMember();

};


$("#team-next").onclick = () => {

  currentMember =
    (currentMember + 1)
    % members.length;

  showMember();

};


// =========================
// SUBSCRIBE
// =========================

$("#subscribe-form").onsubmit = event => {

  event.preventDefault();

  event.currentTarget.reset();

  open($("#subscription-modal"));

};


// =========================
// START
// =========================

open($("#welcome-modal"));

