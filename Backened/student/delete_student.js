async function delete_student(event) {
  const target = event.target;
  const studentId = target.getAttribute("data-student-id");

  target.innerHTML = "Deleting...";

  try {
    const response = await fetch(
      "https://lms-backend.sachetsubedi001.com.np/api/users",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: studentId }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    alert("Member removed successfully");
  } catch (error) {
    console.error("Error removing book :", error);
  }

  setTimeout(() => {
    location.reload();
  }, 1000);
}
