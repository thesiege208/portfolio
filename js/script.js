const dialog = document.querySelector("dialog");
const showButton1 = document.getElementById("1");
const showButton2 = document.getElementById("2");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton1.addEventListener("click", () => {
  dialog.showModal();
});

showButton2.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});