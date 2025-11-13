class Juego {
  constructor() {
    this.estado = 0; // 0 = inicio, 1 = maquillaje, 2 = pelo, 3 = ropa
    this.princesa = new Princesa(200, 80);
    this.rostro = new Rostro(this.princesa);
    this.ropa = new Ropa(width / 2 - 100, 80); // 👗 volvemos a activar la ropa
  }

  mostrar() {
    if (this.estado == 0) {
      this.pantallaInicio();

    } else if (this.estado == 1) {
      // 💄 PANTALLA MAQUILLAJE
      this.rostro.mostrarMaquillaje();

    } else if (this.estado == 2) {
      // 💇 PANTALLA PEINADO
      this.rostro.mostrarPeinado();

    } else if (this.estado == 3) {
      // 👗 PANTALLA ROPA
      this.mostrarRopa();
    }
  }

  pantallaInicio() {
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text("Vesti a la princesa para una cita", width / 2, height / 2 - 40);

    fill(255, 150, 200);
    rect(width / 2 - 100, height / 2, 200, 60, 20);
    fill(255);
    textSize(28);
    text("Comenzar", width / 2, height / 2 + 40);
  }

  mostrarRopa() {
    // Dibuja princesa + maquillaje + peinado + ropa
    this.princesa.mostrar();
    this.rostro.mostrarSeleccion(); // muestra maquillaje y peinado encima
    this.ropa.mostrar();            // muestra el vestido actual
    this.ropa.mostrarOpciones();    // íconos de los vestidos abajo
  }

  mousePresionado() {
    // 🔘 PANTALLA INICIO
    if (this.estado == 0) {
      if (
        mouseX > width / 2 - 100 &&
        mouseX < width / 2 + 100 &&
        mouseY > height / 2 &&
        mouseY < height / 2 + 60
      ) {
        this.estado = 1;
      }
    }
    // 💄 ELECCIÓN MAQUILLAJE
    else if (this.estado == 1) {
      let opcion = this.rostro.detectarClickMaquillaje();
      if (opcion > 0) {
        this.rostro.maqSeleccionado = opcion;
        this.estado = 2;
      }
    }
    // 💇 ELECCIÓN PEINADO
    else if (this.estado == 2) {
      let opcion = this.rostro.detectarClickPeinado();
      if (opcion > 0) {
        this.rostro.peinadoSeleccionado = opcion;
        this.estado = 3; // 👗 pasa a la pantalla de ropa
      }
    }
    // 👗 ELECCIÓN ROPA
    else if (this.estado == 3) {
      this.ropa.seleccionar();
    }
  }
}
