    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const element = arrayOfTodos[index];
            //---console.log(element.title)
            const newLi = document.createElement("LI")
            //---console.log(newLi)
            const text = document.createTextNode(arrayOfTodos[0].title)
            newLi.appendChild(text)
            todoID.appendChild(newLi)
            //---console.log(newLi)
        }
    }

/* -------same as above ^^^^ ----------
const populateTodos = (data) => {
    const todoID = document.getElementById('todo-List')
    data.forEach(todo => {
        let newLi = document.createElement('LI')
        let text = document.createTextNode(todo.title)
        li.appendChild(text)
        todoID.appendChild(newLi)
    })
} 
-----*/

    // console.log(arrayOfTodos[0].userId)
    // console.log(arrayOfTodos[1].userId)

    let listItem = arrayOfTodos[0].title
    // console.log (listItem)
    
    const todoID = document.getElementById('todo-List')
    //---console.log(todoID)
     
    let newID = ""
    let filtering = document.getElementById('filtering')

    const filterBTN = () => {
    todoID.innerHTML=""
    arrayOfTodos => arrayOfTodos.length = 0;
    //---console.log ('filtering', filtering.value)
    arrayOfTodos = arrayOfTodos.filter(todo => {
    //---console.log("todo", todo)
        return todo.userId == filtering.value
    })
    populateTodos()
    //console.log('filterBTN', filterBTN)
    };
    //console.log('filterBTN', filterBTN)
    
    const olClear = () => {
        todoID.innerHTML=""
    }
    
    const completed = () => {
        todoID.innerHTML=""
        arrayOfTodos => arrayOfTodos.length = 0;
        //---console.log ('filtering', filtering.value)
        arrayOfTodos = arrayOfTodos.filter(todo => {
            console.log("todo", todo)
            return todo.completed == filtering.value
        })
        populateTodos()
        console.log('completed', completed)
        }
        console.log('completed', completed)
       
    

    
   

     
        
    
    
