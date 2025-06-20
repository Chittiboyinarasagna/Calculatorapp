const buttons = document.querySelectorAll(".buttons button");
const display = document.getElementById("display");
const toggleButton = document.getElementById("toggle-dark");

toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    // Inside buttons.forEach
    if (value === "⌫") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
   

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    currentInput += key;
    display.value = currentInput;
  } else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key.toLowerCase() === "c") {
    currentInput = "";
    display.value = "";
  }
});
