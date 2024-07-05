// Dom variables
const calculatorbtn = document.querySelectorAll(".cal-body .col button");
const showInput = document.getElementById("showInput");
const showResult = document.getElementById("showResult");
const lightTheme = document.getElementById("light");
const darkTehme = document.getElementById("dark");
const calculator = document.querySelector(".calculator");

calculatorbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calulation(e, btn);
  });
});

function calulation(e, btn) {
  switch (btn.value) {
    case "AC":
      showInput.value = "";
      showResult.value = "";
      break;
    case "C":
      const removeLength = showInput.value.length - 1;
      showInput.value = showInput.value.substring(0, removeLength);
      break;
    case "=":
      showResult.value = eval(showInput.value);
      break;
    default:
      showInput.value += btn.value;
  }
}

// Switch Theme
darkTehme.addEventListener("click", (e) => {
  document.body.classList.add("dark-them");
  lightTheme.classList.remove("dark-theme-btn");
  darkTehme.classList.add("dark-theme-btn");
  calculatorbtn.forEach((btn) => {
    btn.style.boxShadow = "1px 1px 10px 2px rgb(89 89 89)";
  });
});
lightTheme.addEventListener("click", (e) => {
  document.body.classList.remove("dark-them");
  darkTehme.classList.remove("dark-theme-btn");
  lightTheme.classList.add("dark-theme-btn");
  calculatorbtn.forEach((btn) => {
    btn.style.boxShadow = " rgba(0, 0, 0, 0.08) 0px 4px 12px";
  });
});
