$(document).ready(function () {
  // SlickNav
  $("#menu").slicknav({
    label: "",
    brand: "Zeeshan",
  });

  // Skitter Slider
  $(".skitter-large").skitter({
    dots: false,
    navigation: true,
    theme: "clean",
    interval: 3000,
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 3, nav: false },
      1000: { items: 5, nav: false, loop: true },
    },
  });

  // Progress Bars Animation
  $(".progress-bar-html").animate({ width: "95%" }, 1000, function () {
    $(".progress-bar-css").animate({ width: "80%" }, 1000, function () {
      $(".progress-bar-bootstrap").animate({ width: "80%" }, 1000, function () {
        $(".progress-bar-mquery").animate({ width: "80%" }, 1000, function () {
          $(".progress-bar-js").animate({ width: "70%" }, 1000, function () {
            $(".progress-bar-jquery").animate(
              { width: "90%" },
              1000,
              function () {
                $(".progress-bar-git").animate({ width: "60%" }, 1000);
              }
            );
          });
        });
      });
    });
  });

  // Footer year auto-update
  let year = new Date().getFullYear();
  let yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = year;
});
