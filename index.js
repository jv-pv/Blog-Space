let postArray = [];
const form = document.querySelector('form')
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");

function renderPosts() {
  let html = "";
  postArray.forEach((post) => {
    html += `
        <div class="post-container">
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        </div>
        `;
  });
  document.querySelector(".post-wrapper").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postArray = data.slice(0, 5);
    renderPosts();
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newPost = {
    title: postTitle.value,
    body: postBody.value,
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
      if (postTitle.value !== "" || postBody.value !== "") {
        postArray.unshift(postData);
        // Two ways to clear form. One uses a function, form.reset() uses a local method
        // clearForm(postTitle, postBody);
        form.reset()
        renderPosts();
      }
    });
});

function clearForm(title, body) {
  title.value = "";
  body.value = "";
}

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

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const postTitleValue = document.getElementById("post-title").value;
//   const postBodyValue = document.getElementById("post-body").value;
//   let newPost = {
//     title: postTitleValue,
//     body: postBodyValue,
//   };
//   const options = {
//     method: "POST",
//     body: JSON.stringify(newPost),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
//     .then((response) => response.json())
//     .then((postData) => {
//       let newPostArr = [];
//       newPostArr.unshift(postData);
//       let html = "";
//       newPostArr.forEach((post) => {
//         html += `
//             <div class='post-container'>
//             <h1>${post.title}</h1>
//             <p>${post.body}</p>
//             </div>
//             ${document.querySelector(".post-wrapper").innerHTML}
//             `;
//       });
//       document.querySelector(".post-wrapper").innerHTML = html;
//     });
// });
