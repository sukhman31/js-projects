let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let button = document.querySelector('#new-quote');

const quotes = [
    {
      quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
      person:'Mother Teresa'
    },
    {
        quote:'When you reach the end of your rope, tie a knot in it and hang on',
        person:'Franklin D. Roosevelt'
    },
    {
        quote:'Always remember that you are absolutely unique. Just like everyone else.',
        person:'Margaret Mead'
    },
    {
        quote:'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
        person:'Robert Louis Stevenson'
    },
    {
        quote:'The future belongs to those who believe in the beauty of their dreams.',
        person:'Eleanor Roosevelt'
    }
];

button.addEventListener('click',function(e){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
