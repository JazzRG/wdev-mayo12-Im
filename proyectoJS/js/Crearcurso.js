let formulario = document.getElementById('formulario');
const modalSucess = new boostrap.modal(document.getElementById('modalSuccess'))

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    alert ('creando');
    //var datosEnviar = { 
    //    "nombre":document.getElementById('nombre').text
    //}
    //console.log (datosEnviar);
    //modalSuccess.show();


});


//apis/InsertarCursos.php
//{ "nombre":"React 22", 
//"descripcion":"React Junior",
// "tiempo":"10 Meses",
 // "usuario":"profesor Mario" }//