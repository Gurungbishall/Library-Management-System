students();

async function students() {
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
    let i = 0;
    arrayofbook.forEach((students) => {
      i++;
      const markup = `<tr>
          <td>${i}</td>
          <td>
          <img src="${students.avatar}" />
          </td>
          <td>
          ${students.id}
          </td>
          <td>
          ${students.name}
          </td>
          <td>
          ${students.email}
          </td>
           <td>
          ${students.phone}
          </td>
          <td>
          ${students.city}
          </td>
          <td class="edit_delete">
          <button class= "delete_student" data-student-id="${students.id}" onclick="delete_student(event)">Delete</button>
          </td>
          </tr>
          `;
      document.querySelector("table").insertAdjacentHTML("beforeend", markup);
    });
  } catch (error) {
    console.log(error);
  }
}
