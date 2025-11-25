let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();  // stop page refresh

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let pass = document.getElementById("password");

  let nameErr = document.getElementById("nameErr");
  let emailErr = document.getElementById("emailErr");
  let passErr = document.getElementById("passErr");

  let valid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameErr.textContent = "Name is required";
    name.classList.add("invalid");
    valid = false;
  } else {
    nameErr.textContent = "";
    name.classList.remove("invalid");
    name.classList.add("valid");
  }

  // Email validation
  if (!email.value.includes("@")) {
    emailErr.textContent = "Email must include @";
    email.classList.add("invalid");
    valid = false;
  } else {
    emailErr.textContent = "";
    email.classList.remove("invalid");
    email.classList.add("valid");
  }

  // Password validation
  if (pass.value.length < 8) {
    passErr.textContent = "Password must be at least 8 characters";
    pass.classList.add("invalid");
    valid = false;
  } else {
    passErr.textContent = "";
    pass.classList.remove("invalid");
    pass.classList.add("valid");
  }

  // All fields correct
  if (valid) {
    alert("Form submitted successfully!");
  }
});
