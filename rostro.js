class Rostro {
  constructor(princesa) {
    this.princesa = princesa; // referencia para dibujar sobre la princesa
    this.maqSeleccionado = 0; // 0 = ninguno, 1..3 = maquillage
    this.peloSeleccionado = 0; // 0 = ninguno, 1..3 = pelo
  }

  // Mostrar pantalla de elegir maquillaje
  mostrarMaquillaje() {
    // dibuja la princesa base
    this.princesa.mostrar();

    // iconos de maquillaje
    image(maqicono1Img, 40, 400, 70, 50);
    image(maqicono2Img, 140, 400, 70, 50);
    image(maqicono3Img, 240, 400, 70, 50);

    // si ya habia seleccionado maquillaje (por si vuelves), dibujalo sobre la princesa
    if (this.maqSeleccionado == 1) image(maq1Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 2) image(maq2Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 3) image(maq3Img, this.princesa.x, this.princesa.y);
  }

  // Mostrar pantalla de elegir peinado (muestra princesa + maquillaje + iconos de pelo)
  mostrarPeinado() {
    // dibuja la princesa base
    this.princesa.mostrar();

    // dibuja el maquillaje elegido (si hay)
    if (this.maqSeleccionado == 1) image(maq1Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 2) image(maq2Img, this.princesa.x, this.princesa.y);
    if (this.maqSeleccionado == 3) image(maq3Img, this.princesa.x, this.princesa.y);

    // iconos de peinados
    image(peCoImg, 40, 400, 70, 50);
    image(peMaImg, 145, 400, 60, 50);
    image(peRuImg, 240, 400, 70, 50);

    // mostrar el pelo elegido encima
    if (this.peloSeleccionado == 1) image(coloradaImg, this.princesa.x, this.princesa.y);
    if (this.peloSeleccionado == 2) image(marronImg, this.princesa.x, this.princesa.y);
    if (this.peloSeleccionado == 3) image(rubioImg, this.princesa.x, this.princesa.y);
  }

  // devuelve 1..3 si clickeaste alguno de los iconos de maquillaje, 0 si no
  detectarClickMaquillaje() {
    if (mouseX > 40 && mouseX < 110 && mouseY > 400 && mouseY < 450) return 1;
    if (mouseX > 140 && mouseX < 210 && mouseY > 400 && mouseY < 450) return 2;
    if (mouseX > 240 && mouseX < 310 && mouseY > 400 && mouseY < 450) return 3;
    return 0;
  }

  // detecta y guarda el pelo seleccionado
  detectarClickPeinado() {
    if (mouseX > 40 && mouseX < 110 && mouseY > 400 && mouseY < 450) this.peloSeleccionado = 1;
    if (mouseX > 145 && mouseX < 205 && mouseY > 400 && mouseY < 450) this.peloSeleccionado = 2;
    if (mouseX > 240 && mouseX < 310 && mouseY > 400 && mouseY < 450) this.peloSeleccionado = 3;
  }
}
