$(".buttone").click(function() { 
    $(".elephant").toggle();
});

$(".button2").click(function() { 
    $(".chains").delay(5000).fadeOut();
    $(".free").fadeIn();
});

$(".button3").click(function() {
    $(".water").show();
    $(".dipped").slideUp();
});