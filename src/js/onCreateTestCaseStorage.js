import LocalStorage from "./localStorage.js";

const storage = new LocalStorage();

const tasks = storage.tasks;

const container = document.querySelector(".tasks");
const template = document.querySelector("#task");

const createTestCaseForm = document.querySelector("#modal_form");
const createTestCaseField = document.querySelector("#tc_title");
const createStepField = document.querySelector("#text_case");
const createTestCaseButton = document.querySelector("#add_test_case__submit");

tasks.forEach((data) => {
  onCreateTestCase({ data });
});

createTestCaseField.addEventListener("input", () => {
  createTestCaseButton.disabled = !createTestCaseField.value;
});

createStepField.addEventListener("input", () => {
  createTestCaseButton.disabled = !createStepField.value;
});

createTestCaseForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Тупое решение но рабочее

  const title = createTestCaseField.value;
  const steps = createStepField.value;

  if (title) {
    const data = {
      title,
      steps,
      timestamp: new Date().getTime(),
    };

    storage.create(data);

    onCreateTestCase({ data });

    createTestCaseForm.reset();

  }
});

//! Ещё одна реализация Добавил heycisco
  let edit = document.querySelectorAll(".btn-edit");
  let allTasks = document.querySelectorAll(".tasks__task");
  console.log("кнопки до, клонирования", edit);
  edit.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      allTasks.forEach((el) => {
        el.classList.remove("active");
      });

      let oneTask = event.target.parentNode.parentNode; //родитель родитель родителя родителя
      console.log(oneTask);
      let classList = oneTask.classList;
      Array.from(classList).indexOf("active");
      classList.add("active");
    });
  });
  

let save = document.querySelectorAll(".btn-save");
save.forEach((savedClick) => {
  savedClick.addEventListener("click", () => {
    allTasks.forEach((el) => {
      el.classList.remove("active");
    });
  });
});


//   let edit = document.querySelectorAll('.btn-edit');
//   let save = document.querySelectorAll(".btn-save");
 
//   edit.forEach(btn=> {
//    btn.addEventListener("click", toggleParentActive);
//  });
 
//  save.forEach(btn => {
//    btn.addEventListener("click", toggleParentActive);
//  });
 
//  function toggleParentActive(event) {
//    event.preventDefault();
//    let container = event.target.parentNode.parentNode; //родитель родитель родителя родителя
//    console.log(container);
//    let classList = container.classList;
   
//   (Array.from(classList).indexOf('active') === -1)
//    ? classList.add('active') 
//    : classList.remove('active');
//  }

function onCreateTestCase({ data }) {
  const clone = template.content.cloneNode(true);
  const testCase = clone.querySelector(".task");
  const title = clone.querySelector(".task__text");
  const step = clone.querySelector(".step__text");
  const remove = clone.querySelector(".btn-delete");
  const edit = clone.querySelector(".btn-edit");
  const save = clone.querySelector(".btn-save");
  console.log("Элементы после cloneNode", edit);

  title.innerHTML = data.title;
  step.innerHTML = data.steps;

  title.addEventListener("input", () => {
    data.title = title.innerHTML;

    storage.update(data);
  });

  step.addEventListener("input", () => {
    data.steps = step.innerHTML;

    storage.update(data);
  });

  remove.addEventListener("click", () => {
    storage.delete(data);

    testCase.remove();
  });

  edit.addEventListener("click", (event) => {
    allTasks.forEach((el) => {
      el.classList.remove("active");
    });
    let oneTask = event.target.parentNode.parentNode;
    let classList = oneTask.classList;
    Array.from(classList).indexOf("active");
    classList.add("active");
  });

  save.addEventListener("click", (event) => {
    event.target.parentNode.parentNode.classList.remove('active');
  });

  container.appendChild(clone);
}