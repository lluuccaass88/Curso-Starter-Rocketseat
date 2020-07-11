/*Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch*/

var checaIdade = function(idade){
    return new Promise(function(resolve, reject){
    
            if(idade >= 18){
                resolve("Maior que 18")
            }else{
                reject('Menor que 18')
            }
    })
}

var resultado = checaIdade(17).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})
console.log(resultado)

/*Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
 */

var inputElement = document.getElementById("inputUser")
var btnElement = document.getElementById("btnBuscar")
var listElement = document.getElementById("listaRepositorios");

var repositorios = [];

function buscaRepositorios(){
    axios.get("https://api.github.com/users/"+inputElement.value+"/repos").then((response)=>{
    for(repo of response.data){
        repositorios.push(repo)
    }
}).catch((error)=>{
    console.log(error)
})
}

function mostraRepo(){

    buscaRepositorios();

    for(repo of repositorios){
        var itemLista = document.createElement('li')
        var repoLista = document.createTextNode(repo.name);

        itemLista.appendChild(repoLista);
        listElement.appendChild(itemLista)
    }

}

