function  cambiarColor(){
    var_album = document.getElementById("album");
    var_album.style.backgroundColor="Pink";
}
function cambiarTamano() {
    var imagenes = document.getElementsByClassName("imagenx");
    for (var i = 0; i < 1; i++) {
        imagenes[i].style.height = "300px";
        // imagenes[i].style.width = "auto"; // Para mantener la proporción de la imagen
    }
    console.log("Tamaño cambiado");
}

    
