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
    formularioCorrecto = false;
  } else {
    document.getElementById('error-nombre').innerHTML = "";
  }

  var apellido = document.getElementById('apellido').value;
  if (apellido.length > 3) {
    alert('No has escrito nada en el apellido');
    formularioCorrecto = false;
  } else {
    document.getElementById('error-apellido').innerHTML = "";
  }
  }

  var edad = document.getElementById('edad').value;
  if (edad.length >0) {
    alert('No has escrito nada en la edad');
    formularioCorrecto = false;
  } else {
    document.getElementById('error-edad').innerHTML = "";
  }
  

  var domicilio = document.getElementById('domicilio').value;
  if (domicilio.length > 4) {
    alert('No has escrito nada en el domicilio');
    formularioCorrecto = false;
  } else {
    document.getElementById('error-domicilio').innerHTML = "";
  }
  

  var email = document.getElementById('email').value;
  if (email.length >4) {
    alert('No has escrito nada en el email');
    formularioCorrecto = false;
  } else {
    document.getElementById('error-email').innerHTML = "";
  }
  

  var telefono = document.getElementById('telefono').value;
  if (telefono.length > 4) {
    alert('No has escrito nada en el teléfono');
    formularioCorrecto = false;
  } else {
    document.getElementById('error-telefono').innerHTML = "";
  }
  

  console.log("Formulario válido. Datos enviados:");
  console.log("Nombre:", nombreinput.value);
  console.log("Apellido:", apellidoinput.value);
  console.log("Edad:", edadinput.value);
  console.log("Domicilio:", domicilioinput.value);
  console.log("Email:", emailinput.value);
  console.log("Teléfono:", telefonoinput.value);

const inicializarJs = () => {
  const boton = document.getElementById("enviar-btn");
  boton.addEventListener('click', function (e) {
    enviarFormulario();
  });

  document.getElementById('nombre').addEventListener('blur', function (e) {
    validarNombre();
  })

}

window.addEventListener('load', inicializarJs);

