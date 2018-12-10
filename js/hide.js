
$(document).ready(function(){

    $("#navbar").hide();
    $("#suggestions-area").hide();
    $("#placesArea").hide();
    $("#map").hide();
    $("#diningArea").hide();
    $("#suggestions").hide();

});

$("#submit").on("click", function(){
    $("#header").hide();
    $("#form").hide();
    $("#description").hide();

    $("#navbar").show();
    $("#placesArea").show();
    $("#map").show();
    $("#suggestions-area").show();
    $("#diningArea").show();
    $("#suggestions").show();
});

