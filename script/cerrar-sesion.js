let botonSesionAlumno = document.querySelector(".js-btn-login-al");
let botonSesionProfe = document.querySelector(".js-btn-login-prof");
let sidebarProfe = document.querySelector(".js-profe-menu");
let sidebarAlumno = document.querySelector(".js-alumno-menu");
let sidebarNormal = document.querySelector(".js-botones");


if (localStorage.getItem("Logueadoalumno") == 'true') {
    sidebarNormal.style.display = 'none';
    sidebarAlumno.style.display = 'block';
    sidebarProfe.style.display = 'none';

    botonSesionAlumno.addEventListener("click", () => {
        localStorage.clear();
        sidebarAlumno.style.display = 'none';
        sidebarNormal.style.display = 'block';
        sidebarProfe.style.display = 'none';

    })
}else if (localStorage.getItem("Logueadoprofe") == 'true') {

    sidebarAlumno.style.display = 'none';
    sidebarNormal.style.display = 'none';
    sidebarProfe.style.display = 'block';

    botonSesionProfe.addEventListener("click", () => {
        localStorage.clear();
        sidebarAlumno.style.display = 'none';
        sidebarNormal.style.display = 'block';
        sidebarProfe.style.display = 'none';
        window.location.replace('/');

    })
}