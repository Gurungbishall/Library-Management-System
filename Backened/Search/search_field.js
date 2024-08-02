username();
async function username() {
  //username//
  const username = localStorage.getItem("Username").slice(0, 5);
  console.log(username);
  document
    .getElementById("user_name")
    .insertAdjacentHTML("beforeend", username);
}

//searching boooks//
const form_search = document.getElementById("form_search");
const input_search = document.getElementById("input_search");
const search_result = document.querySelector(".search_result");

let debounceTimer;

function clearResults() {
  search_result.innerHTML = "";
  search_result.style.backgroundColor = "transparent";
}

function showResults() {
  search_result.style.backgroundColor = "aliceblue";
}

async function book() {
  const inputdata = input_search.value.trim();
  clearResults();

  if (inputdata === "") {
    return;
  }

  try {
    const res = await fetch(
      "https://lms-backend.sachetsubedi001.com.np/api/books"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    const obj = await res.json();
    const arrayofbook = obj.data;

    const foundBooks = arrayofbook.filter((book) =>
      book.title.toLowerCase().startsWith(inputdata.toLowerCase())
    );

    if (foundBooks.length === 0) {
      search_result.innerHTML = "<p>No books found</p>";
      return;
    }

    foundBooks.forEach((book) => {
      const markup = `
        <div class="book_search" book-profile-id="${book.id}" onclick="book_profile_id(event)">
          <img src="${book.attachment}" alt="${book.title} cover image" />
          <div class="book_search_title_author">
            <p class="book_title">${book.title}</p>
            <p class="book_author">${book.author}</p>
          </div>
        </div>
      `;
      search_result.insertAdjacentHTML("beforeend", markup);
    });
    showResults();
  } catch (error) {
    search_result.innerHTML =
      "<p>An error occurred. Please try again later.</p>";
    console.error(error);
  }
}

function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

form_search.addEventListener("input", debounce(book, 300));

//To click on cook and go to book details//
function book_profile_id(event) {
  let target = event.target;
  while (target && !target.hasAttribute("book-profile-id")) {
    target = target.parentElement;
  }

  if (target) {
    const bookId = target.getAttribute("book-profile-id");
    localStorage.setItem("selectedbookID", bookId);
    console.log(bookId);

    const currentPageURL = window.location.href;
    localStorage.setItem("selectedURL", currentPageURL);
    console.log(currentPageURL);

    window.location.href = "../book/book_profile.html";
  } else {
    console.error("No book-profile-id found in the event target hierarchy.");
  }
}
