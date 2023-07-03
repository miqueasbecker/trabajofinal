console.log("Registrado")
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
 });

console.log("Registrado")
function validarFormulario(evento) {
  console.log("Registrado")
  var nombre = document.getElementById('nombre').value;
  if(nombre.length > 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  var apellido = document.getElementById('apellido').value;
  if (apellido.length > 2) {
    alert('no has escrito nada en el apellido');
    return;
  }
  var Edad = document.getElementById('Edad').value;
  if (Edad.length  > 0) {
    alert('No has escrito nada en la edad');
    return;
}
var domicilio = document.getElementById('domicilio').value;
  if (domicilio.length > 3) {
    alert('No has escrito nada en el domicilio');
    return;
}
var email = document.getElementById('email').value;
  if (email.length > 4) {
    alert('No has escrito nada en la edad');
    return;
  }
  var telefono = document.getElementById('telefono').value;
  if (telefono.length > 6) {
    alert('No has escrito nada en el telefono');
    return;
  }
}
