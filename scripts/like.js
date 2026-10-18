const hearts = document.querySelectorAll('.like-icon');
const likeButtons = document.querySelectorAll('.card__like-button');
const iconButtons = document.querySelectorAll('.card__icon-button');

function toggleLike(heart, button) {
  const isLiked = heart.classList.toggle('is-liked');
  button.querySelector('.button__text').textContent = isLiked ? 'Unlike' : 'Like';
}

iconButtons.forEach((button, index) => {
  button.addEventListener('click', () => toggleLike(hearts[index], likeButtons[index]));
});

likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => toggleLike(hearts[index], button));
});
