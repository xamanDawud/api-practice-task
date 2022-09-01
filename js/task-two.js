let getInfo = () => {
    fetch("https://randomuser.me/api/?gender=female")
        .then((res) => res.json())
        .then((data) => displayData(data.results[0]));
};

let displayData = (data) => {
    let section = document.getElementById("display-info");
    let div = document.createElement("div");
    div.innerHTML = ` 
   <img src='${data.picture.thumbnail}'/>
   <h3>Name: ${data.name.first} ${data.name.last}</h3>
   <p>Location: ${data.location.street.name}</p>
   `;
    div.classList.add("graphic");
    section.appendChild(div);
    console.log();
};
getInfo();