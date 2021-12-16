var formulario = document.querySelector("#formulario");
var inputNombre = document.querySelector("#nombre");
var inputCorreo = document.querySelector("#correo");
var inputAsunto = document.querySelector("#asunto");
var inputMensaje = document.querySelector("#mensaje");
var inputContraseña = document.querySelector("#contraseña");
function enviarFormulario() {
  var errores = [];
  if (inputNombre.value === "") {
    errores.push("El nombre es obligatorio");
    alert("El nombre es obligatorio");
  }
  if (inputCorreo.value === "") {
    errores.push("El correo es obligatorio");
    alert("El correo es obligatorio");
  }
  if (inputMensaje.value === "") {
    errores.push("El mensaje es obligatorio");
    alert("El mensaje es obligatorio");
  }
  if (errores.length === 0) {
    alert(
      "Señor(a) " +
        inputNombre.value +
        " su mensaje " +
        inputMensaje.value +
        " ha sido enviado con éxito desde el correo " +
        inputCorreo.value
    );
  }
}
function formularioContacto() {
  var errores = [];
  if (inputNombre.value === "") {
    errores.push("El nombre es obligatorio");
    alert("El nombre es obligatorio");
  }
  if (inputCorreo.value === "") {
    errores.push("El correo es obligatorio");
    alert("El correo es obligatorio");
  }
  if (inputAsunto.value === "") {
    errores.push("El asunto es obligatorio");
    alert("El asunto es obligatorio");
  }
  if (inputMensaje.value === "") {
    errores.push("El mensaje es obligatorio");
    alert("El mensaje es obligatorio");
  }
  if (errores.length === 0) {
    alert(
      "Señor(a) " +
        inputNombre.value +
        " el asunto " +
        inputAsunto.value +
        " con el mensaje " +
        inputMensaje.value +
        " ha sido enviado con éxito desde el correo " +
        inputCorreo.value
    );
  }
}
function formularioAdmin() {
  var errores = [];
  if (inputCorreo.value === "") {
    errores.push("El correo es obligatorio");
    alert("El correo es obligatorio");
  }
  if (inputContraseña.value === "") {
    errores.push("La contraseña es obligatorio");
    alert("La contraseña es obligatorio");
  }
  if (errores.length === 0) {
    alert("Correo " + inputCorreo.value + " y contraseña correctos! ");
  }
}
function subirPagina() {
  window.location.href = "#contenedor";
}
