function abrirChat() {
    const panel = document.getElementById("panelMensaje");
    panel.innerHTML = `
      <div class="d-flex flex-column w-100 p-4" style="height: 100%;">
        <div class="d-flex align-items-center gap-3 mb-2">
 <img src="https://randomuser.me/api/portraits/men/72.jpg" alt="Profe" width="50" height="50" class="rounded-circle">
  <h5 class="text-primary mb-0 violeta">Prof. de Matemática</h5>
</div>
        <div id="chatBox" class="chat-box bg-white border rounded p-3 mt-2 mb-3">
          <div class="mensaje mensaje-profe">Hola Pepe, ¿cómo vas con los ejercicios de fracciones?</div>
          <div class="mensaje mensaje-alumno">Hola profe, me cuesta simplificar...</div>
          <div class="mensaje mensaje-profe">No hay problema, ahora te paso un ejemplo 👇</div>
        </div>
        <div class="input-group">
          <input type="text" id="mensajeInput" class="form-control" placeholder="Escribí un mensaje...">
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
    panel.innerHTML = `
      <div class="bg-light rounded p-4 text-center w-75">
        <h5 class="text-primary violeta">Ningún mensaje</h5>
        <p>No olvides seguir las recomendaciones de tu estatus que encontrarás en tu cuenta para obtener más alumnos/as.</p>
      </div>
      <button class="btn btn-primary mt-4">Ver mi estatus</button>
    `;
}