const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', ()=>{
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0"; /* Limpiar la pantalla */
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "error") {
                pantalla.textContent = "0";
            }else {
            pantalla.textContent = pantalla.textContent.slice(0, -1); 
            }
            return;
        }

        if (boton.id === "igual") {
            try {                /* intentar hacer la operación, en caso de no poner algo valido catch lo recibe */   
                pantalla.textContent = eval(pantalla.textContent); /* hacer cualquier operación*/ 
            } catch{                  /*eval es una función de javascript para evaluar una expresión que da como resultado un valor numerico*/ 
                pantalla.textContent = "error";
            }
            return;
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "error") {
            pantalla.textContent = botonApretado;
        } else {                                        /* para poder sumar los numeros o concatenarlos */ 
            pantalla.textContent += botonApretado;
        }
    })
})