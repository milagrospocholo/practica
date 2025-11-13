class Ropa {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vestidoSeleccionado = 0;
    // Si todavía no cargaste las imágenes, dejá el arreglo vacío
    this.vestidos = [];
  }

  mostrar() {
    // Si todavía no hay vestidos, no hace nada
    if (this.vestidoSeleccionado > 0 && this.vestidos.length > 0) {
      image(this.vestidos[this.vestidoSeleccionado - 1], this.x, this.y);
    }
  }

  mostrarOpciones() {
    // No dibuja nada hasta que agregues imágenes
  }

  seleccionar() {
    // Después vas a agregar el código de selección
  }
}
