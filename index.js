const text = document.querySelector('#para');

function increment(){
    let value = parseInt(text.textContent);
    value++;
    text.innerText = value; 
    setTimeout(function(){
        clicking();
    },600)
    text2.innerText = "clicked";
};

function decrement(){
    let value = parseInt(text.textContent);
    value = value - 1;
    text.innerText = value; 
    setTimeout(function(){
        clicking();
    },600)
    text2.innerText = "clicked";
};


const text2 = document.querySelector('#click');
function clicking(){
    text2.innerText = "";
}

