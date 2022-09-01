let loadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((comment) => getCommnet(comment));
};

let getCommnet = (comment) => {
    let section = document.getElementById("show-comment");
    for (let i = 0; i < (comment.length && 21); i++) {
        let div = document.createElement("div");
        div.innerHTML = ` 
        <h3>Name is: ${comment[i].name}</h3>
        <p>Id is: ${comment[i].id}</p>
        <p>Eamil is : ${comment[i].email}</p>
        <p>${comment[i].body.slice(0, 50)}</p>
    `;
        div.addEventListener("click", function() {
            return `${getId(comment[i].id)}`;
        });
        div.classList.add("graphic");
        section.appendChild(div);
        // console.log(comment[i]);
    }
};

let getId = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => idToDisplayData(data));
};

let idToDisplayData = (data) => {
    let section = document.getElementById("show-aId");
    section.innerHTML = `
        <h1>Post id is : ${data.id}</h1>
        <p>Title: ${data.title}</p>
        <p>Description: ${data.body}</p>
    `;
    section.classList.add("graphic2");
    console.log(data.body);
};

loadComments();