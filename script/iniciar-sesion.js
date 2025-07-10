const formulario =  document.querySelector(".js-formulario-login");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    loguearUsuario();
});

function loguearUsuario() {
    
   let emailIngresado = document.getElementById("email").value;
    let contraseniaIngresada = document.getElementById("password").value;
    let mensajeError;
    
    if(emailIngresado=="juan@email.com" && contraseniaIngresada == "juan123"){
        localStorage.setItem('Logueadoalumno','true');
        mensajeError = " ";
        document.getElementById("Mensaje").innerHTML = mensajeError;
        formulario.action = "../index.html";
        formulario.submit();
    }else if(emailIngresado=="martin@email.com" && contraseniaIngresada == "martin123"){
        localStorage.setItem('Logueadoprofe','true');
        mensajeError = " ";
        document.getElementById("Mensaje").innerHTML = mensajeError;
        formulario.action = "../index.html";
        formulario.submit();

    }else{
        mensajeError = "<p>Mail y/o contraseña incorrecta.</p>";
        document.getElementById("mensaje").innerHTML = mensajeError;
        return;
    }

}
