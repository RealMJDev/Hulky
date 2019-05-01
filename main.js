//Get the objects from the DOM
const disk = document.querySelector('.disk');
const toggle = document.querySelector('.btn');

//App state
let state = true;
let degrees = 0;


setInterval(function(){

    if(state){
        degrees++;
        disk.style.transform = `rotate(${degrees}deg);`;
    }
},100);

