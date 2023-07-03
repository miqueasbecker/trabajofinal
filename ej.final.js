console.log("Registrado");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();

  console.log("Registrado");

  var nombre = document.getElementById('nombre').value;
  if(nombre.length > 3) {
    alert('No has escrito nada en el nombre');
    return;
  }

  var apellido = document.getElementById('apellido').value;
  if (apellido.length > 3) {
    alert('No has escrito nada en el apellido');
    return;
  }

  var edad = document.getElementById('edad').value;
  if (edad.length >0) {
    alert('No has escrito nada en la edad');
    return;
  }

  var domicilio = document.getElementById('domicilio').value;
  if (domicilio.length > 4) {
    alert('No has escrito nada en el domicilio');
    return;
  }

  var email = document.getElementById('email').value;
  if (email.length >4) {
    alert('No has escrito nada en el email');
    return;
  }

  var telefono = document.getElementById('telefono').value;
  if (telefono.length > 4) {
    alert('No has escrito nada en el teléfono');
    return;
  }

  console.log("Formulario válido. Datos enviados:");
  console.log("Nombre:", nombreinput.value);
  console.log("Apellido:", apellidoinput.value);
  console.log("Edad:", edadinput.value);
  console.log("Domicilio:", domicilioinput.value);
  console.log("Email:", emailinput.value);
  console.log("Teléfono:", telefonoinput.value);
} 


