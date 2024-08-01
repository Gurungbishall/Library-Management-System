function delete_student(event) {
  const target = event.target;
  const studentId = target.getAttribute("data-student-id");

  fetch("https://lms-backend.sachetsubedi001.com.np/api/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: studentId }),
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
    })
    .catch((error) => console.log("problem"));

  setTimeout(() => {
    location.reload();
  }, 2000);
}
