const submitBooks = document.querySelector(".add_book_btn");

submitBooks.addEventListener("click", async (e) => {
  e.preventDefault();
  const bookname = document.getElementById("bookTitle").value; //Get the title
  const authorName = document.getElementById("author").value; //Get the author
  const bookPage = document.getElementById("page").value; //Get the pages
  const bookAvailable = document.getElementById("price").value; //Get the available
  const isbn = document.getElementById("isbn").value;
  const description = document.getElementById("bookDescription").value;
  const bookImages = document.getElementById("bookImgg");
  if (!bookname && !authorName && !bookPage && !bookAvailable) {
    alert("Cannot add empty value ", "red");
  }
  if (!bookname) {
    const bkname = document.getElementById("bookTitle");
    bkname.style.border = "1.2px solid red";
  }
  if (!authorName) {
    const authName = document.getElementById("author");
    authName.style.border = "1.2px solid red";
  }
  if (!bookPage) {
    const bkpage = document.getElementById("page");
    bkpage.style.border = "1.2px solid red";
  }
  if (!bookAvailable) {
    const bkprice = document.getElementById("price");
    bkprice.style.border = "1.2px solid red";
  } else {
    const newForm = new FormData();
    newForm.append("attachment", bookImages.files[0]);
    newForm.append("title", bookname);
    newForm.append("author", authorName);
    newForm.append("pages", bookPage);
    newForm.append("available", bookAvailable);
    newForm.append("isbn", isbn);
    newForm.append("description", description);
    submitBooks.innerHTML = "Submitting";
    const response = await fetch(
      "https://lms-backend.sachetsubedi001.com.np/api/books",
      {
        method: "post",
        body: newForm,
      }
    );
    const data = await response.json();

    submitBooks.innerHTML = "Submit";
    if (response.status == 201) {
      alert("Book added successfully", "limegreen");
    } else {
      alert("Error occured", "red");
    }
    setTimeout(() => {
      location.reload();
    }, 1000);
    console.log(data);
  }
});

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
    let i = 0;
    arrayofbook.forEach((books) => {
      i++;
      const markup = `<tr>
        <td>${i}</td>
        <td>
        <img src="${books.attachment}" />
        </td>
        <td>
        ${books.title}
        </td>
        <td>
        ${books.isbn}
        </td>
        <td>
        ${books.author}
        </td>
         <td>
        ${books.description}
        </td>
        <td>
        <button class= "delete_book" data-book-id="${books.id}" onclick="delete_book(event)">Delete</button>
        </td>
        </tr>
        `;
      document.querySelector("table").insertAdjacentHTML("beforeend", markup);
    });
  } catch (error) {
    console.log(error);
  }
}


