const requestURL = 'https://eplingk.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)  //feed the required arguments, the URL 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let bDate = document.createElement('h3');
    let bPlace = document.createElement('h4');


    //change the textContent property of the h2 element to contain prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    h2.textContent = `${business.name}`;
    bDate.textContent = `${business.type}`;
    bPlace.textContent = `Website URL: ${business.websiteurl}`;
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', `Portrait of ${business.name} ${business.lastName} - ${business.order}th Latter-Day Prophet`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(bDate);
    card.appendChild(bPlace);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}



