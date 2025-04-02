const form = document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const errors = {
  fullName: document.getElementById("fullNameError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError"),
  confirmPassword: document.getElementById("confirmPasswordError"),
};

function validateForm() {
  let isValid = true;

  if (!fullName.value.trim()) {
    errors.fullName.textContent = "Full Name is required";
    isValid = false;
  } else {
    errors.fullName.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailPattern)) {
    errors.email.textContent = "Invalid email format";
    isValid = false;
  } else {
    errors.email.textContent = "";
  }

  if (password.value.length < 6) {
    errors.password.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    errors.password.textContent = "";
  }

  if (confirmPassword.value !== password.value) {
    errors.confirmPassword.textContent = "Passwords do not match";
    isValid = false;
  } else {
    errors.confirmPassword.textContent = "";
  }

  submitBtn.disabled = !isValid;
}

// EventListener
fullName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Sign-up Successful!\nName: ${fullName.value}\nEmail: ${email.value}`);
  form.reset();
  submitBtn.disabled = true;
});
