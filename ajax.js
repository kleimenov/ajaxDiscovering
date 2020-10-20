//here I will get element by id
const doc = document.getElementById('button');



//lets test our code, let build test function, this function will return 
// 'Everything doing well!' if all right
const testFunction = () => {
    console.log('Everything doing well!');
}

//create a handler function that will return text from ather file

const loadText = () => {
    
}

//lets check our event listener
document.getElementById('testButton').addEventListener('click', testFunction)


//create event listener (click will be event)
document.getElementById('button').addEventListener('click', loadText);