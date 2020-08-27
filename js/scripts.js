$(document).ready(function () {
    $("#my-carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if (
            $("#carouselButton")
                .children("span")
                .hasClass("fa-pause")
        ) {
            $("#my-carousel").carousel("pause");
            $("#carouselButton")
                .children("span")
                .removeClass("fa-pause");
            $("#carouselButton")
                .children("span")
                .addClass("fa-play");
        } else if (
            $("#carouselButton")
                .children("span")
                .hasClass("fa-play")
        ) {
            $("#my-carousel").carousel("cycle");
            $("#carouselButton")
                .children("span")
                .removeClass("fa-play");
            $("#carouselButton")
                .children("span")
                .addClass("fa-pause");
        }
    });
    $("#loginButton").click(function () {
        $("#loginModal").modal("toggle");
    });
    $("#reserveButton").click(function () {
        $("#reserveModal").modal("toggle");
    });
    $('.jumbotron').click( function() {
        console.log('click');
        // use this instead of using .jumbotron again
        $(this).animate({
          backgroundColor: "rgb(229, 76, 76)",
        }, 1000);
        $('body').animate({
          backgroundColor: "#ff7373"
        }, 1000);
      });
});