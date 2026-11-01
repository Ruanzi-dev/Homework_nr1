window.onload = function () {
  fetch("https://api.jsonbin.io/v3/b/6ae77ffdffd5d160539db0ab", {
    headers: {
      "X-Access-Key": "$2a$10$2ldeRj.4ORUaKU/wVDqpeOba3e2fWsoB4YfvNdrOYxS6cbnLzdGdS",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      for (let i = 0; i < json.record.length; i++) {
        let article = document.createElement("article");
        article.classList.add("post");

        let header = document.createElement("header");
        header.classList.add("post-header");

        const profileImg = document.createElement("img");
        profileImg.src = "res/images/me.png";
        let date = document.createElement("p");

        const postImg = document.createElement("img");
        postImg.classList.add("post-img");

        let PostText = document.createElement("p");
        PostText.classList.add("post-text");

        let main = document.querySelector("main");

        const likeBox = document.createElement("div");
        likeBox.classList.add("like-box");
        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        const counter = document.createElement("p");
        counter.classList.add("count");

        likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="heart"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>`;

        likeBox.appendChild(likeButton);
        likeBox.appendChild(counter);

        let obj = json.record[i];
        const postDate = document.createTextNode(obj.creationDate);
        const paragraph = document.createTextNode(obj.postText);
        date.appendChild(postDate);
        header.appendChild(profileImg);
        header.appendChild(date);
        article.appendChild(header);
        if (obj.imgPath != null) {
          postImg.src = obj.imgPath;
          article.appendChild(postImg);
        }
        PostText.appendChild(paragraph);
        article.appendChild(PostText);
        main.appendChild(article);
        article.appendChild(likeBox);

        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }

        const posts = document.querySelectorAll(".post");

        posts.forEach((post) => {
          const button = post.querySelector(".like-button");
          const heart = post.querySelector(".heart");
          const countElement = post.querySelector(".count");

          let likeCount = getRandomInt(100);
          let liked = 0;

          countElement.innerHTML = likeCount;

          button.addEventListener("click", () => {
            if (liked === 0) {
              liked = 1;
              likeCount += 1;
              heart.classList.add("liked");
            } else {
              liked = 0;
              likeCount -= 1;
              heart.classList.remove("liked");
            }

            countElement.innerHTML = likeCount;
          });
        });
      }
    });
};
