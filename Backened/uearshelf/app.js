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
      const markup = `<div class = "book">
      <div class = "book_img_title_author">
        <img src="${books.attachment}" />
        <p class= "book_title">${books.title}</p>
        <p class= "book_author">${books.author}</p>
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

// const Showall = () => {
//   let list_of_book = document.getElementById("book");

//   if (list_of_book.className == "list_of_book") {
//     list_of_book.classList.replace("list_of_book", "show_all");
//   } else {
//     list_of_book.classList.replace("show_all", "list_of_book");
//   }
// };
