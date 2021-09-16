const body = document.querySelector("body.tests-app"); // Выбираем корневой селектор класса tests-app
const appBlock = document.querySelector(".start"); // Выбираем div#app который оборачивает from#objective, что ниже
const mainForm = document.querySelector("#objective"); // Выбираем основную форму form#objective
const mainBtn = document.querySelector(".group button.main"); // Основная кнопка сгенерировать
const mainBtn2 = document.querySelector(".options-footer-elements button.main"); // Вторая кнопка сгенерировать

const modalBtn = document.querySelector(".manual-test-add"); // Кнопка для small modal для вызова мольного окна
const modalBtnClose = document.querySelector("button.modal-close"); // Кнопка для закрытия модального окна
const optionsBtn = document.querySelector("button.options"); // Кнопка показать \ скрыть опции

const tcTitle = document.querySelector("#tc_title"); // Input ввода в открытом модальном окне
const tcSteps = document.querySelector("#text_case"); // Textarea в открытом модальном окне для теста
const tcList = document.querySelector(".added-tc"); // Родительский список <ul> || let testTasksHolder = document.getElementById("tc-list");

const addTestCase = document.querySelector("#add_test_case"); // Большая кнопка добавить в модальном окне
const addNew = document.querySelector("#add_new"); // Кнопка добавить еще один тест

const titleTextarea = document.querySelector("#input-title"); // Главный Input c https://

const consoleContainer = document.querySelector(".console-container"); // Консоль которая выводится при получении данных с бекэнда
const consoleContainerContent = consoleContainer.querySelector(".content"); // Блок с классом контейнер в консоле

const mainFormSize = document.querySelector(".start .wrapper .form");
const informationSection = document.querySelector(".information");
const informationTrigger = document.querySelector(".information .trigger");
const mainFormSection = document.querySelector(".main-block__page");
const mainFormSectionTrigger = document.querySelector(
	".start .wrapper .options"
);
const mainFormSectionTrigger2 = document.querySelector(
	".start .wrapper .options-footer-elements .options"
);

let checkAllGithub = document.getElementById("option1"); //Родительский чекбокс гитхаба
let checkBoxesGithub = document.querySelectorAll("input.github"); //Дочерний чекбокс

let checkAllJenkins = document.getElementById("option3"); //Родительский чекбокс Jenkins
let checkBoxesJenkins = document.querySelectorAll("input.jenkins"); //Дочерний чекбокс

function selectingAllNestedCheckboxes(parents, childs, className) {
	for (let i = 0; i < childs.length; i++) {
		childs[i].onclick = function () {
			let checkedCount = document.querySelectorAll(
				`input.${className}:checked`
			).length;

			parents.checked = checkedCount > 0;
			parents.indeterminate =
				checkedCount > 0 && checkedCount < childs.length;
		};
	}

	parents.onclick = function () {
		for (let i = 0; i < childs.length; i++) {
			childs[i].checked = this.checked;
		}
	};
}

// Скрытие-показ инфы
informationTrigger.addEventListener("click", informationToggle);
function informationToggle() {
	informationSection.classList.toggle("active");
}

// Скрытие-показ опций
mainFormSectionTrigger.addEventListener("click", mainFormSectionToggle);
mainFormSectionTrigger.addEventListener("click", calcContentHeight);
mainFormSectionTrigger2.addEventListener("click", mainFormSectionToggle);
mainFormSectionTrigger2.addEventListener("click", calcContentHeight);
function mainFormSectionToggle() {
	mainFormSection.classList.toggle("cards-active");
}

function calcContentHeight() {
	let firstBlockSize = document.querySelector(".wrapper.block-first");
	let secondBlockSize = document.querySelector(".wrapper.block-second");
	let cardsActiveCheck = document.querySelector(
		".main-block__page.cards-active"
	);
	let secondStepCheck = document.querySelector(".start.hidden");
	if (secondStepCheck !== null) {
		appBlock.style.height =
			"calc(" + secondBlockSize.offsetHeight + "px + 2em)";
	} else if (cardsActiveCheck !== null) {
		appBlock.style.height =
			"calc(" + firstBlockSize.offsetHeight + "px + 3em)";
	} else {
		appBlock.style.height =
			"calc(" + mainFormSize.offsetHeight + "px + 1.5rem)";
	}
}



export {
	informationToggle,
	mainFormSectionToggle,
	calcContentHeight,
	mainBtn,
	mainBtn2,
	appBlock,
	mainFormSize,
	body,
	mainForm,
	modalBtn,
	modalBtnClose,
	optionsBtn,
	informationSection,
	titleTextarea,
	consoleContainer,
	consoleContainerContent,
	selectingAllNestedCheckboxes,
	checkAllGithub,
	checkBoxesGithub,
	checkAllJenkins,
	checkBoxesJenkins,
};
