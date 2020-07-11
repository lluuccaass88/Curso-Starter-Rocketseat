var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos') || []) //Pegando o array q ta no storage e transformando de volta para um array sem ser no formato JSON

function renderTodos(){


    listElement.innerHTML = '';

    for(todo of todos){

        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        var link = document.createElement('a');
        var linkText = document.createTextNode("Excluir")

        link.setAttribute('href', '#')

        var pos = todos.indexOf(todo); //pesquisando no array todos qual a posição que tem o texto do todo
        link.setAttribute('onclick', 'removeTodos('+ pos +')')

        link.appendChild(linkText)
        listElement.appendChild(link)
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStrage();
}

function removeTodos(pos){ 
    todos.splice(pos, 1) //Exclui o item do array na posição passada
    renderTodos()
    saveToStrage()
}

function saveToStrage(){//Função que salva no storage
    localStorage.setItem('list_todos', JSON.stringify(todos))//Transformando o array em json para conseguir salvar
}