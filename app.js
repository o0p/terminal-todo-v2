let askUsr = prompt('Please select action:');
const itemtList = [1,2,3,4,5];
while (askUsr !== 'quit' && askUsr !== 'q') {
    if (askUsr === 'l') {
        console.log('********************************');
        for(let i = 0; i < itemtList.length; i++) {
            console.log(`${i}: ${itemtList[i]}`)
        }
        console.log('********************************');
    } else if (askUsr === 'n') {
        const newTodo = prompt('What would you like to do?')
        itemtList.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (askUsr === 'd') {
        const indexDel = parseInt(prompt('Please select index of item to delete:'));
        if(!Number.isNaN(indexDel) && indexDel > 0){
            const delItem = itemtList.splice(indexDel, 1);
            console.log(`"${delItem[0]}" has been delted`);
        } else {
            console.log("Warning! Index can not be negative or doesn't exist! Please select index of item to delete:")
        }
    }
    askUsr = prompt('What would you like to do?'); 
}
console.log('Ok, quit the app')