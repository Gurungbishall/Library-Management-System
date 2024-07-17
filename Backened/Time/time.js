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

setInterval(() => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let amPm = "";

  if (hours > 12) {
    hours = hours - 12;
    amPm = "PM";
  } else if (hours == 0) {
    hours = 12;
    amPm = "AM";
  } else {
    amPm = "AM";
  }

  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;

  document.getElementById("time").innerHTML = `${hours}:${minutes} ${amPm}`;

  let years = time.getFullYear();
  let months = time.getMonth();
  let days = time.getDate();

  months = months + 1;

  document.getElementById("date").innerHTML = `${days}-${months}-${years} AD`;
}, 1000);


//student_search//

// const Browse = document.getElementById("Browse");

// Browse.addEventListener("click", () => {
//   const Browse_option = document.getElementById("Browse_option");
//   if(Browse_option.style.display == "none"){
//     Browse_option.style.cssText = "display: block;";
//   }else{
//     Browse_option.style.cssText = "display: none";
//   }
// })