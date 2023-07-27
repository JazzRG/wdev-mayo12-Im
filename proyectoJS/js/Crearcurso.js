let formulario = document.getElementById('formulario');
const modalSucess = new boostrap.modal(document.getElementById('modalSuccess'))

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    modalSuccess.show();
});