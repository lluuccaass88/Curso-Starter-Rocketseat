//1
const delay = (seg) => new Promise((resolve, reject) => {
    setTimeout(() => {
        var cont = 1
        resolve(seg)
        cont++;
    }, 1000)
});

async function umPorSegundo() {
    console.log(await delay('1s'))
    console.log(await delay('2s'))
    console.log(await delay('3s'))
}

//2
import axios from 'axios';

class Api{
    static async getUserFromGit(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log("user: ")
            console.log(response.data)
        } catch(err){
            console.log("Erro interno.")
        }
    }
}

Api.getUserFromGit('diego3g')
Api.getUserFromGit('diego3g124123')

//3
class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log("Repositorio: ")
            console.log(response.data);
        } catch(err) {
            console.log('Repositório não existe');
        }
    }
}


    Github.getRepositories('lluuccaass88/borderRadius-Generation')
    Github.getRepositories('lluuccaass88/dslkvmskv');

//4
const buscaUsuario = async (usuario) => {
    try{
    const response = await axios.get(`https://api.github.com/users/${usuario}`)
    console.log("A busca retorna: ")
    console.log(response.data);
    }catch(err) {
    console.log('Usuário não existEe');
    };
   }

   buscaUsuario('diego3g');