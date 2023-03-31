

$("#contacto").submit(function(event) {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val(); 
    var email = $("#email").val(); 
    var mensaje = $("#mensaje").val();    
    var mensajeWPP = "Nombre: " + nombre + "\n Apellido:" + apellido + "\n Email" + email + "\n Mensaje" + mensaje; 
    var miNumero = "+5491162875482";
    window.open(`https://wa.me/${miNumero}?text=${mensajeWPP}`, "_blank")

})


