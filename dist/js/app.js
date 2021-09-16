import {
  appBlock,
  mainFormSize,
  body,
  mainForm,
  mainBtn,
  mainBtn2,
  modalBtn,
  modalBtnClose,
  optionsBtn,
  informationSection,
  informationToggle,
  mainFormSectionToggle,
  calcContentHeight,
  titleTextarea,
  consoleContainer,
  consoleContainerContent,
  selectingAllNestedCheckboxes,
  checkAllGithub,
  checkBoxesGithub,
  checkAllJenkins,
  checkBoxesJenkins,
} from "./ui.js"; // Работа c UI и DOM

import "./onCreateTestCaseStorage.js"; // Модуль для редактирования списка в Storage

import { create_UUID } from "./StringUtils.js"; // Утилита для создание уникального UUID
import dataLoaderFromStorage from "./dataLoaderFromStorage.js"; //Выбираем данные для бекаэнда

let stompClient = null; // stompClient создан, но ничего нет в нём
let uuid = create_UUID(); // Создаем уникальный идентификатор

selectingAllNestedCheckboxes(checkAllGithub, checkBoxesGithub, "github"); // перебор  дерева гитхаба
selectingAllNestedCheckboxes(checkAllJenkins, checkBoxesJenkins, "jenkins"); // перебор  дерева jenkins

// Подсчет размера контента

// Функция connect() создаёт экземпляр new SockJS с адресом сокета и подключается к серверу
// Подключение к серверу и отправака сокетов в spring
// После создания клиента STOMP он должен вызвать свой stompClient.connect() метод для эффективного подключения и аутентификации на сервере STOMP.
// Метод принимает два обязательных аргумента, login и passcode соответствующие учетные данные пользователя и какой-то client-id.
function connect() {
  console.log("connect +");
  // const socket = new SockJS("https://api.autotests.cloud/ws"); // todo add exception
  const socket = new SockJS("http://localhost:8080/ws"); // todo add exception
  // Используйте Stomp.client(url)для использования нативных веб-сокетов или используйте, Stomp.over(ws) если вам требуется другой тип веб-сокетов.
  stompClient = Stomp.over(socket);

  //Подключам через SockJS через STOMP к  бэкэнду Spring
  stompClient.connect({}, function (status) {
    console.log("Connected: " + status);

    // Подписываемся на прослушку с бекэнда
    stompClient.subscribe(`/topic/${uuid}`, function (message) {
      console.log("Message: " + message);

      // Вызывем функцию addSocketEvent() и передаем туда в параметр JSON.parse(message.body) с результатами с бекэнда
      addSocketEvent(JSON.parse(message.body));
    });
  });
}

// Данная функция получает в параметр сообщения с бекэнда и создает элементы div.instruction -> span.command
// В зависимости от contentType switch \ case рендерит сообщения в зависимости от ответов с бекэнда
function addSocketEvent(message) {
  let lineCodeBlock = document.createElement("div");
  lineCodeBlock.className = "instruction";

  let lineCodeMessage = document.createElement("span");
  lineCodeMessage.className = "command";

  // pre.setAttribute("data-prefix", message.prefix);

  switch (message.contentType) {
    case "info":
      // pre.className = "list-auto flex";
      lineCodeMessage.innerHTML = `<code>${message.content}</code>`;
      break;
    case "generated":
      // pre.className = "text-warning flex";
      lineCodeMessage.innerHTML = `<code>${message.content}<a target="_blank" class="green-link" href="${message.url}">${message.urlText}</a></div></code>`;
      break;
    case "launched":
      // pre.className = "text-warning flex";
      lineCodeMessage.innerHTML = `<code>${message.content}<a target="_blank" class="green-link" href="${message.url}">${message.urlText}</a> </code> <label class="loader"></label>`;
      break;
    case "finished":
      // pre.className = "text-warning flex";
      lineCodeMessage.innerHTML = `<code>${message.content}<a target="_blank" class="green-link" href="${message.url}">${message.urlText}</a></div></code>`;
      document.querySelector(".loader").remove();
      break;
    case "in progress":
      // pre.className = "text-warning flex";
      lineCodeMessage.innerHTML = `<code>${message.content} </code>`;
      break;
    case "can-automate":
      // pre.className = "flex";
      lineCodeMessage.innerHTML = `<code>${message.content}</code>`;
      break;
    case "telegram-info":
      // pre.className = "flex";
      lineCodeMessage.innerHTML = `<code>${message.content}<a target="_blank" class="blue-link" href="${message.url}">${message.urlText}</a> 👈</code>`;
      break;
    case "telegram-notification":
      // pre.className = "flex";
      lineCodeMessage.innerHTML = `<code> </code>`;
      displayNotification(message.content);
      break;
    case "empty":
      // pre.className = "list-auto flex";
      lineCodeMessage.innerHTML = `<code> </code>`;
      break;
    case "error":
      // pre.className = "text-error flex";
      lineCodeMessage.innerHTML = `<code>${message.content}</code>`;
      break;
  }
  lineCodeBlock.append(lineCodeMessage);
  consoleContainerContent.append(lineCodeBlock);
  // scroll.getScrollElement().scrollTo({ top: 5000, behavior: "smooth" });
}

