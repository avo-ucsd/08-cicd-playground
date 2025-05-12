// script.js

document.addEventListener('DOMContentLoaded', () => {
  const favorites = new Set();

  const card = document.querySelector('#recipe-card');
  const button = document.createElement('button');
  button.textContent = 'Bookmark';
  card.appendChild(button);

  button.addEventListener('click', () => {
    const recipeName = card.querySelector('h2').textContent;
    if (favorites.has(recipeName)) {
      alert(`${recipeName} is already in your favorites.`);
    } else {
      favorites.add(recipeName);
      alert(`${recipeName} added to favorites!`);
    }
  });
});