const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const heart = card.querySelector('.like-icon');
  const iconButton = card.querySelector('.card__icon-button');
  const likeButton = card.querySelector('.card__like-button');
  const likeText = likeButton.querySelector('.button__text');

  const toggleLike = () => {
    const isLiked = heart.classList.toggle('is-liked');

    likeText.textContent = isLiked ? 'Unlike' : 'Like';
    iconButton.setAttribute('aria-pressed', String(isLiked));
    iconButton.setAttribute(
      'aria-label',
      isLiked ? 'Убрать лайк' : 'Поставить лайк',
    );
    likeButton.setAttribute('aria-pressed', String(isLiked));
  };

  iconButton.addEventListener('click', toggleLike);
  likeButton.addEventListener('click', toggleLike);
});
