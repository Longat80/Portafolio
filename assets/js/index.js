$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html, body").animate({
      scrollTop: $(gato).offset().top - 70,
    }, 800);
  });
});

$('[data-toggle="tooltip"]').tooltip();

$('[data-toggle="popover"]').popover();
