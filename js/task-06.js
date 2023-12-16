const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Будь ласка, введіть число від 1 до 100");
    return;
  }
  destroyBoxes();
  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
