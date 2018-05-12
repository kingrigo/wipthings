$(document).ready(function() {
    $("#servicios").click(function(){
        $("#centro").load("servicios.html");
    });
    $("#contactos").click(function(){
        $("#centro").load("contactos.html");
    });
});