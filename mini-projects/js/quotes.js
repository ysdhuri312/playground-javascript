/** @format */

const quotes = document.querySelector('#quotes');
const btn = document.querySelector('#btn');

function fetchQuotes() {
  const url = 'https://api.api-ninjas.com/v1/quotes';
  const apiKey = 'FcYmL16+t3ctYd140MOrhw==n5jqYuWbVbCpNoBU';

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
  })
    .then((responce) => responce.json())
    .then((data) => {
      quotes.textContent = data[0].quote;
      return 0;
    })
    .catch((err) => console.error(err));
}

btn.addEventListener('click', fetchQuotes);
