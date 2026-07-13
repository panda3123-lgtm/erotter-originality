// URLからカード名取得

const params = new URLSearchParams(location.search);

const cardName = params.get("name");


// 詳細ページの場合のみ実行

const detailArea =
document.getElementById("card-detail");


if(detailArea){


// cards.json読み込み

fetch("cards.json")

.then(response => response.json())

.then(cards => {



    const card = cards.find(
        c => c.name === cardName
    );




    if(!card){

        detailArea.innerHTML = `

        <h2>
        カードが見つかりません
        </h2>

        `;

        return;

    }



    detailArea.innerHTML = `


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


}
