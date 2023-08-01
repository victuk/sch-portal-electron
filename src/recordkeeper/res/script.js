document.documentElement.classList = "light";


// document.querySelector(".jsFilter").addEventListener("click", function () {
//     document.querySelector(".filter-menu").classList.toggle("active");
//   });
  
  const sidebar = document.querySelector(".sidebar");
  const menuBars = document.querySelector(".menu-bars");
  
  menuBars.addEventListener("click", function() {
    if(sidebar.style.display == "none" || sidebar.style.display == "") {
      sidebar.style.display = "flex";
    } else {
      sidebar.style.display = "none";
    }
  });
  
//   document.querySelector(".grid").addEventListener("click", function () {
//     document.querySelector(".list").classList.remove("active");
//     document.querySelector(".grid").classList.add("active");
//     document.querySelector(".products-area-wrapper").classList.add("gridView");
//     document
//       .querySelector(".products-area-wrapper")
//       .classList.remove("tableView");
//   });
  
//   document.querySelector(".list").addEventListener("click", function () {
//     document.querySelector(".list").classList.add("active");
//     document.querySelector(".grid").classList.remove("active");
//     document.querySelector(".products-area-wrapper").classList.remove("gridView");
//     document.querySelector(".products-area-wrapper").classList.add("tableView");
//   });
  
  var modeSwitch = document.querySelector(".mode-switch");
  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("light");
    modeSwitch.classList.toggle("active");
  });

const docName = location.href.split("/")[4];

console.log(docName);

if(docName == "index.html") {
    document.querySelector(".home").classList.add("active");
} else if(docName == "checkresult.html") {
    document.querySelector(".check-result").classList.add("active");
} else if(docName == "payment.html") {
    document.querySelector(".pay-school-fee").classList.add("active");
}

function logOut() {
  localStorage.removeItem("accesstoken");
  location.assign("../login.html");
}

function isLoggedIn() {
  if(!localStorage.getItem("accesstoken")) {
    location.assign("../login.html");
  }
}

// isLoggedIn();
