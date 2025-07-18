function abrirChat() {
  if (window.innerWidth <= 767) {
    document.getElementById('listaContactos').classList.add('d-none');
    document.getElementById('panelMensaje').classList.remove('d-none');
  }
  const panel = document.getElementById("panelMensaje");
  panel.innerHTML = `
      <div class="d-flex flex-column w-100 p-4" style="height: 100%;">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex align-items-center gap-3">
            <img src="https://randomuser.me/api/portraits/men/72.jpg" alt="Carla" width="50" height="50" class="rounded-circle">
            <h5 class="color-texto mb-0">Martín - Matemática</h5>
          </div>
          <button class="btn btn-light btn-sm" onclick="marcarFavorito(this)" title="Agregar a favoritos">
            <i class="bi bi-heart"></i>
          </button>
        </div>


        <div id="chatBox" class="chat-box bg-white border rounded p-3 mt-2 mb-3">
          <div class="alert alert-info p-2 mb-2">
            ✅ Martín aceptó tu solicitud de clase.
          </div>
          <div class="mensaje mensaje-profe">Hola Pepe, ¿cómo vas con los ejercicios de fracciones?</div>
          <div class="mensaje mensaje-alumno">Hola profe, me cuesta simplificar...</div>
          <div class="mensaje mensaje-profe">No hay problema, ahora te paso un ejemplo 👇</div>
        </div>
        <div class="input-group">
          <input type="text" id="mensajeInput" class="form-control input-custom" placeholder="Escribí un mensaje...">
          <button class="btn btn-primary" onclick="enviarMensaje()">Enviar</button>
        </div>
        <button class="btn btn-outline-secondary mt-3" onclick="volverInicio()">← Volver</button>
      </div>
    `;
}

function abrirChatCarla() {
  if (window.innerWidth <= 767) {
    document.getElementById('listaContactos').classList.add('d-none');
    document.getElementById('panelMensaje').classList.remove('d-none');
  }
  const panel = document.getElementById("panelMensaje");
  panel.innerHTML = `
  <div class="d-flex flex-column w-100 p-4" style="height: 100%;">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center gap-3">
        <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Carla" width="50" height="50" class="rounded-circle">
        <h5 class="color-texto mb-0">Carla - Matemática</h5>
        <span class="d-flex align-items-center text-danger">
          <i class="bi bi-circle-fill me-1"></i>
        </span>
      </div>
      <button class="btn btn-light btn-sm" onclick="marcarFavorito(this)" title="Agregar a favoritos">
          <i class="bi bi-heart"></i>
      </button>
    </div>

      

      <div class="alert alert-success p-2 mb-3 d-flex justify-content-between align-items-center">
        📹 Carla inició la reunión
        <a href="vistaSalaReunionAlumno.html" class="btn btn-sm btn-primary">Unirme a la clase</a>
      </div>

        <div id="chatBox" class="chat-box bg-white border rounded p-3 mb-3" style="flex: 1; overflow-y: auto;">
        <div class="alert alert-info p-2 mb-2">
        ✅ Carla aceptó tu solicitud de clase.
        </div>
        <div class="mensaje mensaje-profe">¡Hola Juan! Gracias por contactarme 😄</div>
        <div class="mensaje mensaje-alumno">¡Gracias por aceptar mi solicitud, profe!</div>
        <div class="mensaje mensaje-profe">Ya creé la reunión, cuando quieras podés unirte.</div>
      </div>

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

  // Agrega el mensaje del alumno
  const mensajeAlumno = document.createElement("div");
  mensajeAlumno.className = "mensaje mensaje-alumno";
  mensajeAlumno.innerText = texto;
  chatBox.appendChild(mensajeAlumno);

  // Simula respuesta del profe
  setTimeout(() => {
    const respuesta = document.createElement("div");
    respuesta.className = "mensaje mensaje-profe";
    respuesta.innerText = "Bien, vamos a resolverlo juntos 😉";
    chatBox.appendChild(respuesta);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function volverInicio() {
  const panel = document.getElementById("panelMensaje");

  // Primero actualizamos el contenido
  panel.innerHTML = `
    <div class="bg-light rounded p-4 text-center w-75">
      <h5 class="text-primary violeta">Ningún mensaje</h5>
      <p>Revisa tu cuenta para encontrar recomendaciones y contactar a tus profesores cuando los necesites.</p>
    </div>
    <a href="vistaAvisosProfes.html" class="btn btn-primary mt-4">Buscar profesores</a>
  `;

  // Después ocultamos si estamos en móvil
  if (window.innerWidth <= 767) {
    document.getElementById('listaContactos').classList.remove('d-none');
    //document.getElementById('panelMensaje').classList.add('d-none');
  }
}

function marcarFavorito(btn) {
  const icono = btn.querySelector("i");
  icono.classList.toggle("bi-heart");
  icono.classList.toggle("bi-heart-fill");
  icono.classList.contains("bi-heart-fill")
    ? btn.setAttribute("title", "Quitar de favoritos")
    : btn.setAttribute("title", "Agregar a favoritos");
}

window.addEventListener('load', () => {
  if (window.innerWidth <= 767) {
    document.getElementById("panelMensaje").style.display = "none";
    document.getElementById("listaContactos").style.display = "block";
  }
});