document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(this).entries());

    if (Object.values(formData).some((value) => !value.trim())) {
      console.log("All form fields must be filled in");
      return;
    }

    console.log(formData);

    this.reset();
  });
