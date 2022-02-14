'use strict'

let c=0;

const app=()=>{
    
    c=0;

    document.querySelector('#kk').innerHTML=c;

}

document.querySelector('.btn').addEventListener('click',()=>{
    c++;

    document.querySelector('#kk').innerHTML=c;
})

document.querySelector('.bt2').addEventListener('click',app)