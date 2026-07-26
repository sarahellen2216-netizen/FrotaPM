// ===========================================
// DASHBOARD - FROTA PM
// ===========================================

// Carrega as viaturas cadastradas
const viaturas = JSON.parse(localStorage.getItem("viaturas")) || [];

// Carrega as ordens de serviço
const ordens = JSON.parse(localStorage.getItem("ordensServico")) || [];

// Contadores
let total = viaturas.length;
let disponiveis = 0;
let manutencao = 0;
let patrulhamento = 0;

// Soma dos custos
let custoTotal = 0;

// Contagem das viaturas
viaturas.forEach(v => {

    if (v.status === "Disponível") {
        disponiveis++;
    }

    if (v.status === "Manutenção") {
        manutencao++;
    }

    if (v.status === "Patrulhamento") {
        patrulhamento++;
    }

});

// Soma custos das ordens
ordens.forEach(os => {

    custoTotal += Number(os.custo || 0);

});

// Atualiza Cards
document.getElementById("totalViaturas").innerText = total;
document.getElementById("disponiveis").innerText = disponiveis;
document.getElementById("manutencao").innerText = manutencao;
document.getElementById("patrulhamento").innerText = patrulhamento;

// ==============================
// ALERTAS
// ==============================

const listaAlertas = document.getElementById("listaAlertas");

listaAlertas.innerHTML = "";

if (manutencao > 0) {

    listaAlertas.innerHTML += `
    <li>
    🚨 Existem ${manutencao} viaturas em manutenção.
    </li>
    `;

}

if (ordens.length > 5) {

    listaAlertas.innerHTML += `
    <li>
    ⚠ Existem muitas Ordens de Serviço abertas.
    </li>
    `;

}

if (listaAlertas.innerHTML === "") {

    listaAlertas.innerHTML = `
    <li>
    ✅ Nenhum alerta encontrado.
    </li>
    `;

}

// ==============================
// GRÁFICO PIZZA
// ==============================

new Chart(

document.getElementById("graficoPizza"),

{

type:"doughnut",

data:{

labels:[

"Disponíveis",

"Patrulhamento",

"Manutenção"

],

datasets:[{

data:[

disponiveis,

patrulhamento,

manutencao

]

}]

}

}

);

// ==============================
// GRÁFICO LINHA
// ==============================

new Chart(

document.getElementById("graficoLinha"),

{

type:"line",

data:{

labels:[

"Jan",

"Fev",

"Mar",

"Abr",

"Mai",

"Jun",

"Jul",

"Ago",

"Set",

"Out",

"Nov",

"Dez"

],

datasets:[{

label:"Custos (R$)",

data:[

1500,

2300,

1800,

3200,

2100,

2600,

custoTotal,

2800,

1900,

2200,

3000,

2500

],

fill:false,

tension:0.3

}]

}

}

);

// ==============================
// MINI MAPA
// ==============================

const mapa = L.map("mapaMini").setView([-26.9186,-49.0661],12);

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

attribution:"© OpenStreetMap"

}

).addTo(mapa);

// Adiciona um marcador para cada viatura
viaturas.forEach(v=>{

const lat = -26.9186 + (Math.random()-0.5)/50;

const lng = -49.0661 + (Math.random()-0.5)/50;

L.marker([lat,lng])

.addTo(mapa)

.bindPopup(

`
<b>Viatura:</b> ${v.prefixo}<br>

<b>Status:</b> ${v.status}
`

);

});

// ==============================
// INFORMAÇÕES NO CONSOLE
// ==============================

console.log("Dashboard carregado com sucesso.");

console.log("Viaturas:",viaturas);

console.log("Ordens:",ordens);

console.log("Custo Total:",custoTotal);
