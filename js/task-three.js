let gotPlayerInfo = () => {
    fetch(
            "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeckhttps://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p=messi"
        )
        .then((res) => res.json())
        .then((data) => getPlayerId(data.player));
};

let getPlayerId = (data) => {
    let section = document.getElementById("sports-info-display");
    for (let player of data) {
        let div = document.createElement("div");
        div.innerHTML = ` 
            <img src='${player.strThumb}' />
            <h5>Birth Location:${player.strBirthLocation}</h5>
            <h5>Date of Birth ${player.dateBorn}</h5>
        `;
        div.classList.add("graphic");
        section.appendChild(div);
        console.log(player.idPlayer);
    }
};
gotPlayerInfo();