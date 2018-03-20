
  var Loader = document.querySelector(".Loader");

  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');

  var boxAbout = document.getElementById('boxAbout');
  var boxRLDP = document.getElementById('boxRLDP');
  var boxPort = document.getElementById('boxPort');
  var boxRBF = document.getElementById('boxRBF');

  var spacerRLDP = document.getElementById('Spacer1');
  var spacerPort = document.getElementById('Spacer2');
  var spacerRBF = document.getElementById('Spacer3');
  var spacerAbout = document.getElementById('spacerAbout');

  var imgProjet1= document.getElementById('img1');
  var imgProjet2= document.getElementById('img2');
  var imgProjet3= document.getElementById('img3');



  boxAbout.addEventListener("mouseenter", function() {
      spacerAbout.style.width = "33px";
      spacerAbout.style.transition = '0.2s';
    });

    boxAbout.addEventListener("mouseleave", function() {
      spacerAbout.style.width = "0px";
      spacerAbout.style.transition = '0.2s';
    });

    //item1

  box1.addEventListener("mouseenter", function() {
    spacerRLDP.style.width = "70px";
    spacerRLDP.style.transition = '0.3s';
    imgProjet1.style.opacity= '1';
    imgProjet1.style.transition= '0.3s';
    imgProjet1.style.filter= 'grayscale(0%)';
    box1.style.zIndex='10';

  });

  box1.addEventListener("mouseleave", function() {
    spacerRLDP.style.width = "0px";
    spacerRLDP.style.transition = '0.3s';
    imgProjet1.style.transition= '0.3s';
    imgProjet1.style.opacity= '0.4';
    imgProjet1.style.filter=' grayscale(100%) blur(2px)';
    box1.style.zIndex='0';


  });

  boxRLDP.addEventListener("mouseenter", function() {
    spacerRLDP.style.width = "70px";
    spacerRLDP.style.transition = '0.3s';
    imgProjet1.style.opacity= '1';
    imgProjet1.style.transition= '0.3s';
    imgProjet1.style.filter= 'grayscale(0%)';
    box1.style.zIndex='10';

  });

  boxRLDP.addEventListener("mouseleave", function() {
    spacerRLDP.style.width = "0px";
    spacerRLDP.style.transition = '0.3s';
    imgProjet1.style.transition= '0.3s';
    imgProjet1.style.opacity= '0.4';
    imgProjet1.style.filter=' grayscale(100%) blur(2px)';
    box1.style.zIndex='0';

  });



//item2

box2.addEventListener("mouseenter", function() {
    spacerPort.style.width = "40px";
    spacerPort.style.transition = '0.2s';
    imgProjet2.style.opacity= '1';
    imgProjet2.style.transition= '0.3s';
    imgProjet2.style.filter= 'grayscale(0%)';
    box2.style.zIndex='10';

  });

  box2.addEventListener("mouseleave", function() {

    spacerPort.style.width = "0px";
    spacerPort.style.transition = '0.2s';
    imgProjet2.style.transition= '0.3s';
    imgProjet2.style.opacity= '0.4';
    imgProjet2.style.filter=' grayscale(100%) blur(2px) ';
    box2.style.zIndex='0';

  });


  boxPort.addEventListener("mouseenter", function() {
      spacerPort.style.width = "40px";
      spacerPort.style.transition = '0.2s';
      imgProjet2.style.opacity= '1';
      imgProjet2.style.transition= '0.3s';
      imgProjet2.style.filter= 'grayscale(0%)';
      box2.style.zIndex='10';
    });

    boxPort.addEventListener("mouseleave", function() {

      spacerPort.style.width = "0px";
      spacerPort.style.transition = '0.2s';
      imgProjet2.style.transition= '0.3s';
      imgProjet2.style.opacity= '0.4';
      imgProjet2.style.filter=' grayscale(100%) blur(2px)';
      box2.style.zIndex='0';

    });
  //item3

  box3.addEventListener("mouseenter", function() {
      spacerRBF.style.width = "40px";
      spacerRBF.style.transition = '0.2s';
      imgProjet3.style.opacity= '1';
      imgProjet3.style.transition= '0.3s';
      imgProjet3.style.filter= 'grayscale(0%)';
      box3.style.zIndex='10';

    });

    box3.addEventListener("mouseleave", function() {
      spacerRBF.style.width = "0px";
      spacerRBF.style.transition = '0.2s';
      imgProjet3.style.transition= '0.3s';
      imgProjet3.style.opacity= '0.4';
      imgProjet3.style.filter=' grayscale(100%) blur(2px)';
      box3.style.zIndex='0';

    });

    boxRBF.addEventListener("mouseenter", function() {
        spacerRBF.style.width = "40px";
        spacerRBF.style.transition = '0.2s';
        imgProjet3.style.opacity= '1';
        imgProjet3.style.transition= '0.3s';
        imgProjet3.style.filter= 'grayscale(0%)';
        box3.style.zIndex='10';

      });

      boxRBF.addEventListener("mouseleave", function() {
        spacerRBF.style.width = "0px";
        spacerRBF.style.transition = '0.2s';
        imgProjet3.style.transition= '0.3s';
        imgProjet3.style.opacity= '0.4';
        imgProjet3.style.filter=' grayscale(100%) blur(2px)';
        box3.style.zIndex='0';

      });
