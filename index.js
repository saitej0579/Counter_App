const text = document.querySelector('#para');

function increment(){
    let value = parseInt(text.textContent);
    value++;
    text.innerText = value; 
};

function decrement(){
    let value = parseInt(text.textContent);
    value--;
    text.innerText = value; 
};