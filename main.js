const btn = document.querySelector('#btn');
const table = document.querySelector('#table');
const itemInput = document.querySelector('#item');

document.title = "Title Changed";

const title = document.querySelector('#title');
title.style.borderBottom = 'solid 3px #000'

btn.addEventListener('click', (e)=>onSubmit(e));

function onSubmit(e){
    e.preventDefault();
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${itemInput.value}</td>`;
    console.log(tr)
    table.appendChild(tr);
}

const head = document.getElementById('head');
head.style.fontWeight = '900';
head.style.color = 'green';