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
    let no_of_books = 0;
    arrayofbook.forEach((books) => {
      no_of_books++;
    });
    console.log(no_of_books);
    document.querySelector(".no_of_books").innerHTML = no_of_books;
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await fetch(
      " https://lms-backend.sachetsubedi001.com.np/api/users"
    );

    if (!res.ok) {
      throw new Error("Error");
    }
    const obj = await res.json();
    console.log(obj);
    const arrayofbook = obj.data;
    let no_of_students = 0;
    arrayofbook.forEach((students) => {
      no_of_students++;
    });
    console.log(no_of_students);
    document.querySelector(".no_of_students").innerHTML = no_of_students;
  } catch (error) {
    console.log(error);
  }
}
