async function delete_book(event) {
  const target = event.target;
  const bookId = target.getAttribute("data-book-id");

  target.innerHTML = "Deleting...";

  try {
    const response = await fetch(
      "https://lms-backend.sachetsubedi001.com.np/api/books",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: bookId }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    alert("Book deleted successfully");
  } catch (error) {
    console.error("Error deleting book:", error);
  }

  setTimeout(() => {
    location.reload();
  }, 1000);
}
