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