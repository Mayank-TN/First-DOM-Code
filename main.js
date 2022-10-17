
//const items = document.getElementsByClassName('list-group-item');
const items = document.getElementsByTagName('li');

console.log(items)

items[2].style.backgroundColor = 'green';


for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
}

console.log(items[4]);
