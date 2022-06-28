// form validation

function createErrorDiv(parent) {
  const errorHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>
  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
  `;

  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error-container');
  errorDiv.innerHTML = errorHTML;
  parent.appendChild(errorDiv);
  console.log(errorDiv)

}

function validation(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const capassword = document.querySelector("#capassword").value;
  const number = document.querySelector('#number').value;

  const usernameCheck = /^[a-zA-Z ._]{3,}[a-zA-Z]{3,}$/;
  const emailCheck = /^[A-Za-z_.]{2,}[A-Za-z0-9]{2,}@[A-Za-z]{3,}.[A-Za-z]{2,}$/;
  const passwordCheck = /^([A-Za-z]{4,12}[!@#$%^&*][0-9]{4})$/;
  const numberCheck = /^[6789]{1}[0-9]{9}$/;


  let userSuccess = document.querySelector("#username").parentElement;
  createErrorDiv(userSuccess);

  if (usernameCheck.test(username)) {
    userSuccess.classList.add("success");
    userSuccess.classList.remove("error");
  } else {

    userSuccess.classList.add("error");
  }

  let emailSuccess = document.querySelector("#email").parentElement;
  createErrorDiv(emailSuccess);

  if (emailCheck.test(email)) {
    emailSuccess.classList.add("success");
    emailSuccess.classList.remove("error");
  } else {
    emailSuccess.classList.add("error");
  }

  let passwordSuccess = document.querySelector("#password").parentElement;
  createErrorDiv(passwordSuccess);

  if (passwordCheck.test(password)) {
    passwordSuccess.classList.add("success");
    passwordSuccess.classList.remove("error");
  } else {
    passwordSuccess.classList.add("error");
  }

  let capasswordSuccess = document.querySelector("#capassword").parentElement;
    createErrorDiv(capasswordSuccess);

  if (capassword.match(password)) {
    capasswordSuccess.classList.add("success");
    capasswordSuccess.classList.remove("error");
  } else {
    capasswordSuccess.classList.add("error");
  }

  let numberSuccess = document.querySelector("#number").parentElement;
  createErrorDiv(numberSuccess);

  if (numberCheck.test(number)) {
    numberSuccess.classList.add("success");
    numberSuccess.classList.remove("error");
  } else {
    numberSuccess.classList.add("error");
  }
}
