// Inicializa o mapa em Blumenau
const mapa = L.map("mapa").setView([-26.9186, -49.0661], 13);

// Camada OpenStreetMap
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
    attribution:"© OpenStreetMap"
}).addTo(mapa);

// Dados simulados das viaturas
const viaturas = [

{
prefixo:"230",
status:"Disponível",
motorista:"Carlos Silva",
velocidade:"42 km/h",
lat:-26.9186,
lng:-49.0661
},

{
prefixo:"245",
status:"Patrulhamento",
motorista:"João Mendes",
velocidade:"58 km/h",
lat:-26.9140,
lng:-49.0705
},

{
prefixo:"198",
status:"Manutenção",
motorista:"Oficina",
velocidade:"0 km/h",
lat:-26.9225,
lng:-49.0618
}

];

// Adiciona os marcadores
viaturas.forEach(v=>{

L.marker([v.lat,v.lng])

.addTo(mapa)

.bindPopup(

`
<h3>Viatura ${v.prefixo}</h3>

<b>Status:</b> ${v.status}<br>

<b>Motorista:</b> ${v.motorista}<br>

<b>Velocidade:</b> ${v.velocidade}
`

);

});

// Simulação simples de movimento
setInterval(()=>{

mapa.eachLayer(layer=>{

if(layer instanceof L.Marker){

const pos = layer.getLatLng();

layer.setLatLng([

pos.lat+(Math.random()-0.5)*0.001,

pos.lng+(Math.random()-0.5)*0.001

]);

}

});

},5000);
