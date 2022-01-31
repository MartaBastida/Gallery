$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
        $('.menu-principal').addClass("bgcolor");
		$(".menu-principal").removeClass("bgcolorlight");
       } else {
        $(".menu-principal").removeClass("bgcolor");
		$('.menu-principal').addClass("bgcolorlight");
       }
    });
});

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


const colorsBtn = document.querySelector("#change-colors-btn");
const containerColors = document.querySelector(".container-change-colors");
const cambiarFondo = document.querySelector(".cambiar-fondo");
const cambiarTexto = document.querySelector(".cambiar-texto");
const btnBackground = document.querySelector('#btn-change-background');
const popupBackground = document.querySelector('.popup-background');
const closePopup = document.querySelector('.popup-close');
const btnText = document.querySelector('#btn-change-text');
const popupText = document.querySelector('.popup-text');

window.onload = function(){
    containerColors.style.display = 'none';
}

colorsBtn.addEventListener('click', () => {
    containerColors.style.display = 'block';
	popupBackground.style.display = 'block';
	popupText.style.display = 'none';
	cambiarFondo.classList.add("selected");
	cambiarTexto.classList.remove("selected");
});
 
closePopup.addEventListener('click', () => {
    containerColors.style.display = 'none';
});

cambiarFondo.addEventListener('click', () => {
    popupBackground.style.display = 'block';
	popupText.style.display = 'none';
	cambiarFondo.classList.add("selected");
	cambiarTexto.classList.remove("selected");

});

cambiarTexto.addEventListener('click', () => {
    popupBackground.style.display = 'none';
	popupText.style.display = 'block';
	cambiarTexto.classList.add("selected");
	cambiarFondo.classList.remove("selected");
});





const colorOptions = document.querySelectorAll(".change-color-option");
colorOptions.forEach(colorOption => {
	colorOption.addEventListener('click', e => {
		changeTheme(colorOption.id);
	})
});

function applyInitialTheme () {
    const themeTxt = window.sessionStorage.getItem("site-theme-txt")
    const themeBg = window.sessionStorage.getItem("site-theme-bg")
    if (themeTxt !== null) {
        const htmlTagTxt = document.querySelector("html");
        htmlTagTxt.setAttribute("data-theme-txt", themeTxt);
    }
    if (themeBg !== null) {
        const htmlTagBg = document.querySelector("html");
        htmlTagBg.setAttribute("data-theme-bg", themeBg);
    }
}

applyInitialTheme();


function changeTheme (color) {
    const htmlTag = document.querySelector("html");
	var tipo = "quitar";
	if(color == "white-txt" || color == "black-txt" || color == "red-txt" || color == "blue-txt"){
		var tipo = "txt";
		if (htmlTag.hasAttribute('data-theme-txt')) {
			htmlTag.removeAttribute('data-theme-txt')
			return window.sessionStorage.removeItem("site-theme-txt");
		}
	}else{
		if(color == "white-bg" || color == "black-bg" || color == "red-bg" || color == "blue-bg"){
			var tipo = "bg";
			if (htmlTag.hasAttribute('data-theme-bg')) {
				htmlTag.removeAttribute('data-theme-bg')
				return window.sessionStorage.removeItem("site-theme-bg");
			}
		}else if(color=="remove-colors"){
			if (htmlTag.hasAttribute('data-theme-bg')) {
				htmlTag.removeAttribute('data-theme-bg')
				return window.sessionStorage.removeItem("site-theme-bg");
			}
			if (htmlTag.hasAttribute('data-theme-txt')) {
				htmlTag.removeAttribute('data-theme-txt')
				return window.sessionStorage.removeItem("site-theme-txt");
			}
		}
	}
    
	if(tipo == "txt"){
		htmlTag.setAttribute('data-theme-txt', color)
		window.sessionStorage.setItem("site-theme-txt", color)
	}else if (tipo == "bg"){
		htmlTag.setAttribute('data-theme-bg', color)
		window.sessionStorage.setItem("site-theme-bg", color)
	}
}























