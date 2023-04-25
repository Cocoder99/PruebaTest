const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const c = document.querySelector("#c");
const flecha = document.querySelector("#borrar");
const igual = document.querySelector("#igual");

  // Botones
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;
        if (pantalla.textContent == "0" || pantalla.textContent == "Error: expresión inválida") {
            pantalla.textContent = botonApretado;
        } else {
        pantalla.textContent += botonApretado;
    }

    })
})

// Borrar todo
c.addEventListener('click', () => {
    pantalla.textContent = "0";
}
)

// Flecha
flecha.addEventListener('click', () => {
    pantalla.textContent = pantalla.textContent.slice(0, -1);
    if (pantalla.textContent === ""){
        pantalla.textContent = "0";
    }
})

// Operaciones
igual.addEventListener("click", () => {
    const expresion = pantalla.textContent;
    try {
      const resultado = eval(expresion);
      pantalla.textContent = resultado;
    } catch (error) {
      pantalla.textContent = "Error: expresión inválida";
    }
  });


