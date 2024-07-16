export async function load() {

    let todoData = await getTodoData();

    return {
        results: todoData
    }
	
}

const getTodoData = async () => {

    let userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    let userData = await userResponse.json();

    let todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todoData = await todoResponse.json();

    let result = todoData.map((todoItem) => {
        let userName = userData.filter((userItem) => userItem.id === todoItem.userId)[0]["name"];
        return {id: todoItem.id, user : userName, title: todoItem.title, completed: todoItem.completed}
    })

    return result;
}