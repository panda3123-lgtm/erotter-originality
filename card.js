const params =
new URLSearchParams(location.search);


const cardName =
params.get("name");



fetch("cards.json")

.then(response => response.json())

.then(cards => {


const card =
cards.find(c => c.name === cardName);



const area =
document.getElementById("card-detail");



if(card){


area.innerHTML = `

<img src="images/cards/${card.image}">


<h2>${card.name}</h2>


<p>種類：${card.type}</p>

<p>コスト：${card.cost}</p>

<p>ATK：${card.atk}</p>

<p>色：${card.color}</p>


<h3>効果</h3>

<p>${card.effect}</p>


`;


}


});
