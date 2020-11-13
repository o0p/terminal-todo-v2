let input = prompt('what would you like to do?');
const todos = [1,2,3,4,5];
while (input !== 'quit' && input !== 'q') {
    if (input === 'l') {
        console.log('********************************');
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('********************************');
    } else if (input === 'n') {
        const newTodo = prompt('Please enter new Todo:')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'd') {
        const index = prompt('Please enter an index to delete:')
    }
    input = prompt('what would you liek to do?'); 
}
console.log('Ok, quit the app')