function mostrarSenha(){

let senha=document.getElementById("senha");

let icone=document.getElementById("iconeSenha");

if(senha.type==="password"){

senha.type="text";

icone.className="fa-solid fa-eye-slash";

}else{

senha.type="password";

icone.className="fa-solid fa-eye";

}

}

function login(){

let usuario=document.getElementById("usuario").value;

let senha=document.getElementById("senha").value;

if(usuario==="admin" && senha==="123456"){

window.location="../dashboard/index.html";

}else{

alert("Usuário ou senha inválidos.");

}

}
