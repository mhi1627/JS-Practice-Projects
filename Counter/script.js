
let count = 0;
let counter = document.querySelector('.counter');
let incrementBtn = document.querySelector('.increment');
let decrementBtn = document.querySelector('.decrement');
let input = document.getElementById('changeValueBy');

   
incrementBtn.addEventListener("click",() => {
    count =  Number(input.value) + count;
    counter.innerHTML = count;
   
})

decrementBtn.addEventListener("click",() => {
    count -=input.value;
    counter.innerHTML = count;
})

document.querySelector('.reset').addEventListener('click', () => {
    counter.textContent = 0;
})