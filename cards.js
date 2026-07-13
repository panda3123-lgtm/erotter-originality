fetch("cards.json")

.then(response => response.json())

.then(cards => {


const area =
document.getElementById("card-list");



cards.forEach(card => {


const div =
document.createElement("div");


div.className =
"card";



div.innerHTML = `

<img src="images/cards/${card.image}">

<h2>${card.name}</h2>

<p>種類：${card.type}</p>

<p>コスト：${card.cost}</p>

<p>ATK：${card.atk}</p>

<p>色：${card.color}</p>

`;



area.appendChild(div);


});


});
