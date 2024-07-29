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
      // console.log(data.data.isAdmin);
      if (data.success === true && data.data.isAdmin == false) {
        window.location.href = "Frontend/Student/StudentHome.html";
      } else {
        window.location.href = "admin.html";
      }
    })
    .catch((error) => console.log("problem"));
});
