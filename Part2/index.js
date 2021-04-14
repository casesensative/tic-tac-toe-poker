const cardId = document.getElementById('cardId');
const cardStyle = document.getElementById('cardStyle');

console.log(cardId, cardStyle);

function setCard() {
  let card = document.getElementById(cardId.value);
  card.style.color = cardStyle.value;
}

function reset() {
  const diamonds = document.getElementById('diamonds');
  const clubs = document.getElementById('clubs');
  const spades = document.getElementById('spades');
  const hearts = document.getElementById('hearts');

  hearts.style.color = 'grey';
  clubs.style.color = 'grey';
  spades.style.color = 'grey';
  diamonds.style.color = 'grey';
}