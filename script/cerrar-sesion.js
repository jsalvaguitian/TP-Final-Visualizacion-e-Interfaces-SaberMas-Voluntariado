document.addEventListener("DOMContentLoaded", function () {
    const botonSesionAlumno = document.querySelector(".js-btn-login-al");
    const botonSesionProfe = document.querySelector(".js-btn-login-prof");
    const sidebarProfe = document.querySelector(".js-profe-menu");
    const sidebarAlumno = document.querySelector(".js-alumno-menu");
    const sidebarNormal = document.querySelector(".js-botones");
    const sidebarresponsive = document.querySelector(".menu-responsive");
    const mediaQuery = window.matchMedia('(max-width: 576px)');

    function ocultarTodo() {
        sidebarProfe?.classList.add('d-none');
        sidebarAlumno?.classList.add('d-none');
        sidebarNormal?.classList.add('d-none');
        sidebarresponsive?.classList.add('d-none');
    }

    function mostrarMenuPorRol() {
        ocultarTodo();

        if (localStorage.getItem("Logueadoalumno") === 'true') {

            sidebarAlumno?.classList.remove('d-none');

        } else if (localStorage.getItem("Logueadoprofe") === 'true') {

            sidebarProfe?.classList.remove('d-none');

        } else {
            if (mediaQuery.matches) {
                sidebarresponsive?.classList.remove('d-none');
            } else {
                sidebarNormal?.classList.remove('d-none');
            }
        }
    }

    mostrarMenuPorRol(); // Al cargar la página

    // Responder al cambio de tamaño de pantalla
    mediaQuery.addEventListener("change", mostrarMenuPorRol);

    // Botones de cerrar sesión
    botonSesionAlumno?.addEventListener("click", () => {
        localStorage.clear();
        mostrarMenuPorRol();
        window.location.replace('/');
    });

    botonSesionProfe?.addEventListener("click", () => {
        localStorage.clear();
        mostrarMenuPorRol();
        window.location.replace('/');
    });
});