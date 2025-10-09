let anchopantalla = 640;
let altopantalla = 480;
let estado = 0;
let imagenes;
//let textos; 
//let sonido;

function preload() {
  //sonido = loadSound('data/sonido.mp3');
  imagenes = [];
  for (let i = 0; i <= 22; i++) { // carga hasta la imagen 22
    imagenes[i] = loadImage('data/img-' + i + '.jpg'); 
  }
}

function setup() {
  createCanvas(anchopantalla, altopantalla);
  textAlign(CENTER, CENTER);
}

function draw() { 
  background(220);
  mostrarEstado(estado);  
}

// Función para mostrar la imagen y los botones según el estado
function mostrarEstado(estado) {
  // mostrar imagen
  if (estado < imagenes.length && imagenes[estado]) {
    image(imagenes[estado], 0, 0, anchopantalla, altopantalla);
  }

  // botones de opciones
  if ([2, 6, 10].includes(estado)) {
    dibujarBoton(200, 410, 90, 30, "Opción 1");
    dibujarBoton(400, 410, 90, 30, "Opción 2");
  }

  // botón de continuar
  if (![2, 6, 10, 8, 14, 22].includes(estado)) {
    dibujarBoton(530, 400, 100, 30, "Continuar");
  }

  // botón de reiniciar en pantallas finales
  if ([8, 14, 22].includes(estado)) {
    dibujarBoton(90, 410, 80, 30, "Reiniciar");
  }
}

// Función para dibujar un botón con texto legible
function dibujarBoton(x, y, ancho, alto, textoBoton) {
  fill(255);          // color del botón
  stroke(0);          // borde negro
  rect(x, y, ancho, alto, 5); // rectángulo
  fill(0);            // color del texto
  noStroke();
  textSize(16);
  text(textoBoton, x + ancho/2, y + alto/2);
}

// detección de clic dentro del rectángulo
function mouseEnCirculo(x, y, r) { 
  return dist(mouseX, mouseY, x, y) <= r;
}

// lógica de los clics
function mousePressed() {
  // botones de avanzar normal
  if (estado == 0 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 1; 
  } else if (estado == 1 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 2; 
    
  // primeras opciones
  } else if (estado == 2 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 3; 
  } else if (estado == 2 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 15; 
    
  // opcion 1
  } else if (estado == 3 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 4;   
  } else if (estado == 4 && mouseEnCirculo(530, 400, 100, 30 )) {
    estado = 5; 
  } else if (estado == 5 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 6; 
    
  // opcion 2
  } else if (estado == 15 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 16; 
  } else if (estado == 16 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 17;
  } else if (estado == 17 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 18; 
  } else if (estado == 18 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 9; 
    
  // segunda opciones
  } else if (estado == 6 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 7; 
  } else if (estado == 6 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 9; 
    
  // final 3
  } else if (estado == 7 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 8; 
  } else if (estado == 9 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 10; 
    
  // tercera opciones
  } else if (estado == 10 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 11 ; 
  } else if (estado == 10 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 19;
    
  // opcion 1
  } else if (estado == 11 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 12; 
  } else if (estado == 12 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 13; 
  } else if (estado == 13 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 14;
    
  // opcion 2
  } else if (estado == 19 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 20 ; 
  } else if (estado == 20 && mouseEnCirculo(530, 400, 100, 30 )) {
    estado = 21 ; 
  } else if (estado == 21 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 22 ;
  }
  
  // botón de reiniciar en pantallas finales
  if ([8, 14, 22].includes(estado) && mouseEnCirculo(90, 410, 80, 30)) {
    reiniciarPrograma();
  }
}

// reinicia la historia
function reiniciarPrograma() {
  estado = 0; 
}
