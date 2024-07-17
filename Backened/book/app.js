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
      const markup = `<div>
        <img src="${books.attachment}" />
        <p>${books.title}</p>
        <p>${books.author}</p>
        </div>
        `;
      document.getElementById("book").insertAdjacentHTML("beforeend", markup);
      // document.getElementById("book1").insertAdjacentHTML("beforeend", markup);
      // document.getElementById("book2").insertAdjacentHTML("beforeend", markup);
      // document.getElementById("book3").insertAdjacentHTML("beforeend", markup);
    });
  } catch (error) {
    console.log(error);
  }
}

const Showall = () => {
  let list_of_book = document.getElementById("book");

  if (list_of_book.className == "list_of_book") {
    list_of_book.classList.replace("list_of_book", "show_all");
  } else {
    list_of_book.classList.replace("show_all", "list_of_book");
  }
};
