function borrow_book(event) {
  let target = event.target;

  const bookId = target.getAttribute("borrow-book-id");
  console.log(bookId);

  const UserId = localStorage.getItem("UserId");

  console.log(UserId);

  fetch("https://lms-backend.sachetsubedi001.com.np/api/reservations/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            userId: UserId, 
            bookId: bookId }),
    })
    .then((res) => {
        if (!res.ok) {
            console.log("Problem");
            return;
        }
        return res.json();
    })
    .then((data) => {
        console.log(data.message);
    })
    .catch((error) => console.log("problem"));
}
