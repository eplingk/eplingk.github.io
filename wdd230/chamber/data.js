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
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2')
    let bAddress = document.createElement('h3');
    let bUrl = document.createElement('h4')
    let bMembership = document.createElement('h4');
    let portrait = document.createElement('img');


    //change the textContent property of the h2 element to contain prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    h1.textContent = `${business.name}`;
    h2.textContent = `${business.type}`;
    bAddress.textContent = `${business.number}`;
    bPlace.textContent = `${business.address}`;
    bUrl = `${business.websiteurl}`;
    bMembership = `${business.membership}`;
    portrait.setAttribute('src', business.imageurl);
    
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(bAddress);
    card.appendChild(bUrl);
    card.appendChild(bMembership);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}