/*
const colorOptions = document.querySelectorAll(".change-color-option");
const parrafos = document.querySelectorAll("p");
const headings1 = document.querySelectorAll("h1");
const headings2 = document.querySelectorAll("h2");
const headings3 = document.querySelectorAll("h3");
const headings4 = document.querySelectorAll("h4");
const spanes = document.querySelectorAll("span");
const enlaces = document.querySelectorAll("a");
const listas1 = document.querySelectorAll("li");
const contenedores = document.querySelectorAll("div");
const summaries = document.querySelectorAll("summary");
const iconos = document.querySelectorAll("i");

colorOptions.forEach(colorOption => {
	colorOption.addEventListener('click', e => {
		console.log(e);
	
		switch (e.target.id) {
			case 'img-bg':
				
				break;
			case 'black-bg':
			
				break;
			case 'white-bg':
		
				break;
			case 'red-bg':
			
				break;
			case 'black-txt':
				colorOptions.forEach(colorOptionRest => {colorOptionRest.style.background = "rgba(0, 0, 0, 0)"});
				colorOption.style.background = "rgba(0, 0, 0, 0.50)";
				
				parrafos.forEach(parrafo => {
					parrafo.classList.add("negro-txt");
				});

				headings1.forEach(heading1 => {
					heading1.classList.add("negro-txt");
				});

				headings2.forEach(heading2 => {
					heading2.classList.add("negro-txt");
				});

				headings3.forEach(heading3 => {
					heading3.classList.add("negro-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("negro-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("negro-txt");
				});

				spanes.forEach(span => {
					span.classList.add("negro-txt");
				});

				enlaces.forEach(enlace => {
					enlace.classList.add("negro-txt");
				});

				listas.forEach(lista => {
					lista.classList.add("negro-txt");
				});

				contenedores.forEach(contenedor => {
					contenedor.classList.add("negro-txt");
				});

				summaries.forEach(summary => {
					summary.classList.add("negro-txt");
				});

				iconos.forEach(icon => {
					icon.classList.add("negro-txt");
				});
			
				break;
			case 'white-txt':
				colorOptions.forEach(colorOptionRest => {colorOptionRest.style.background = "rgba(0, 0, 0, 0)"});
				colorOption.style.background = "rgba(255, 255, 255, 0.50)";
				
				parrafos.forEach(parrafo => {
					parrafo.classList.add("blanco-txt");
				});

				headings1.forEach(heading1 => {
					heading1.classList.add("blanco-txt");
				});

				headings2.forEach(heading2 => {
					heading2.classList.add("blanco-txt");
				});

				headings3.forEach(heading3 => {
					heading3.classList.add("blanco-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("blanco-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("blanco-txt");
				});

				spanes.forEach(span => {
					span.classList.add("blanco-txt");
				});

				enlaces.forEach(enlace => {
					enlace.classList.add("blanco-txt");
				});

				listas.forEach(lista => {
					lista.classList.add("blanco-txt");
				});

				contenedores.forEach(contenedor => {
					contenedor.classList.add("blanco-txt");
				});

				summaries.forEach(summary => {
					summary.classList.add("blanco-txt");
				});

				iconos.forEach(icon => {
					icon.classList.add("blanco-txt");
				});
				break;
			case 'red-txt':
				colorOptions.forEach(colorOptionRest => {colorOptionRest.style.background = "rgba(0, 0, 0, 0)"});
				colorOption.style.background = "rgba(255, 0, 0, 0.50)";
				
				parrafos.forEach(parrafo => {
					parrafo.classList.add("rojo-txt");
				});

				headings1.forEach(heading1 => {
					heading1.classList.add("rojo-txt");
				});

				headings2.forEach(heading2 => {
					heading2.classList.add("rojo-txt");
				});

				headings3.forEach(heading3 => {
					heading3.classList.add("rojo-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("rojo-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("rojo-txt");
				});

				spanes.forEach(span => {
					span.classList.add("rojo-txt");
				});

				enlaces.forEach(enlace => {
					enlace.classList.add("rojo-txt");
				});

				listas.forEach(lista => {
					lista.classList.add("rojo-txt");
				});

				contenedores.forEach(contenedor => {
					contenedor.classList.add("rojo-txt");
				});

				summaries.forEach(summary => {
					summary.classList.add("rojo-txt");
				});

				iconos.forEach(icon => {
					icon.classList.add("rojo-txt");
				});
				
				break;
			case 'blue-txt':
				colorOptions.forEach(colorOptionRest => {colorOptionRest.style.background = "rgba(0, 0, 0, 0)"});
				colorOption.style.background = "rgba(0, 0, 255, 0.50)";
				
				parrafos.forEach(parrafo => {
					parrafo.classList.add("azul-txt");
				});

				headings1.forEach(heading1 => {
					heading1.classList.add("azul-txt");
				});

				headings2.forEach(heading2 => {
					heading2.classList.add("azul-txt");
				});

				headings3.forEach(heading3 => {
					heading3.classList.add("azul-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("azul-txt");
				});

				headings4.forEach(heading4 => {
					heading4.classList.add("azul-txt");
				});

				spanes.forEach(span => {
					span.classList.add("azul-txt");
				});

				enlaces.forEach(enlace => {
					enlace.classList.add("azul-txt");
				});

				listas.forEach(lista => {
					lista.classList.add("azul-txt");
				});

				contenedores.forEach(contenedor => {
					contenedor.classList.add("azul-txt");
				});

				summaries.forEach(summary => {
					summary.classList.add("azul-txt");
				});

				iconos.forEach(icon => {
					icon.classList.add("azul-txt");
				});
				break;
			default:
	
				break;
		}
});
 

});*/