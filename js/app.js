/*$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.menu-principal').addClass("bgcolor");
       } else {
        $(".menu-principal").removeClass("bgcolor");
       }
    });
});*/

function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies != 'true'){
      cajacookies.style.display = 'flex';
    }
}
  
function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
}
  
$(document).ready(function () {
    compruebaAceptaCookies();
});

