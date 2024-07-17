const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const newuser = {
  //   name: "Bishal gurung",
  //   email: "gurungbishal671@gmail.com",
  //   password: "BISHAL",
  //   phone: "9840560704",
  //   apartment: "test-1",
  //   city: "kathmandu",
  //   state: "bagmati",
  //   zip: "26400",
  //   country: "Nepal",
  // };

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
});
