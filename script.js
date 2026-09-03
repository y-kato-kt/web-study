const button = document.querySelector(".notice-button");
const notice = document.querySelector(".notice");

button.addEventListener("click", function () {

  notice.classList.toggle("is-open");

  if (notice.classList.contains("is-open")) {
    button.textContent = "お知らせを閉じる";
  } else {
    button.textContent = "お知らせを見る";
  }

});