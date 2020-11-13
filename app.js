let input = prompt('what would you like to do?');
const todos = [1,2,3,4,5];
while (input !== 'quit' && input !== 'q') {
    if (input === 'l') {
        console.log('********************************');
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('********************************');
    }
    input = prompt('what would you liek to do?'); 
}
console.log('Ok, quit the app')