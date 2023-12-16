document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector("#name-input");
  const nameOutput = document.querySelector("#name-output");

  nameInput.addEventListener("input", function () {
    let name = nameInput.value.trim();
    if (name === "") {
      name = "Anonymous";
    }
    nameOutput.textContent = name;
  });
});
