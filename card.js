let allCards = [];


// =====================
// カードデータ読み込み
// =====================

fetch("cards.json")

.then(response => response.json())

.then(cards => {

    allCards = cards;

    displayCards(cards);

});




// =====================
// カード表示
// =====================

function displayCards(cards){


    const area =
    document.getElementById("card-list");


    area.innerHTML = "";


    cards.forEach(card => {


        const div =
        document.createElement("div");


        div.className = "card";



        div.innerHTML = `


        <a href="card.html?name=${encodeURIComponent(card.name)}">


            <img src="images/cards/${card.image}"
            alt="${card.name}">


            <h2>
            ${card.name}
            </h2>


        </a>



        <p>
        種類：${card.type}
        </p>


        <p>
        コスト：${card.cost}
        </p>


        <p>
        ATK：${card.atk}
        </p>


        <p>
        色：${card.color}
        </p>



        <p>
        ${card.effect}
        </p>


        `;



        area.appendChild(div);



    });


}






// =====================
// カード検索
// =====================


function searchCards(){



    const name =
    document.getElementById("search-name").value;



    const type =
    document.getElementById("search-type").value;



    const color =
    document.getElementById("search-color").value;



    const cost =
    document.getElementById("search-cost").value;




    const result =

    allCards.filter(card => {



        return (


            (
            card.name.includes(name)
            ||
            card.effect.includes(name)
            )


            &&


            (
            type === ""
            ||
            card.type.includes(type)
            )


            &&


            (
            color === ""
            ||
            card.color.includes(color)
            )


            &&


            (
            cost === ""
            ||
            card.cost == cost
            )


        );


    });



    displayCards(result);


}






// =====================
// 検索リセット
// =====================


function resetSearch(){



    document.getElementById("search-name").value = "";

    document.getElementById("search-type").value = "";

    document.getElementById("search-color").value = "";

    document.getElementById("search-cost").value = "";



    displayCards(allCards);


}

// URLからカード名取得

const params = new URLSearchParams(location.search);

const cardName = params.get("name");



// cards.json読み込み

fetch("cards.json")

.then(response => response.json())

.then(cards => {



    const card = cards.find(
        c => c.name === cardName
    );



    const area =
    document.getElementById("card-detail");



    if(!card){

        area.innerHTML = `

        <h2>
        カードが見つかりません
        </h2>

        `;

        return;

    }



    area.innerHTML = `


    <div class="detail-card">


        <img 
        src="images/cards/${card.image}"
        alt="${card.name}">


        <div class="detail-info">


            <h1>
            ${card.name}
            </h1>


            <p>
            種類：${card.type}
            </p>


            <p>
            コスト：${card.cost}
            </p>



            ${
            card.atk ?
            `<p>ATK：${card.atk}</p>`
            :
            ""
            }



            <p>
            色：${card.color}
            </p>



            <h2>
            効果
            </h2>


            <p>
            ${card.effect}
            </p>



            ${
            card.limit ?
            `<p class="limit">
            ⚠ ${card.limit}
            </p>`
            :
            ""
            }


        </div>


    </div>


    `;


});
