$(document).ready(function(){
    $("#datos").click(function(){
        $(".info").load("datos.html");
    });
    $("#carta").click(function(){
        $(".info").load("carta.html");
    });
    $("#estudios").click(function(){
        $(".info").load("estudios.html");
    });
    $("#habilidades").click(function(){
        $(".info").load("habilidades.html");
    });
    $("#experiencia").click(function(){
        $(".info").load("experiencia.html");
    });
    $("#cursos").click(function(){
        $(".info").load("cursos.html");
    });
});