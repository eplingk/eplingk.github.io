const requestURL = 'https://eplingk.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)  
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruit = jsonObject['fruit'];
        fruit.forEach(displayCalories);
    });

    function displayCalories(fruit) {
        let card = document.createElement('section');
        let fname = document.createElement('h3')
        let fcalories = document.createElement('p');
        
        fname.textContent = `${fruit.name}`;
        fcalories.textContent = `${fruit.nutritions.calories}`;
       
    
        card.appendChild(fname);
        card.appendChild(fcalories);

    
        document.querySelector('div.cards').appendChild(card);
    }
    