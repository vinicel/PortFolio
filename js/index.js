
  var Loader = document.querySelector(".Loader");

  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var boxAbout = document.getElementById('boxAbout')

  var spacerRLDP = document.getElementById('Spacer1')
  var spacerPort = document.getElementById('Spacer2')
  var spacerRBF = document.getElementById('Spacer3')
  var spacerAbout = document.getElementById('spacerAbout')
  setTimeout(function() {
    Loader.classList.add("Loader-animation");
    Loader.style.zIndex = "-1";

  }, 700);

  boxAbout.addEventListener("mouseenter", function() {
      spacerAbout.style.width = "33px";
      spacerAbout.style.transition = '0.2s';
    });

    boxAbout.addEventListener("mouseleave", function() {

      spacerAbout.style.width = "0px";
      spacerAbout.style.transition = '0.2s';
    });


  box1.addEventListener("mouseenter", function() {
    spacerRLDP.style.width = "70px";
    spacerRLDP.style.transition = '0.2s';
  });

  box1.addEventListener("mouseleave", function() {

    spacerRLDP.style.width = "0px";
    spacerRLDP.style.transition = '0.2s';
  });

box2.addEventListener("mouseenter", function() {
    spacerPort.style.width = "40px";
    spacerPort.style.transition = '0.2s';
  });

  box2.addEventListener("mouseleave", function() {

    spacerPort.style.width = "0px";
    spacerPort.style.transition = '0.2s';
  });

  box3.addEventListener("mouseenter", function() {
      spacerRBF.style.width = "40px";
      spacerRBF.style.transition = '0.2s';
    });

    box3.addEventListener("mouseleave", function() {

      spacerRBF.style.width = "0px";
      spacerRBF.style.transition = '0.2s';
    });
