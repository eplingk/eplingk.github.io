const requestURL = 'https://eplingk.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)  
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['business'];
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2')
    let bAddress = document.createElement('h3');
    let bUrl = document.createElement('h4')
    let bMembership = document.createElement('h4');
    let portrait = document.createElement('img');


 
    h1.textContent = `Name: ${business.name}`;
    h2.textContent = ` Type: ${business.type}`;
    bAddress.textContent = `Phone Number: ${business.number}`;
    bPlace.textContent = `Address: ${business.address}`;
    bUrl = `Website URL: ${business.websiteurl}`;
    bMembership = `Membership Level: ${business.membership}`;
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



