class Wordle {
  constructor() {
    this.filaActual = 0;
    this.columnaActual = 0;

    this.init();
  }

  init() {
    this.construirTablero();
    this.construirTeclado();
  }

  construirTablero() {
    const tablero = document.getElementById("tablero");
    for (let i = 0; i < 5; i += 1) {
      const fila = document.createElement("div");
      fila.className = "fila";
      for (let j = 0; j < 5; j += 1) {
        const cajita = document.createElement("div");
        cajita.className = "caja";
        fila.appendChild(cajita);
      }
      tablero.appendChild(fila);
    }
  }

  construirTeclado() {
    const teclado = document.getElementById("teclado");
    const letras = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
      ["Del", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
    ];

    for (let i = 0; i < 3; i++) {
      const fila = document.createElement("div");
      fila.className = "fila-letras";
      for (let j = 0; j < letras[i].length; j++) {
        const boton = document.createElement("button");
        boton.innerHTML = letras[i][j];
        fila.appendChild(boton);
      }
      teclado.appendChild(fila);
    }
  }
}

const juego = new Wordle();
