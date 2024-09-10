import { onCreateMarkupWeather } from './helpers/createMarkup';
import { fetchCountries } from './helpers/getContriesApi';
import { getWeather } from './helpers/getWeatherApi';
import { refs } from './helpers/refs';

refs.addBtn.addEventListener('click', onCountryAdd);
refs.searchForm.addEventListener('submit', onSearchBtn);

function onCountryAdd(evt) {
  const markup = `<input type="text" name="country" class="searhInput">`;
  refs.formContainer.insertAdjacentHTML('beforeend', markup);
}

function onSearchBtn(e) {
  e.preventDefault();
  //   console.dir(e.target);
  const data = new FormData(e.currentTarget);
  const arrCountry = data.getAll('country');
  const filteredCountry = arrCountry
    .filter(country => country)
    .map(country => country.replace(/ /g, ''));

  fetchCountries(filteredCountry)
    .then(async responce => {
      const capitals = responce.map(({ capital }) => capital[0]); // чому стоїть 0 це щоб брати перший елемент масиву
      const weatherService = await getWeather(capitals);

      onCreateMarkupWeather(weatherService, refs.weatherContainer);
    })
    .catch(err => console.log(err))
    .finally(e => refs.searchForm.reset());
}
