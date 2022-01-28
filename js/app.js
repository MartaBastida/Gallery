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