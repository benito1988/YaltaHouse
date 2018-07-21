// open modal card
$(".open-modal").click(function(){
    $(".modal-window").addClass("show");
    $('html, body').addClass('overflowHidden');
});

$(".close-modal").click( function(){
    $(".modal-window").removeClass("show");
    $( 'html, body' ).removeClass( 'overflowHidden' );
});

// open & close mobile menu
$(".menu").click(function(){
    $(".header-navigation").toggleClass("nav-show");
});

$(".nav-link").click( function(){
    $(".header-navigation").removeClass("nav-show");
});

$(window).scroll(function() {
    $(".header-navigation").removeClass("nav-show");
});

// add google map
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
