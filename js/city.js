// add click event handler in the login button
document.getElementById("button").addEventListener('click', function () {
  // get the email
  const emailField = document.getElementById("email");
  const getEmail = emailField.value;
  // get the password
  const passwordField = document.getElementById("password");
  const getPassword = passwordField.value;
  // regular expression of email
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // check the email and password validation and redirect to another page
  if (emailValidation.test(getEmail) && getPassword.length >= 8) {
    window.location.href = 'bankingpage.html';
  }
  // give an error message
  else {
    const getError = document.getElementById("error-para");
    getError.style.visibility = "visible";
  }
});