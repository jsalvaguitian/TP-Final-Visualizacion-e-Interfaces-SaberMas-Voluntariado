function mostrarPreview(input) {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("previewFoto").src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  function eliminarFoto() {
    // Restaurar imagen por defecto
    document.getElementById("previewFoto").src = "https://www.w3schools.com/howto/img_avatar.png";
    // Opcional: eliminar el archivo del input
    document.querySelector('input[name="fotoPerfil"]').value = '';
  }