setTimeout(() => {
  document.querySelector(".image").style.width = "50%";
  document.querySelector(".login-container").style.width = "50%";
  document.querySelector(".login-container").style.opacity = "1";
}, 2000);

// Attach event listener to the login button
document.getElementById("loginButton").addEventListener("click", function () {
  // Get the username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Validate input fields
  if (username.trim() === "" || password.trim() === "") {
    errorMessage.textContent = "Both fields are required.";
    return;
  }
  // Select multiple elements
  const elements = document.querySelectorAll(".image, .login-container");

  // Loop through the elements and apply the invisible class to each
  elements.forEach(function (element) {
    element.classList.add("invisible");
  });
});
