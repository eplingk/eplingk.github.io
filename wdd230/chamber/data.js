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
    let h1 = document.createElement('h2');
    let h2 = document.createElement('h3')
    let bAddress = document.createElement('h4');
    let bPhone = document.createElement('h4')
    let bUrl = document.createElement('a')
    let bMembership = document.createElement('h5');
    let portrait = document.createElement('img');


 
    h1.textContent = `${business.name}`;
    h2.textContent = `${business.type}`;
    bPhone.textContent = `${business.number}`;
    bAddress.textContent = `${business.address}`;
    bUrl.textContent = `Website URL: ${business.websiteurl}`;
    bMembership.textContent = `Membership Level: ${business.membershiplevel}`;

    bUrl.setAttribute('href', business.websiteurl);
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



