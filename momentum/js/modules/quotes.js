const quote = document.querySelector('.quote');
const author =document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');

const getQuotes = () => {
    const quotes = 'js/modules/data.json';
    fetch(quotes)
      .then(res => res.json())
      .then(data => { 
        let randomNum = getNumberQuote (0, 19);

        author.textContent = `${data[randomNum].author}`;
        quote.textContent = `${data[randomNum].text}`;
        console.log(data[0].author);
      });
}

getQuotes();

const getNumberQuote = (min, max) => {
  let number = String(Math.floor(Math.random() * (max - min) + min));
  console.log(number);
  return number;
}

getNumberQuote (0, 19);

changeQuoteBtn.addEventListener('click', function() {
  getQuotes();
});