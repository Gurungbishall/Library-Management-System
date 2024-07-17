let eyeicon = document.getElementById("pass-icon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "../../Backened/password/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "../../Backened/password/eye-close.png";
  }
};
