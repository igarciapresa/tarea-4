$(document).ready(function () {
    $(".menu").on('click', function(){
        $(".nav2").toggleClass("outspread");
        $("body").toggleClass("locked");
    });
});