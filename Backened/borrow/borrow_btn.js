async function borrow_book(event) {
  let target = event.target;

  const bookId = target.getAttribute("borrow-book-id");
  console.log(bookId);

  const UserId = localStorage.getItem("UserId");

  console.log(UserId);

  try {
    const response = await fetch(
      "https://lms-backend.sachetsubedi001.com.np/api/reservations/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: UserId,
          bookId: bookId,
        }),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.text(); // Get more error details if available
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorDetails}`
      );
    }

    const data = await response.json();
    console.log(data);

    alert("Book added successfully");
  } catch (error) {
    console.error("Error adding book:", error);
  }
}
