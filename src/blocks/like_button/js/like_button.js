let heart = document.querySelector('.like-button__btn');
let likesNumber = document.querySelector('.likes-number');
let gradientChange = document.querySelector('.like-button__gradient-border');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  
  heart.classList.toggle('added');
  likesNumber.classList.toggle('p-color');
  gradientChange.classList.toggle('lg-background');
};
