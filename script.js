function moverNo() {
  let noBtn = document.getElementById("noBtn");
  let nuevaX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  let nuevaY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = nuevaX + "px";
  noBtn.style.top = nuevaY + "px";
}

function mostrarConfirmacion() {
  document.getElementById("confirmacion").style.display = "block";
}

function copiarMensaje() {
  let mensaje = document.getElementById("mensaje");
  mensaje.select();
  document.execCommand("copy");
  alert("Mensaje copiado. Ahora pégalo en WhatsApp.");
}

function enviarMensaje() {
  window.location.href = "https://wa.me/523311380124";
}
