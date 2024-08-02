book();
async function book() {
  try {
    const res = await fetch(
      " https://lms-backend.sachetsubedi001.com.np/api/books"
    );

    if (!res.ok) {
      throw new Error("Error");
    }
    const obj = await res.json();
    console.log(obj);
    const arrayofbook = obj.data;

    arrayofbook.forEach((books) => {
      const markup = `<div class="book_profile" book-profile-id="${books.id}" onclick="book_profile_id(event)">
    <img src="${books.attachment}" alt="Book cover image">
    <div class="book_title_author" book-profile-id="${books.id}">
        <p class="book_title">${books.title}</p>
        <p class="book_author">${books.author}</p>
    </div>
    <p class="Rating">4.5/5</p>
    <p class="Category">??</p>
    <p class="Availability">Hard copy</p>
</div>

        `;
      document
        .getElementById("booklist")
        .insertAdjacentHTML("beforeend", markup);
    });
  } catch (error) {
    console.log(error);
  }
}

