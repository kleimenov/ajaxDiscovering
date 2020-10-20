//here I will get element by id
//const doc = document.getElementById('button');



//lets test our code, let build test function, this function will return 
// 'Everything doing well!' if all right
const testFunction = () => {
    console.log('Everything doing well!');
}

//create a handler function that will return text from ather file

const loadText = () => {
    //create XHR object
    const xhr = new XMLHttpRequest();
    //open function - type, url/file, async
    xhr.open('GET', 'textExample.txt', true)
    
    
    //check status
    xhr.onload = () => {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }

    //sends request
    xhr.send()
};

//lets check our event listener
//document.getElementById('testButton').addEventListener('click', testFunction)


//create event listener (click will be event)
document.getElementById('button').addEventListener('click', loadText);