const fetchURL = `https://bagel-api-fis.herokuapp.com/bagels`;

const $ul = document.querySelector('ul');

fetch(fetchURL)
  .then(parseJSON)
  .then(makeShitShowUp);

function parseJSON(response) {
  return response.json();
}

function makeShitShowUp(bagels) {
  bagels
    .map(bagelToElement)
    .forEach(showBagelElements);
}

function bagelToElement(bagel) {
  const $li = document.createElement('li');
  $li.innerHTML = `
    <p>Bagel: ${bagel.type}</p>
    <p>Rating: ${bagel.rating}</p>`;

  return $li;
}

function showBagelElements ($bagel) {
  $ul.append($bagel);
}