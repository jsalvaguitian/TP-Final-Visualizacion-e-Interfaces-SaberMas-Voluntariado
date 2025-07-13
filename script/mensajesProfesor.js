function abrirChat() {
  const panel = document.getElementById("panelMensaje");
  panel.innerHTML = `
      <div class="d-flex flex-column w-100 p-4" style="height: 100%;">
        
        <!-- Cabecera con alumno -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex align-items-center gap-3">
            <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Alumno" width="50" height="50" class="rounded-circle">
            <h5 class="mb-0 text-primary color-texto">Juan Pérez</h5>
          </div>
          <button class="btn btn-sm btn-secondary" onclick="iniciarReunion()">Iniciar reunión</button>
        </div>
        <div id="chatBox" class="chat-box bg-white border rounded p-3 mt-2 mb-3">
          <div class="mensaje mensaje-alumno">Hola Pepe, ¿cómo vas con los ejercicios de fracciones?</div>
          <div class="mensaje mensaje-profe">Hola profe, me cuesta simplificar...</div>
          <div class="mensaje mensaje-alumno">No hay problema, ahora te paso un ejemplo 👇</div>
        </div>
        <!-- Input de mensaje -->
        <div class="input-group">
          <input type="text" id="mensajeInput" class="form-control input-custom" placeholder="Escribí un mensaje...">
          <button class="btn btn-primary" onclick="enviarMensaje()">Enviar</button>
        </div>

        <button class="btn btn-outline-secondary mt-3" onclick="volverInicio()">← Volver</button>
      </div>
    `;
}

function enviarMensaje() {
  const input = document.getElementById("mensajeInput");
  const texto = input.value.trim();
  if (texto === "") return;

  const chatBox = document.getElementById("chatBox");

  const mensaje = document.createElement("div");
  mensaje.className = "mensaje mensaje-profe";
  mensaje.innerText = texto;
  chatBox.appendChild(mensaje);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function volverInicio() {
  const panel = document.getElementById("panelMensaje");
  panel.innerHTML = `
      <div class="bg-light rounded p-4 text-center w-75">
        <h5 class="text-primary violeta">No hay mensajes aún</h5>
        <p>Esperá a que un alumno te contacte. Cuando tengas una conversación, podrás iniciar una reunión con él.</p>
      </div>
      <div class="mt-4 d-flex gap-3 flex-wrap justify-content-center">
        <button class="btn btn-outline-primary" onclick="window.location.href='vistaBuscarAlumnos.html'">
          Buscar alumnos
        </button>
        <button class="btn btn-outline-success" onclick="window.location.href='vistaMisReuniones.html'">
          Mis reuniones
        </button>
        <button class="btn btn-outline-warning" onclick="window.location.href='vistaDonacionesProfesor.html'">
          Mis donaciones
        </button>
      </div>
    `;
}

function iniciarReunion() {
  // Redirigir a página de reunión o generar link
  window.location.href = "vistaMisReunionesProfesor.html";
}

