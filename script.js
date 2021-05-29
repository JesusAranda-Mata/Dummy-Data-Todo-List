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
            console.log(element.title)
            const newLi = document.createElement("LI")
            //---console.log(newLi)
            const text = document.createTextNode(arrayOfTodos[0].title)
            newLi.appendChild(text)
            todoID.appendChild(newLi)
            console.log(newLi)
        }
    }

    // console.log(arrayOfTodos[0].userId)
    // console.log(arrayOfTodos[1].userId)

    let listItem = arrayOfTodos[0].title
    // console.log (listItem)
    
    const todoID = document.getElementById('todo-List')
    //---console.log(todoID)
    
    //let Dlist = () => {
        
   // }  
