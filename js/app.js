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












//obtiene elementos
/*const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//vincula listeners a estos elementos
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);



function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}

function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//Activa evento personalizado
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}

function handleTitleChange(e){
	const result = document.getElementById('result');

	result.innerHTML = 'The result is: ' + e.target.textContent;
}*/




/*const btnBackground = document.querySelector('#btn-change-background');
const popupBackground = document.querySelector('.popup-wrapper-background');
const closeBackground = document.querySelector('.popup-close-background');

btnBackground.addEventListener('click', () => {
    popupBackground.style.display = 'block';
});
 
closeBackground.addEventListener('click', () => {
    popupBackground.style.display = 'none';
});
 
popupBackground.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper-background') {
        popupBackground.style.display = 'none';
    }
});*/




/*const btnText = document.querySelector('#btn-change-text');
const popupText = document.querySelector('.popup-wrapper-text');
const closeText = document.querySelector('.popup-close-text');*/
 
/*window.onload = function(){
    popupText.style.display = 'none';
    popupBackground.style.display = 'none';
}*/

/*btnText.addEventListener('click', () => {
    popupText.style.display = 'block';
});
 
closeText.addEventListener('click', () => {
    popupText.style.display = 'none';
});
 
popupText.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper-text') {
        popupText.style.display = 'none';
    }
});*/










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
 

});