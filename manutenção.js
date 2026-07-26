let ordens = JSON.parse(localStorage.getItem("ordensServico")) || [];

function abrirModal(){

document.getElementById("modal").style.display="flex";

}

function fecharModal(){

document.getElementById("modal").style.display="none";

}

function salvarOS(){

const ordem={

numero:Date.now(),

viatura:document.getElementById("viatura").value,

tipo:document.getElementById("tipo").value,

responsavel:document.getElementById("responsavel").value,

custo:document.getElementById("custo").value,

status:document.getElementById("status").value,

descricao:document.getElementById("descricao").value

};

ordens.push(ordem);

localStorage.setItem(

"ordensServico",

JSON.stringify(ordens)

);

atualizarTabela();

fecharModal();

}

function atualizarTabela(){

const tabela=document.getElementById("listaOS");

tabela.innerHTML="";

ordens.forEach((o,i)=>{

tabela.innerHTML+=`

<tr>

<td>${o.numero}</td>

<td>${o.viatura}</td>

<td>${o.tipo}</td>

<td>${o.responsavel}</td>

<td>${o.status}</td>

<td>R$ ${o.custo}</td>

<td>

<button onclick="excluir(${i})">

Excluir

</button>

</td>

</tr>

`;

});

}

function excluir(i){

if(confirm("Excluir esta ordem de serviço?")){

ordens.splice(i,1);

localStorage.setItem(

"ordensServico",

JSON.stringify(ordens)

);

atualizarTabela();

}

}

atualizarTabela();
