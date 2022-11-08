const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)  //feed the required arguments, the URL 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let bDate = document.createElement('h3');
    let bPlace = document.createElement('h4');


    //change the textContent property of the h2 element to contain prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    bDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    bPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastName} - ${prophet.order}th Latter-Day Prophet`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(bDate);
    card.appendChild(bPlace);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}



