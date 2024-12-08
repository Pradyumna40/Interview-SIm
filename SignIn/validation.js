const form = document.getElementById("form");
const names = document.getElementById("nameField");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error_message = document.getElementById("error-message");

// Add event listener to the form
form.addEventListener("submit", (e) => {
  let errors = [];

  if (names) {
    // Validate the signup form
    errors = getSignupFormErrors(names.value, email.value, password.value);
  } else {
    // Validate the login form
    errors = getLoginFormErrors(email.value, password.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

// Function to validate signup form
function getSignupFormErrors(nameValue, emailValue, passwordValue) {
  let errors = [];

  if (nameValue === "" || nameValue == null) {
    errors.push("Name is required");
    names.parentElement.classList.add("incorrect");
  }
  if (emailValue === "" || emailValue == null) {
    errors.push("Email is required");
    email.parentElement.classList.add("incorrect");
  }
  if (passwordValue === "" || passwordValue == null) {
    errors.push("Password is required");
    password.parentElement.classList.add("incorrect");
  }
  if(passwordValue.length < 8)
    {
        errors.push('Password must have atleast 8 charecters')
        password.parentElement.classList.add('incorrect')
    }

  return errors;
}

// Function to validate login form
function getLoginFormErrors(emailValue, passwordValue) {
  let errors = [];

  if (emailValue === "" || emailValue == null) {
    errors.push("Email is required");
    email.parentElement.classList.add("incorrect");
  }
  if (passwordValue === "" || passwordValue == null) {
    errors.push("Password is required");
    password.parentElement.classList.add("incorrect");
  }

    

  return errors;
}

// Add input event listeners to clear errors dynamically
const allInputs = [names, email, password].filter(Boolean); // Filter out null inputs

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error_message.innerText = "";
    }
  });
});

