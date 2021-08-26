function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

function displayUser(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.name);
        const newList = document.createElement('li');
        newList.innerText = `Name: ${user.name} ----- Email: ${user.email}`;
        ul.appendChild(newList);
    }
}

function displayPost(posts) {
    const ol = document.getElementById('posts');
    for (const post of posts) {
        const newPost = document.createElement('li');
        newPost.innerText = post.title;
        ol.appendChild(newPost);
    }
}