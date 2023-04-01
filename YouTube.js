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

$('.owl-carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    navText:["<div class='nav-btn prev-slide'><img src='./assets/arrow_left.png' style='width: 12px; height: 12px' title='Anterior'></div>","<div class='nav-btn next-slide'><img src='./assets/arrow_right.png' style='width: 12px; height: 12px' title='Siguiente'></div>"],
    responsive: {
        0: {
            slideBy: 1,
            items: 1
        },
        600: {
            slideBy: 2,
            items: 3
        },
        1080: {
            slideBy: 5,
            items: 6
        }
    }
    });

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


