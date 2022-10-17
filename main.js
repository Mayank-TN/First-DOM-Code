
//const items = document.getElementsByClassName('list-group-item');
const items = document.getElementsByTagName('li');

console.log(items)

items[2].style.backgroundColor = 'green';


for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
}

console.log(items[4]);

const item2 = document.querySelector('.list-group-item:nth-child(1)');
item2.style.color = 'green';

const odds = document.querySelectorAll('.list-group-item:nth-child(odd)');

console.log(odds)
for(let i=0;i<odds.length;i++){
    odds[i].style.backgroundColor = 'green'
}