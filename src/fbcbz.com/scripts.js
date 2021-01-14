function navBarDropDown() {
  document.getElementById("dropDown").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-icon')) {
    document.getElementById("dropDown").style.display = "none";
  }
}