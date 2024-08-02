book_profile();
async function book_profile() {
  const bookid = localStorage.getItem("selectedbookID");
  const url = localStorage.getItem("selectedURL");

  try {
    const res = await fetch(
      `https://lms-backend.sachetsubedi001.com.np/api/books/${bookid}`
    );

    if (!res.ok) {
      throw new Error("Error");
    }
    const obj = await res.json();
    console.log(obj);
    const book = obj.data;
    const markup = ` <div class = "go_back"><i class="fa-solid fa-arrow-left"></i><a href="${url}">Back to result</a></div>
        <div class = "book_profile_top">
         <div class = "book_profile_top_left">
             <img src="${book.attachment}" />
         </div>
      <div class = "book_profile_top_middle">
        <p class = "that_book_title">${book.title}</p>
        <p class = "that_book_author">by ${book.author}</p>
        <p class = "edition">Second edition</p>
        <p class = "rating">
        <i class="fa-solid fa-star" style = "color: gold;"></i>
        <i class="fa-solid fa-star" style = "color: gold;"></i>
        <i class="fa-solid fa-star" style = "color: gold;"></i>
        <i class="fa-solid fa-star" style = "color: gold;"></i>
        <i class="fa-solid fa-star" style = "color: gold;"></i>
        5.0 Rating
        </p>
        <p class = "available">Availability
        <span>Hard copy</span>
        </p>
        <button class = "Borrow_btn" borrow-book-id = ${book.id} onclick = "borrow_book(event)">Borrow</button>
      </div>
      </div>
    
    <div class = "book_profile_bottom">
    <div class = "book_profile_bottom_header">Book Details</div>
    <p>Published in
    <span>USA</span>
    </p>
    <p>Edition notes
    <span>Genre: fiction</span>
    </p>
    <p>The Physical object
    <span>Pagination:  ix, 122p.(large print)</span>
    <span>No of pages: ${book.pages}</span>
    </p>
    <p>ID numbers
    <span>ISBN: ${book.isbn}</span>
    </p>
  </div>
      `;
    document
      .querySelector(".book_profile")
      .insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.log(error);
  }
  localStorage.removeItem("selectedbookID");
  localStorage.removeItem("selectedURL");
}
