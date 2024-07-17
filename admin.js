const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const optionbox = document.getElementById("search_option");
  if (optionbox.style.display == "none") {
    optionbox.style.cssText = "display:grid; gap: 5px";
  } else {
    optionbox.style.cssText = "display: none";
  }
});

const user_btn = document.getElementById("user");

user_btn.addEventListener("click", () => {
  const user_option = document.getElementById("user_option");
  if (user_option.style.display == "none") {
    user_option.style.cssText = "display:grid; gap: 5px";
  } else {
    user_option.style.cssText = "display:none";
  }
});

