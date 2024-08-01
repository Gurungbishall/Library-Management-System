function delete_book(event) {
  const target = event.target;
  const bookId = target.getAttribute("data-book-id");

  fetch("https://lms-backend.sachetsubedi001.com.np/api/books", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: bookId }),
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
