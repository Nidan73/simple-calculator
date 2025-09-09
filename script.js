const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();

    if (value === "AC") {
      current = "";
      display.textContent = "";
    } else if (value === "CE") {
      current = current.slice(0, -1);
      display.textContent = current;
    } else if (value === "%") {
      current = current / 100;
      display.textContent = current;
    } else if (value === "=") {
      // Calculate the result
      try {
        current = eval(current); // ⚠️ demo only
        display.textContent = current;
      } catch {
        display.textContent = "Error";
        current = "";
      }
    } else {
      // Append the button text
      current += value;
      display.textContent = current;
    }
  });
});
