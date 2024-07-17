const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formdata = new FormData(form);

  const data = Object.fromEntries(formdata);

  fetch("https://lms-backend.sachetsubedi001.com.np/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        console.log("Problem");
        return;
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.success === true) {
        window.location.assign("../Frontend/Student/StudentHome.html");
      }
    })
    .catch((error) => console.log("problem"));
});
