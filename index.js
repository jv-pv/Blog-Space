
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    const postArr = data.slice(0, 5)
    let html = ""
    postArr.forEach(post => {
        html += `
        <div class="post-container">
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        </div>
        `
    })
    document.querySelector('.post-wrapper').innerHTML = html
})

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const postTitleValue = document.getElementById("post-title").value;
    const postBodyValue = document.getElementById("post-body").value;
    let newPost = {
        title: postTitleValue,
        body: postBodyValue,
    };
    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((response) => response.json())
    .then((postData) => {
        let newPostArr = []
        newPostArr.unshift(postData)
        let html = ""
        newPostArr.forEach(post => {
            html += `
            <div class='post-container'>
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            </div>
            `
        })
        document.querySelector('.post-wrapper').insertAdjacentHTML('afterbegin', html)
    });
});


// Alternate DOM Manipulation

// fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
//   .then((response) => response.json())
//   .then((data) => {
//     const postsArr = data.splice(0, 5);
//     postsArr.forEach((post) => {
//       const postCont = document.createElement("div");
//       postCont.className = "post-container";
//       const postTitle = document.createElement("h1");
//       const postBody = document.createElement("p");
//       postTitle.innerText = post.title;
//       postBody.innerText = post.body;
//       postCont.append(postTitle, postBody);
//       document.querySelector("main").appendChild(postCont);
//     });
//   });

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const postTitleValue = document.getElementById("post-title").value;
//   const postBodyValue = document.getElementById("post-body").value;
//   let newPost = {
//     title: postTitleValue,
//     body: postBodyValue,
//   };
//   console.log(newPost);
//   fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
//     method: "POST",
//     body: JSON.stringify(newPost),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((postData) => console.log(postData));
// });