book();
async function book() {
  try {
    const res = await fetch(
      " https://lms-backend.sachetsubedi001.com.np/api/reservations/user/clzc0kc93000018r22rvzhf2m"
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
