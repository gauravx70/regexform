const form = document.getElementById("form");
const formControl = document.querySelectorAll(".form-control");
const small = document.querySelectorAll("small");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validation();
});

// sendata function defining

const sendData = (count, sdata, usernameValue) => {
  if (count === sdata) {
    alert("registration successful");
    swal("Good job!" + usernameValue, "You clicked the button!", "success");
    // location.href = `demo.html?userName = ${usernameValue}`;
  } else {
    swal("Good job!", "You clicked the button!", "error");
  }
};

// success pass after all fields are valid
const successMsg = (usernameValue) => {
  let count = formControl.length - 1;
  for (let i = 0; i < formControl.length; i++) {
    if (formControl[i].className === "form-control success") {
      let sdata = 0 + i;
      console.log(sdata);
      sendData(count, sdata, usernameValue);
    } else {
      alert("Error");
    }
  }
};

// defining validation

function validation() {
  // validating username
  let usernameValue = username.value;
  let userRegEx = /^([0-9a-zA-Z._-]){2,10}$/;
  if (usernameValue === "") {
    formControl[0].classList.add("error");
    small[0].innerText = "Please fill the username";
  } else if (userRegEx.test(usernameValue)) {
    formControl[0].classList.remove("error");
    formControl[0].classList.add("success");
  } else {
    formControl[0].classList.remove("success");
    formControl[0].classList.add("error");

    small[0].innerText = "Username min 2 to 10 charcter";
  }

  // email validating
  let emailValue = email.value;
  let emalRegEx = /^[\.\-\_0-9a-zA-z]+@[\.\-\_0-9a-zA-z]+\.[a-zA-z]{2,7}$/;
  if (emailValue === "") {
    formControl[1].classList.add("error");
    small[1].innerText = "Please fill the email ";
  } else if (emalRegEx.test(emailValue)) {
    formControl[1].classList.remove("error");
    formControl[1].classList.add("success");
  } else {
    formControl[1].classList.remove("success");
    formControl[1].classList.add("error");
    small[1].innerText = "Please enter a valid email ";
  }

  // phone number validating
  let numberValue = number.value;
  let numberRegEx = /^[0-9]{10}$/;
  if (numberValue === "") {
    formControl[2].classList.add("error");
    small[2].innerText = "Please fill the Phone number";
  } else if (numberRegEx.test(numberValue)) {
    formControl[2].classList.remove("error");
    formControl[2].classList.add("success");
  } else {
    formControl[2].classList.add("error");
    formControl[2].classList.remove("success");
    small[2].innerText = "Please enter a valid phone number";
  }

  // password validating
  let passwordValue = password.value;
  let passwordRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (passwordValue === "") {
    formControl[3].classList.add("error");
    small[3].innerText = "Please fill the password";
  } else if (passwordRegEx.test(passwordValue)) {
    formControl[3].classList.remove("error");
    formControl[3].classList.add("success");
  } else {
    formControl[3].classList.remove("success");
    formControl[3].classList.add("error");
    small[3].innerText =
      "Password should contain one number and one special character";
  }

  // confirm password validating
  let cpasswordValue = cpassword.value;
  let cpasswordRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (cpasswordValue === "") {
    formControl[4].classList.add("error");
    small[4].innerText = "Please fill the confirm password";
  } else if (cpasswordValue === passwordValue) {
    formControl[4].classList.remove("error");
    formControl[4].classList.add("success");
  } else {
    formControl[4].classList.remove("success");
    formControl[4].classList.add("error");
    small[4].innerText = "Password are not matching";
  }

  successMsg(usernameValue);
}
