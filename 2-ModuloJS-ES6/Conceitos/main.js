/*1*/

function exc1(){
class usuario{
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
    isAdmin(){
        return this.admin === true;
    }
}

class admin extends usuario{
    constructor(email, senha){
        super(email, senha);

        this.admin = true
    }
}

const User1 = new usuario("emlail@teste.com", "senha123");
const Adm1 = new admin("email@teste.com", "senha123");


    console.log("Usuario " + User1.isAdmin());
    console.log("Admin " + Adm1.isAdmin()); 
}



/*2*/

function exc2(){
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const idadeUsers = usuarios.map((item)=>{
    return item.idade 
})
console.log(idadeUsers)

const rocket18 = usuarios.filter((item)=>{
    return item.idade > 18 && item.empresa ===  'Rocketseat'
})
console.log(rocket18)

const trabalhaGoogle = usuarios.find((item) => {
    return item.empresa === 'Google'
})
console.log(trabalhaGoogle)

var usuariosVezesDois = usuarios.filter((item) => {
    return item.idade*2 <50;
})
 console.log(usuariosVezesDois)

}


/*3*/
/*
const arr = [1, 2, 3, 4, 5];

arr.map((item) => {
 return item + 10;
});

const user = { nome: 'Diego', idade: 23 };
const mostraIdade = (user) => {
 return usuario.idade;
}
mostraIdade(usuario);

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
 return { nome, idade };
}
mostraUsuario(nome, idade);

const promise = function() {
    return new Promise((resolve, reject) => {
    return resolve();
    })
}
*/

/*4*/
function exc4(){

    const empresa = {
        nome: 'Rocketseat',
        endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
        }
    };

    const {nome, endereco:{cidade, estado}} = empresa

    function mostraInfo(usuario) {
        return `${usuario.nome} tem ${usuario.idade} anos.`;
    }
    mostraInfo({ nome: 'Diego', idade: 23 })

    console.log(`Nome ${nome}, Cidade: ${cidade}, Estado:${estado}`)



    function mostraInfo(usuario) {
        const {nome, idade} = usuario
            return(`${nome} tem ${idade} anos.`);
       }

       mostraInfo({ nome: 'Diego', idade: 23 })
}

/*5*/
function exc5(){
    const arr = [1, 2, 3, 4, 5, 6]

    const [x, ...y] = arr

    console.log(`x: ${x}\ny: ${y}`)

    function soma(...num){
        var resultado = num.reduce((total, next) => total + next)
        console.log(resultado)
    }

    soma(1, 2, 5)

    const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
        }
       };
       
       const usuario2 = {...usuario, nome: 'Gabriel'}

       console.log(usuario2)

}

/*6*/

function exc6(){
    const usuario = 'Diego';
    const idade = 23;
    console.log(`O usuário ${usuario} possui ${idade} anos`);       
}

/*7*/

function exc7(){
    const nome = 'Diego';
    const idade = 23;
    
    const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
    };

    console.log(usuario)
}
