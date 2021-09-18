$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});


function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
