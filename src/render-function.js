function renderCountryList(countries) {

    const listEl = countries.map(country => {
        return `<li class="country__item">
    <img class="country__img" src="${country.flags.svg}" alt="flags" width="100"/>
    <h2 class="country__name">${country.name.official}<h2>
    <li>`
    })
        .join('');
    return listEl;
};

function renderCountryCard(countries) {
    const cardEl = countries.map(country => {
        return `<div class="country-card">
    <img class="country-card__img" src="${country.flags.svg}" alt="flags"/>
    <h2 class="country-card__name">${country.name.official}<h2>
    
    <div class="about-country">
    <p class="about-country__text">Capital: ${capital}</p>
    <p class="about-country__text">Population: ${population}</p>
    <p class="about-country__text">language: ${languages}</p>
    </div>

    </div>`

    })
        .join('');
    
    return cardEl;
};

export { renderCountryList, renderCountryCard };