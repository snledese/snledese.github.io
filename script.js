window.sr = ScrollReveal();

sr.reveal('.navbarName', {
  duration: 2000,
  origin:'left',
  distance:'50px'
});


/*sr.reveal('.navbar-collapse .collapse .in a', {
  duration: 2000,
  origin:'left',
  distance:'50px'
});


sr.reveal('#nav1 #navbar #home', {
  delay: 500,
  duration: 2000,
  origin:'left',
  distance:'0px'
});
sr.reveal('#nav1 #navbar #about', {
  delay: 900,
  duration: 2000,
  origin:'left',
  distance:'0px'
});
sr.reveal('#nav1 #navbar #portfolio', {
  delay: 1300,
  duration: 2000,
  origin:'left',
  distance:'0px'
});
sr.reveal('#nav1 #navbar #resume', {
  delay: 1600,
  duration: 2000,
  origin:'left',
  distance:'0px'
});*/

sr.reveal('.clock', {
  delay: 1100,
  duration: 1500,
  origin:'top',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.firstSection-left', {
  duration: 2000,
  origin:'left',
  distance:'300px'
});
sr.reveal('.firstSection-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.secondSection-left', {
  duration: 2000,
  origin:'bottom',
  distance:'100px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list1', {
  delay: 300,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list2', {
  delay: 700,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list3', {
  delay: 1100,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list4', {
  delay: 1500,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list5', {
  delay: 1900,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list6', {
  delay: 2300,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list7', {
  delay: 2700,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list8', {
  delay: 3100,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list9', {
  delay: 3500,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.secondSection-right #list10', {
  delay: 3900,
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('#socialinfo h2, #socialinfo p', {
  delay: 700,
  duration: 1000,
  origin:'right',
  distance:'0px',
  viewFactor: 0.2
});
sr.reveal('#socialIcons', {
  delay: 400,
  duration: 1000,
  origin:'right',
  distance:'0px',
  viewFactor: 0.2
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
