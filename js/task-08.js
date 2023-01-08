const form = document.querySelector(
  ".login-form"
);

form.addEventListener("submit", handleSubmit);

const formData = {};

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (
    email.value === "" ||
    password.value === ""
  ) {
    // reset form after alert
    event.currentTarget.reset();
    return alert(
      "Все поля должны быть заполнены."
    );
  }
  // save data of form in object
  formData.email = email.value;
  formData.password = password.value;
  console.log(formData);
  // reset form after submit
  event.currentTarget.reset();
}
