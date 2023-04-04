function buscar(){
    var busqueda=document.getElementById('search').value;
    if(busqueda){
    busqueda=busqueda.replace(" ", "+")
    busqueda='https://www.youtube.com/results?search_query='+busqueda
    window.open(busqueda)
    document.getElementById('search').value=''
    }
}

document.getElementById("search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("search_button").click();
    }
});

var article = false;

function cambio(){
    article=!article;
}

function myFunction3(x) {
    if (x.matches) { // If media query matches
        if((Boolean(document.getElementById('asecundario').style.visibility==='collapse') && article)||(Boolean(document.getElementById('asecundario').style.visibility==='visible') && !article)){
            colapsar();
        }
    }
}



var z = window.matchMedia("(min-width: 1081px)")
z.addEventListener('change', myFunction3) // Attach listener function on state changes
myFunction3(z) // Call listener function at run time

$('.owl-carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    navText:["<div class='nav-btn prev-slide'><img src='./assets/arrow_left.png' style='width: 12px; height: 12px' title='Anterior'></div>","<div class='nav-btn next-slide'><img src='./assets/arrow_right.png' style='width: 12px; height: 12px' title='Siguiente'></div>"],
    autoWidth: true,
    slideBy:3,
});

function expandir(){
    document.getElementById('menuylogo').classList.toggle('displaynone');
    document.getElementsByClassName('navc')[0].classList.toggle('centering');
    document.getElementById('barra').classList.toggle('show');
    document.getElementById('search_button').classList.toggle('lupanormal');
    document.getElementById('img_perfil').classList.toggle('displaynone');
    document.querySelectorAll('.responsive').forEach(p => p.classList.toggle('show'));
    document.getElementById('search_button').setAttribute("onClick", "buscar(); coveroff()");
}

function coveron(){
    document.getElementById('cover').style.display='block';
}

function coveroff(){
    document.getElementById('cover').style.display='none';
    back();
}

function back(){
    expandir();
    document.getElementById('search_button').setAttribute("onClick", "expandir(); coveron(); makefocus()");
}

function makefocus(){
    document.getElementById('search').focus();
}

function colapsar(){
    document.getElementById('aprincipal').classList.toggle('articlecollapse');
    document.getElementsByClassName('right')[0].classList.toggle('rightcollapse');
    document.getElementsByClassName('mainm')[0].classList.toggle('mainmcollapse');
    document.querySelectorAll('.vidc').forEach(p => p.classList.toggle('vidccollapse'));
    document.querySelectorAll('.vids').forEach(p => p.classList.toggle('vidscollapse'));
    document.querySelectorAll('.vidtitulos').forEach(p => p.classList.toggle('vidtituloscollapse'));
    document.getElementsByClassName('carousel-wrap')[0].classList.toggle('carousel-wrap-collapse');
    if(document.getElementById('asecundario').style.visibility==='visible'){
        document.getElementById('asecundario').style.visibility='collapse';
    } else{
        document.getElementById('asecundario').style.visibility='visible';
    };
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      if(document.getElementById('asecundario').style.visibility!=='visible'){
        colapsar()
      }
    }
}

var x = window.matchMedia("(max-width: 1080px)")
x.addEventListener('change', myFunction) // Attach listener function on state changes
myFunction(x) // Call listener function at run time


// Check screen width at specific breakpoints
var mediaQuery = window.matchMedia('(max-width: 500px)');
var isSmallScreen = mediaQuery.matches;

// Wrap elements inside parent div if screen is small
if (isSmallScreen) {
    var element1 = document.getElementById('element1');
    var element2 = document.getElementById('element2');
    var parentElement = document.createElement('div');
    parentElement.classList.add('parent-class');
    element1.parentNode.insertBefore(parentElement, element1);
    parentElement.appendChild(element1);
    parentElement.appendChild(element2);
    document.getElementById('search_button').setAttribute("onClick", "expandir(); coveron(); makefocus()");
}

// Listen for changes in screen width
mediaQuery.addEventListener("change", function(event) {
    if (event.matches) {
        // Screen width is less than 500px
        // Wrap elements inside parent div
        var element1 = document.getElementById('element1');
        var element2 = document.getElementById('element2');
        var parentElement = document.createElement('div');
        parentElement.classList.add('parent-class');
        element1.parentNode.insertBefore(parentElement, element1);
        parentElement.appendChild(element1);
        parentElement.appendChild(element2);
        document.getElementById('search_button').setAttribute("onClick", "expandir(); coveron(); makefocus()");
    } else {
        // Screen width is greater than or equal to 500px
        // Unwrap elements from parent div
        var parentElement = document.querySelector('.parent-class');
        if (parentElement) {
            var element1 = parentElement.firstChild;
            var element2 = element1.nextSibling;
            parentElement.parentNode.insertBefore(element1, parentElement);
            parentElement.parentNode.insertBefore(element2, parentElement);
            parentElement.parentNode.removeChild(parentElement);
            document.getElementById('search_button').setAttribute("onClick", "buscar()");
        }
    }
});

function myFunction2(x) {
    if (x.matches) { // If media query matches
        if(document.getElementById('menuylogo').classList.contains('displaynone')){
        coveroff()
        document.getElementById('search_button').setAttribute("onClick", "buscar()");
        }
    }
}
    
var y = window.matchMedia("(min-width: 501px)")
y.addEventListener('change', myFunction2) // Attach listener function on state changes
myFunction2(y) // Call listener function at run time



