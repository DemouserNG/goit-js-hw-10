function fetchCountries(name) {
    const urlFields = 'name, capital, population, flags, languages';

  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${urlFields}`)
    
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}


export default { fetchCountries };