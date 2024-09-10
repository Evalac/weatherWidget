async function getWeather(arr) {
  const BASE_URL = `http://api.weatherapi.com/v1`;
  const API_KEY = `abc434b827734d07912131947241009`;

  const responces = arr.map(async city => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: city,
      lang: 'uk',
    });
    const responce = await fetch(`${BASE_URL}//current.json?${params}`);
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }

    return responce.json();
  });
  const data = await Promise.allSettled(responces);
  const filerdWeather = data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value);

  return filerdWeather;
}

export { getWeather };
