/*
let chave = "chave1"
localStorage.setItem(chave, "Guilherme1");

let lerChave = localStorage.getItem(chave);
console.log(lerChave);

let array = [1,2,3,4,5]
localStorage.setItem("listaArray", JSON.stringify(array));

let dados = {nome:"Fiap", telefone:"11900000000"}
localStorage.setItem("info", JSON.stringify(dados))
*/

// Cria lista de usuários com o array vazio
let listaDados=[]

// Criando a base (Construtor)
function Campos(usuario, email, senha){
    this.usuario = usuario
    this.email = email
    this.senha = senha
}

// Disparar botão
const btnEnviar= document.querySelector("#btnSubmit");

// Evento Click
btnEnviar.addEventListener('click', ()=>{
    const inputUsuario= document.querySelector("#usuario");
    const inputEmail= document.querySelector("#email");
    const inputSenha= document.querySelector("#senha");

    // Intanciando o construtor
    let info= new Campos(inputUsuario.value, inputEmail.value, inputSenha.value)
    // console.log(info)

    // Lista de usuários recebendo o objeto
    listaDados.push(info);

    // Armazenando a lista de usuários construida em JSON
    localStorage.setItem('dados', JSON.stringify(listaDados));
})

