var Loader = document.querySelector(".Loader");


var boxAbout = document.getElementById('boxAbout')
var spacerAbout = document.getElementById('spacerAbout')
var cv = document.getElementById('cv')


var boxAbout = document.getElementById('boxAbout')
var spacerAbout = document.getElementById('spacerAbout')


cv.addEventListener("mouseenter", function() {
  cv.style.opacity =
  });

boxAbout.addEventListener("mouseenter", function() {
    spacerAbout.style.width = "33px";
    spacerAbout.style.transition = '0.2s';
  });

  boxAbout.addEventListener("mouseleave", function() {

    spacerAbout.style.width = "0px";
    spacerAbout.style.transition = '0.2s';
  });
