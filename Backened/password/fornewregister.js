let eyeicon1 = document.getElementById("pass-icon1");
let eyeicon2 = document.getElementById("pass-icon2");

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

eyeicon1.onclick = function () {
  if (password1.type == "password") {
    password1.type = "text";
    eyeicon1.src = "../../Backened/password/eye-open.png";
  } else {
    password1.type = "password";
    eyeicon1.src = "../../Backened/password/eye-close.png";
  }
};

eyeicon2.onclick = function () {
  if (password2.type == "password") {
    password2.type = "text";
    eyeicon2.src = "../../Backened/password/eye-open.png";
  } else {
    password2.type = "password";
    eyeicon2.src = "../../Backened/password/eye-close.png";
  }
};
