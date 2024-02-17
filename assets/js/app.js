
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {

    $("h1").dblclick(function () {
        $(this).css({
            "color": "blue",

        });
    });

    $("h2").dblclick(function () {
        $(this).css({
            "color": "blue",

        });
    });

    $("#recipe1").click(function () {
        $(this).toggle("slow");
    });

    $("#recipe2").click(function () {
        $(this).toggle("slow");
    });

    $("#recipe3").click(function () {
        $(this).toggle("slow");
    });

    $("#recipe4").click(function () {
        $(this).toggle("slow");
    });
});


document.getElementById("boton1").addEventListener("click", function () {
    alert("El mensaje fue enviado correctamente...");
});



