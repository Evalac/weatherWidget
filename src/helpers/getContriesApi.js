async function fetchCountries(arrCountry) {
  const BASE_URL = 'https://restcountries.com/v3.1/name';

  const responces = arrCountry.map(async country => {
    const responce = await fetch(`${BASE_URL}/${country}`);
    if (!responce.ok) {
      throw new Error('');
    }
    return responce.json();
  });

  const data = await Promise.allSettled(responces);

  const countryObj = data
    .filter(({ status }) => status === 'fulfilled')
    .flatMap(({ value }) => value);

  return countryObj;
}

export { fetchCountries };
