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
        1000: {
            slideBy: 5,
            items: 6
        }
    }
    });