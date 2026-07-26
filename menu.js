// ===============================
// MENU LATERAL
// ===============================

const menu = [

{
nome:"Dashboard",
icone:"fa-house",
pagina:"../dashboard/index.html"
},

{
nome:"Viaturas",
icone:"fa-car",
pagina:"../viaturas/index.html"
},

{
nome:"Manutenção",
icone:"fa-screwdriver-wrench",
pagina:"../manutencao/index.html"
},

{
nome:"Rastreamento",
icone:"fa-location-dot",
pagina:"../rastreamento/index.html"
},

{
nome:"Agenda",
icone:"fa-calendar-days",
pagina:"../agenda/index.html"
},

{
nome:"Relatórios",
icone:"fa-chart-column",
pagina:"../relatorios/index.html"
},

{
nome:"Usuários",
icone:"fa-users",
pagina:"../usuarios/index.html"
},

{
nome:"Estoque",
icone:"fa-boxes-stacked",
pagina:"../estoque/index.html"
},

{
nome:"Configurações",
icone:"fa-gear",
pagina:"../configuracoes/index.html"
}

];

function criarMenu(){

const sidebar=document.querySelector(".sidebar ul");

if(!sidebar) return;

sidebar.innerHTML="";

menu.forEach(item=>{

sidebar.innerHTML+=`

<li onclick="window.location='${item.pagina}'">

<i class="fa-solid ${item.icone}"></i>

${item.nome}

</li>

`;

});

}

window.onload=criarMenu;
