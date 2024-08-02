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

      if (data.data.isAdmin === false) {
        localStorage.removeItem("UserId");
        localStorage.removeItem("Username");

        localStorage.setItem("UserId", data.data.user.id);
        localStorage.setItem("Username", data.data.user.name);

        window.location.href = "Frontend/Student/StudentHome.html";
      } else if (data.data.isAdmin === true) {
        localStorage.removeItem("UserId");
        localStorage.removeItem("Username");

        localStorage.setItem("UserId", data.data.user.id);
        localStorage.setItem("Username", data.data.user.name);

        console.log(data.data.user.name);

        window.location.href = "Frontend/Admin/admin.html";
      } else {
        alert("Wrong password");
      }
    })
    .catch((error) => console.log("problem"));
});