//Показывает уведомленяи с телеграмма
function displayNotification(messagePath) {
  telegramBlock.innerHTML = `<iframe id="telegram-post-autotests_cloud-17"
    class="telegram-iframe" src="https://t.me/${messagePath}?embed=1&discussion=1&comments_limit=5&light=1"></iframe>`;
  telegramBlock.classList.remove("hidden");
}

function replaceValuesToBoolean(params) {
  return JSON.stringify(params)
    .replaceAll('"on"', true)
    .replaceAll('"off"', false);
}

//Функция initForm инициализирует форму отправки тестов
const initForm = () => {
  connect(); // Вызываем подключение сокетов

  // Функция отправки формы и передаем в параметры некие события
  function submitForm(event) {
    // НЕ перезагружаем страницу т.е отменяем стандартное поведение формы
    event.preventDefault();
    // alert(document.getElementById('input-title').value);
    // Блоку div#app добавляеем невидимости
    appBlock.classList.add("hidden");
    informationSection.classList.add("hidden");
    calcContentHeight();

    // В переменую formData мы присваиваем конструктор FormData(mainForm), который создаёт новый объект FormData т.е
    // HTML-форму на основе mainForm главной формы form#objective.
    // Существующая HTML-форма, на основе которой будет создана новая. Если ничего не указано, будет создана пустая форма.
    const formData = new FormData(mainForm);
    // В переменую values которая является объектом присваиваем результаты работы метода Object.fromEntries() преобразующего список пар ключ-значение в объект из
    // метод FormData.entries() который в свою очередь возвращает [Symbol.iterator], позволяющему пройтись по всем ключам/значениям в этом объекте.
    // Ключ каждой пары - это объект USVString, значение - это USVString или Blob.
    let values = Object.fromEntries(formData.entries());
    console.warn("Объектное значенеие", values);
    console.warn(
      "Объектное значенеие с автозаменой функция",
      replaceValuesToBoolean(values)
    );
    console.log(values instanceof Object);

    if (values.url) {
      // Если values.url существует
      // values.price = "free";
      // values.email = "admin@qa.guru";
      values.tests = dataLoaderFromStorage(); //В свойство tests объекта values присваиваем результаты работы вызова функции dataLoaderFromStorage() которая возвращает массив объектов
      delete values["g-recaptcha-response"]; // Удаляем рекапчу
      // В переменую присваиваем строку JSON из объекта values заменяя on \ off на булиновы значения

      console.log("данные с заменой " + replaceValuesToBoolean(values));
      // Передаем
      stompClient.send(
        `/app/orders/${uuid}`,
        {},
        replaceValuesToBoolean(values)
      );

      // consoleContainer.classList.remove("hidden");
      // Убираем главную форму
      mainForm.classList.add("hidden"); // Показывыем iframeBlock

      mainForm.reset();
    } else {
      if (!titleTextarea.value) {
        titleTextarea.classList.add("border-red-500");
      }

      setTimeout(() => {
        // mainTextarea.classList.remove("border-red-500");
        titleTextarea.classList.remove("border-red-500");
      }, 2000);
    }
  }

  mainBtn.addEventListener("click", submitForm);
  mainBtn2.addEventListener("click", submitForm);
};

export { initForm };

initForm();

// Функция открытия модального окна
function modalOpen() {
  body.classList.add("modal");
}
// Закрытие модального окна
function modalClose() {
  body.classList.remove("modal");
}
// Функция тогл
function optionsToggle() {
  body.classList.toggle("options-open");
}

window.onload = function setContentHeightFirst() {
  appBlock.style.height = "calc(" + mainFormSize.offsetHeight + "px + 1.5rem)";
};

modalBtn.addEventListener("click", modalOpen);
modalBtnClose.addEventListener("click", modalClose);
optionsBtn.addEventListener("click", optionsToggle);

localStorage.getItem("steps") !== null || localStorage.length > 0
  ? optionsToggle()
  : body.classList.toggle("options-open");
