class Wordle {
  constructor() {
    this.filaActual = 0;
    this.columnaActual = 0;
    this.palabraAAdivinar = "ramon";
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
        boton.addEventListener("click", (e) => this.write(e));
        fila.appendChild(boton);
      }
      teclado.appendChild(fila);
    }
  }

  write(e) {
    const key = e.target.innerHTML;
    const filas = document.getElementsByClassName("fila");
    const cajitasActual = filas[this.filaActual].getElementsByClassName("caja");

    if (key === "Del") {
      this.del(cajitasActual);
    } else if (key === "Enter") {
      // Verificar la palabra. Ver letras de acuerdo a palabra del diccioanario
      this.verificarPalabra(cajitasActual);
      // Ir a siguiente linea
      this.irSiguienteLinea();
    } else if (this.columnaActual < 5) {
      this.agregarLetra(cajitasActual, key);
    }
    console.log(key);
  }

  del(cajitasActual) {
    if (this.columnaActual > 0) {
      this.columnaActual--;
      cajitasActual[this.columnaActual].innerHTML = "";
    }
  }

  irSiguienteLinea() {
    if (this.columnaActual === 5) {
      this.filaActual++;
      this.columnaActual = 0;
    }
  }

  agregarLetra(cajitasActual, letra) {
    cajitasActual[this.columnaActual].innerHTML = letra;
    this.columnaActual++;
  }

  verificarPalabra(cajitasActual) {
    const palabra = Array.from(cajitasActual).map((caja) =>
      caja.innerHTML.toLowerCase()
    );

    for (let i = 0; i < 5; i++) {
      const letra = palabra[i];
      if (letra === this.palabraAAdivinar[i]) {
        //VERDE
        cajitasActual[i].style.backgroundColor = "green";
      } else if (this.palabraAAdivinar.includes(letra)) {
        // AMARILLO
        cajitasActual[i].style.backgroundColor = "yellow";
      } else {
        // ROJO
        cajitasActual[i].style.backgroundColor = "red";
      }
    }
  }
}

const juego = new Wordle();
