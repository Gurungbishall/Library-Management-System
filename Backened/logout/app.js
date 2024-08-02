function logout() {
  if (confirm("Do you wanted to logout") == true) {
    
   localStorage.removeItem("UserId");

   localStorage.removeItem("Username");
    window.location.href = "../../index.html";
  } else {
  }
}
