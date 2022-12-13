const requestURL = 'https://eplingk.github.io/wdd230/bountiful/fruit.json';
const cards = document.querySelector('.cards');

fetch(requestURL)  
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['fruit'];
        business.forEach(displayCalories);
    });

    function displayCalories(fruit) {
        let card = document.createElement('section');
        let fname = document.createElement('h3')
        let fcalories = document.createElement('p');
        
        fname.textContent = `${fruit.name}`;
        fcalories.textContent = `${fruit.calories}`;
       
    
        card.appendChild(fname);
        card.appendChild(fcalories);

    
        document.querySelector('div.cards').appendChild(card);
    }
    