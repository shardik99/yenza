document.addEventListener("DOMContentLoaded", function() {
  var sideNav = document.querySelector(".sidenav");
  M.Sidenav.init(sideNav, {});
  var par = document.querySelectorAll(".parallax");
  M.Parallax.init(par, {});
  var sSpy = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(sSpy, {});
  // var elems = document.querySelectorAll('.dropdown-trigger');
  // var instances = M.Dropdown.init(elems, {coverTrigger:false, constrainWidth:false, closeOnClick: false});
});
