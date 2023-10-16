const userInput = prompt("Введите значение:");
const numberValue = +userInput;
if (typeof numberValue === "number" && !isNaN(numberValue)) {
  console.log("Введенное значение является числом.");
} else {
  console.log("Введенное значение не является числом или не может быть преобразовано в число.");
}
