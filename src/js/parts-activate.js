const setContentHeight = document.querySelector(".start");
const mainFrameSection = document.querySelector(".start .wrapper");
const mainFormSize = document.querySelector(".start .wrapper .form");

const mainFrameSectionForm = document.querySelector(".start .wrapper .form");
const informationSection = document.querySelector(".information");
const informationTrigger = document.querySelector(".information .trigger");

const mainFormSection = document.querySelector(".main-block__page");
const mainFormSectionTrigger = document.querySelector(".start .wrapper .options");
const mainFormSectionTrigger2 = document.querySelector(".start .wrapper .options-footer-elements .options");
	

informationTrigger.addEventListener("click", informationToggle);
function informationToggle() {
	informationSection.classList.toggle("active");
}


mainFormSectionTrigger.addEventListener("click", mainFormSectionToggle);
mainFormSectionTrigger.addEventListener("click", calcContentHeight);
mainFormSectionTrigger2.addEventListener("click", mainFormSectionToggle);
mainFormSectionTrigger2.addEventListener("click", calcContentHeight);
function mainFormSectionToggle() {
	mainFormSection.classList.toggle("cards-active");
	mainFrameSection.classList.toggle("active-section");
}


window.onload = function setContentHeightFirst() {
	setContentHeight.style.height = "calc(" + mainFormSize.offsetHeight + "px + 1.5rem)";
}

function calcContentHeight () {
	let contentSize = document.querySelector(".active-section");
	if (contentSize !== null) {
	setContentHeight.style.height = "calc(" + contentSize.offsetHeight + "px + 3em)";
	} else {
		setContentHeight.style.height = "calc(" + mainFormSize.offsetHeight + "px + 1.5rem)";
		console.log(contentSize);
	}
}