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
	event.preventDefault();

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

let tcEditBtn = document.querySelectorAll(".btn-edit");
tcEditBtn.forEach(btn=> {
  btn.addEventListener("click", taskActive);

})

let tcSaveBtn = document.querySelectorAll(".btn-save");
tcSaveBtn.forEach(btn => {
  btn.addEventListener("click", taskSave);

})

let taskEditing = document.querySelectorAll(".tasks__task");

function taskActive() {
  taskEditing.forEach(taskEditItem=> {
    taskEditItem.classList.add("active");
  })


}
function taskSave() {
  taskEditing.forEach(taskEditItem=> {
    taskEditItem.classList.remove("active");
  })

 }

// Кнопки добавленных тест-кейсов
function tcValueEdit() {
	let tcEditBtn = document.querySelectorAll(".btn-edit");
	let tcSaveBtn = document.querySelectorAll(".btn-save");
	let taskEditing = document.querySelectorAll(".tasks__task");
	tcEditBtn.addEventListener("click", taskActive);
	tcSaveBtn.addEventListener("click", taskSave);

  function taskActive() {
    taskEditing.classList.add("active");
  }
  
	function taskSave() {
		taskEditing.classList.remove("active");
 	}
}


function onCreateTestCase({ data }) {
	const clone = template.content.cloneNode(true);
	const testCase = clone.querySelector(".task");
	const title = clone.querySelector(".task__text");
	const step = clone.querySelector(".step__text");
	const remove = clone.querySelector(".btn-delete");

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

	container.appendChild(clone);
}

