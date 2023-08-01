const h = byID("h");

h.innerHTML = `
<div class="site-navbar bg-light">
<div class="py-1">
<div class="row align-items-center">
<div class="col-2">
    <a href="index.html"><h2 class="mb-0 site-logo"><div style="background-image: url(resources/images/happy-students-1.jpg); height:100px; width: 150px; background-size: contain; background-repeat: no-repeat;"></h2></a>
</div>
<div class="col-10">
<nav class="site-navigation text-right" role="navigation">
<div class="container">
<div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>
<ul class="site-menu js-clone-nav d-none d-lg-block">
    <li class="home-nav">
    <a href="index.html">Home</a>
    </li>
    <li class="sf-nav"><a href="pay-student-fee.html">Pay School Fee</a></li>
    <li class="admission-nav"><a href="student-admission.html">Admission</a></li>
    <li class="ann-nav"><a href="announcement.html">Announcement</a></li>
    <!-- <li><a href="contact.html">Contact</a></li> -->
    <li class="login-nav"><a href="login.html">Login</a></li>
</ul>
</div>
</nav>
</div>
</div>
</div>
</div>
`;

const docName = location.href.split("/")[3];

const homeNav = document.getElementsByClassName("home-nav")[0];
const sfNav = document.getElementsByClassName("sf-nav")[0];
const admissionNav = document.getElementsByClassName("admission-nav")[0];
const annNav = document.getElementsByClassName("ann-nav")[0];
const loginNav = document.getElementsByClassName("login-nav")[0];

if(docName == "index.html") {
    homeNav.classList.add("active");
} else if(docName == "pay-student-fee.html") {
    sfNav.classList.add("active");
} else if(docName == "student-admission.html") {
    admissionNav.classList.add("active");
} else if(docName == "announcement.html") {
    annNav.classList.add("active");
} else if(docName == "login.html") {
    loginNav.classList.add("active");
}
