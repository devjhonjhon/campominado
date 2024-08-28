const campominado = document.getElementById("campominado");
const minas = [0, 5, 9, 12, 17, 20, 26, 31, 34, 38, 42, 45, 49, 52, 59, 61];
const grid = 8*8;

function criarGrid() {
    for(let i=0; i < grid; i++) {
        const t = document.createElement("div");
        t.setAttribute("class", "t");
        t.setAttribute("id", i)
        
        t.addEventListener('click', function() {
            foo(i);
        }, false);
        
        campominado.appendChild(t);
    }

}

function foo(i) {
    const t = document.getElementById(i)

    if(minas.includes(i)) {
        t.setAttribute("class", "mina");
        t.textContent = "💣";
        t.style.backgroundColor = "red";
        mostrarGameOver();
    } else {
        const numMinas = contarMinasAoRedor(i);
        t.setAttribute("class", "seguro");
        t.textContent = numMinas > 0 ? numMinas : "0";
        t.style.backgroundColor = "beige";
    }

    t.setAttribute("class", "revelado")
}

function mostrarGameOver() {
    const divGameOver = document.createElement("div");
    divGameOver.setAttribute("class", "divGameOver");
    divGameOver.textContent = "Game Over";
    
    document.body.appendChild(divGameOver);

    setTimeout(reiniciarJogo, 2000);
}

function contarMinasAoRedor(i) {
    let contador = 0;

    if (minas.includes(i - 1)) contador++;
    if (minas.includes(i + 1)) contador++;
    if (minas.includes(i - 8)) contador++;
    if (minas.includes(i + 8)) contador++;
    if (minas.includes(i - 9)) contador++;
    if (minas.includes(i - 7)) contador++;
    if (minas.includes(i + 7)) contador++;
    if (minas.includes(i + 9)) contador++;

    return contador;
}

function reiniciarJogo() {
    campominado.innerHTML = "";
    criarGrid();
    document.querySelector('.divGameOver')?.remove();
}

criarGrid();
