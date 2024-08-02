book();
async function book() {
  const userId = localStorage.getItem("UserId");
  try {
    const res = await fetch(
      `https://lms-backend.sachetsubedi001.com.np/api/reservations/user/${userId}`
    );

    if (!res.ok) {
      throw new Error("Error");
    }
    const obj = await res.json();
    console.log(obj);
    const arrayofbook = obj.data;

    arrayofbook.forEach((reservation) => {
      const book = reservation.book;

      const markup = `<div class = "book" book-profile-id = "${book.id}" onclick ="book_profile_id(event)">
      <div class = "book_img_title_author">
        <img src="${book.attachment}" />
        <p class= "book_title">${book.title}</p>
        <p class= "book_author">${book.author}</p>
        </div>
        <div class = "Borrowed">
          <div>
          Borrowed on
          <p class = "Borrowed_body">
          11 mar 2024
          </p>
          </div>
          <div>
          Submission Due
          <p class = "Borrowed_body">
          28 mar 2024
          </p>
          </div>

          <button class ="Borrowed_btn">Borrowed</button> 
        </div>
        </div>
        `;
      document
        .getElementById("book_list")
        .insertAdjacentHTML("beforeend", markup);
    });
  } catch (error) {
    console.log(error);
  }
}
