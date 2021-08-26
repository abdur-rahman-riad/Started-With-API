function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h4>${post.id}</h4>
        <h3>${post.title}</h3>
        <p>${post.body}</p> 
        `;
        postContainer.appendChild(newDiv);
    }
}
function showPost() {
    loadPosts();
}


function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'New Post By Riad',
            body: 'This New post created by Rahman Riad for testing purpose',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}