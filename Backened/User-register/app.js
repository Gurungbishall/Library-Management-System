const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  if (password1.value != password2.value) {
    alert("Not same password");
  } else {
    const formdata = new FormData(form);

    const data = Object.fromEntries(formdata);

    fetch("https://lms-backend.sachetsubedi001.com.np/api/auth/register", {
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
          window.location.assign("../../index.html");
        }
      })
      .catch((error) => console.log("problem"));
  }
});
