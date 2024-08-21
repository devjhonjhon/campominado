const campominado = document.getElementById("campominado");
const minas = [0, 9, 12, 20, 25, 31, 35, 45, 48, 52, 59, 61];
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
        setTimeout(reiniciarJogo, 2000);
    } else {
        t.setAttribute("class", "seguro");
        t.textContent = ""
        t.style.backgroundColor = "beige";
    }

    t.setAttribute("class", "revelado")
}

function reiniciarJogo() {
    campominado.innerHTML = "";
    criarGrid();
}

criarGrid();