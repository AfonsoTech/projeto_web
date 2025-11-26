const sala = document.getElementById("sala");
let selecionadas = [];
const linhas = ["A","B","C","D","E"]; // 5 fileiras

function criarCadeiras() {
    // limpa caso já tenha algo
    sala.innerHTML = "";

    linhas.forEach(row => {
        const fileira = document.createElement("div");
        fileira.className = "fileira";

        const label = document.createElement("div");
        label.className = "fileira-label";
        label.textContent = row;
        fileira.appendChild(label);

        for (let i = 1; i <= 8; i++) {
            const wrap = document.createElement("div");
            wrap.className = "cadeira-wrap";

            const cadeira = document.createElement("div");
            cadeira.className = "cadeira";
            const nome = `${row}${i}`;
            cadeira.dataset.seat = nome; // atributo data-seat

            // clique simples
            cadeira.onclick = () => toggleSelecionada(cadeira);

            const cadeiraLabel = document.createElement("div");
            cadeiraLabel.className = "cadeira-label";
            cadeiraLabel.textContent = nome;

            wrap.appendChild(cadeira);
            wrap.appendChild(cadeiraLabel);
            fileira.appendChild(wrap);
        }

        sala.appendChild(fileira);
    });
}

function toggleSelecionada(cadeira) {
    const seatName = cadeira.dataset.seat;

    if (!cadeira.classList.contains("selecionada")) {
        if (selecionadas.length >= 2) {
            // se quiser, descomente o alert; mantive simples
            // alert("Máximo de 2 cadeiras.");
            return;
        }
        cadeira.classList.add("selecionada");
        selecionadas.push(seatName);
    } else {
        cadeira.classList.remove("selecionada");
        selecionadas = selecionadas.filter(s => s !== seatName);
    }
}

// inicia
criarCadeiras();
