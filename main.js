
  var Loader = document.querySelector(".Loader");
  var box1 = document.getElementById('box1');
  var itemHov1 = document.getElementById('titleitem1');
  var spacerRLDP = document.getElementById('Spacer1')


  setTimeout(function() {
    Loader.classList.add("Loader-animation");
    Loader.style.zIndex = "-1";

  }, 700);
  
  box1.addEventListener("mouseenter", function() {
    spacerRLDP.style.width = "70px";
    spacerRLDP.style.transition = '0.2s';
  });

  box1.addEventListener("mouseleave", function() {

    spacerRLDP.style.width = "0px";
    spacerRLDP.style.transition = '0.2s';
  });
