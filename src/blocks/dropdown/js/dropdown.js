function dropdownFunction() {
    document.getElementById("dropbox").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;

buttonCountPlus.onclick = function() {
    if (number <= 3) {
        number++;
        count.innerHTML = number;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 1) {
       number--;
       count.innerHTML = number;
    }
}