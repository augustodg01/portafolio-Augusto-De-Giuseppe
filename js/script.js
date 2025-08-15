
// smooth scrolling
$(document).ready(function(){

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } //End if
    });

});


// Botón hamburguesa
let menuhamburguesa = document.getElementById("menu-hamburguesa");
const menu = document.getElementById("menu");

menuhamburguesa.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
