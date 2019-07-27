
//Funciones

function RemoveElements() {
    USER_NAME.remove();
    FORM_SEARCH.remove()

}


function addElements() {
    HEADER.append(FORM_SEARCH);
    HEADER.append(USER_NAME);

}

function menu_responsive(){

    if (NAV.classList.contains('active')){
        NAV.classList.remove('active');
    } else {
        NAV.classList.add('active');
    }
    
}

//------------------------------------------------------------------------

// Elementos

const USER_NAME = document.getElementById('login');
const FORM_SEARCH = document.getElementById('form-search');
const LOGO = document.getElementById('logo-container');
const HEADER = document.getElementById('header');
const LOGO_TITLE = document.getElementById('title-container');
const BURGER_MENU = document.getElementById('burger-menu');
const NAV = document.getElementById('nav');


//-------------------------------------------------------------------------




// Porgrama

const TABLET = window.matchMedia('screen and (max-width: 768px');
const SMARPHONE = window.matchMedia('screen and (max-width: 480px');

//Validar en que tipo de pantalla estoy al hacer REFRSH de la pagina



if ( TABLET.matches ){
    ValidationTablet(TABLET);
}


TABLET.addListener(ValidationTablet);

SMARPHONE.addListener(ValidationSmarphone)



function ValidationTablet( event ) {

    if ( event.matches ) {
        //Todo lo que quiero que suceda dentro de Media query
        RemoveElements();
        BURGER_MENU.addEventListener('click', menu_responsive);
        
    } else {
        //Remover todo lo que coloque en la condición de true.
        addElements()
        BURGER_MENU.removeEventListener('click', menu_responsive);
        
    }
}

// function ValidationSmarphone( event ) {

//     if ( event.matches ) {
//         //Todo lo que quiero que suceda dentro de Media query
//         LOGO_TITLE.remove();
//     } else {
//         //Remover todo lo que coloque en la condición de true.
//         HEADER.append(LOGO_TITLE);
//     }
// }