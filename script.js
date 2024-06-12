let btns = document.querySelectorAll(".calBtns");
let resultInput = document.querySelector(".result");

let result = "";

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnValue = e.target.innerText;

    if (btn.classList.contains("backBtn")) {
      result = result.slice(0, -1);
      resultInput.value = result;
    }
    else if (e.target.innerHTML == "=") {
      try {
        result = eval(result);
        resultInput.value = result;
      } catch (error) {
        resultInput.value = "Error";
        result = "";
      }
    } else if (btnValue === "AC") {
      result = "";
      resultInput.value = result;
    } else if (btnValue === "+/-") {
      // Handle the toggle sign functionality if needed
    } else {
      result += btnValue;
      resultInput.value = result;
    }
  });
});
