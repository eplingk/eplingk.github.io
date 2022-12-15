const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const cards = document.querySelector('.cards');

fetch(requestURL)  
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruit = jsonObject[''];
        fruit.forEach(displayCalories);
    });

    function displayCalories() {
        let card = document.createElement('section');
        let fname = document.createElement('h3')
        let fcalories = document.createElement('p');
        
        fname.textContent = `${fruit.name}`;
        fcalories.textContent = `${fruit.nutritions.calories}`;
       
    
        card.appendChild(fname);
        card.appendChild(fcalories);

    
        document.querySelector('div.cards').appendChild(card);
    }
    