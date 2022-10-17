
// //const items = document.getElementsByClassName('list-group-item');
// const items = document.getElementsByTagName('li');

// console.log(items)

// items[2].style.backgroundColor = 'green';


// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
// }

// console.log(items[4]);

// const item2 = document.querySelector('.list-group-item:nth-child(1)');
// item2.style.color = 'green';

// const odds = document.querySelectorAll('.list-group-item:nth-child(odd)');

// console.log(odds)
// for(let i=0;i<odds.length;i++){
//     odds[i].style.backgroundColor = 'green'
// }

const container = document.querySelector('.container');
const h1 = document.querySelector('#header-title');
const newDiv = document.createElement('div');
const text = document.createTextNode("Hello World");
const text1 = document.createTextNode("Hello World");
newDiv.appendChild(text);

const newItem = document.createElement('li');
const items = document.getElementsByTagName('li');

const ul = document.querySelector('#items');
newItem.className = "list-group-item";
newItem.appendChild(text1);
ul.insertBefore(newItem,items[0]);
container.insertBefore(newDiv,h1);