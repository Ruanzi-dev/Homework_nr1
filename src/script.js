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
