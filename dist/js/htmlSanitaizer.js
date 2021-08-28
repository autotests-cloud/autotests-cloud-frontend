export const onPastePlainText = (event) => {
  let pastedText = undefined;
  if (window.clipboardData && window.clipboardData.getData) { // IE
    pastedText = window.clipboardData.getData('Text');
  } else if (event.clipboardData && e.clipboardData.getData) {
    pastedText = event.clipboardData.getData('text/plain');
  }
  event.target.textContent = pastedText;
  event.preventDefault();
  return false;
}

document.querySelector('.task__text').addEventListener('paste', onPastePlainText);
document.querySelector('.step__text').addEventListener('paste', onPastePlainText);
