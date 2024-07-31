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
        <div class="book_search">
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

// Debounce function to limit API calls
function debounce(func, delay) {
  return function(...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

form_search.addEventListener("input", debounce(book, 300));
