
const items = document.getElementsByClassName('list-group-item');


console.log(items)

items[2].style.backgroundColor = 'green';


for(let i=0;i<4;i++){
    items[i].style.fontWeight = "bold";
}