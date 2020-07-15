import api from './api'

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repositorie]')
        this.listEl = document.getElementById('repo-list')
        
        this.registerHandlers()
    }

    registerHandlers(){
        this.formEl.onsubmit = (event) => {
            this.addRepoditory(event);
        }
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id', 'loading')
            this.formEl.appendChild(loadingEl)
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepoditory(event){
        event.preventDefault();
        

        const repoInput = this.inputEl.value;
        

        if(repoInput.length === 0){
            alert('Digite o nome de um repositório valido')
            return;
        }

        this.setLoading();

        try{
            const response = await api.get(`/repos/${repoInput}`)
            const {name, description, html_url, owner:{avatar_url}} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })
            this.render()
        }catch(err){
            alert("O repositorio não existe")
        }   

        this.setLoading(false)

    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            console.log(repo)

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEL = document.createElement('strong')
            titleEL.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')

            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEL)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })
    }
}

new App()


/*
florinpop17/app-ideas
lluuccaass88/borderRadius-Generation
diego3g/node-microservices-ddd
*/