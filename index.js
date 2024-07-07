function generateRandomNumbers() {
  const maxNumbers = 6;
  const maxValue = 45;
  const randomNumbers = new Set();

  // Generate up to maxNumbers * 10 unique random numbers
  Array.from({ length: maxNumbers * 8000 }, () => {
    if (randomNumbers.size < maxNumbers) {
      randomNumbers.add(Math.floor(Math.random() * (maxValue + 1)));
    }
  });

  return Array.from(randomNumbers).slice(0, maxNumbers);
}

function displayRandomNumbers() {
  const numbersContainer = document.getElementById("random-numbers-container");
  numbersContainer.innerHTML = ""; // Clear existing numbers
  const titles = ["Tradicional", "Match", "Desquite", "Sale o sale"];

  titles.forEach((title) => {
    const rowContainer = document.createElement("div");
    rowContainer.className = "row";

    const titleElement = document.createElement("div");
    titleElement.className = "title";
    titleElement.textContent = title;
    rowContainer.appendChild(titleElement);

    const numbersRow = document.createElement("div");
    numbersRow.className = "numbers";

    const randomNumbers = generateRandomNumbers();
    randomNumbers.forEach((number) => {
      const numberElement = document.createElement("div");
      numberElement.className = "box";
      numberElement.textContent = number;
      numbersRow.appendChild(numberElement);
    });

    rowContainer.appendChild(numbersRow);
    numbersContainer.appendChild(rowContainer);
  });
}

document
  .getElementById("reload-button")
  .addEventListener("click", displayRandomNumbers);

displayRandomNumbers();
