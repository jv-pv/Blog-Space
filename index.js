fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    postsArr.forEach((post) => {
        const postCont = document.createElement('div')
        const postTitle = document.createElement('h1')
        const postBody = document.createElement('p')
        postCont.className = "post-container"
        postTitle.innerText = post.title
        postBody.innerText = post.body
        postCont.append(postTitle, postBody)
        document.querySelector('main').appendChild(postCont)
        document.querySelector('main').className = "main-container"
    });
  });
