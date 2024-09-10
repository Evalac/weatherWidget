function onCreateMarkupWeather(arrData, containerEl) {
  const markup = arrData
    .map(
      ({
        current: {
          temp_c,
          humidity,
          condition: { text, icon },
        },
        location: { name, country },
      }) => ` <ul class="weather-widget">
      <li class="weather-item weather-country">${name}</li>
      <li class="weather-item weather-capital">${country}</li>
      <ul class="weather-condition">
        <li><p class="weather-condition-text">${text}</p></li>
        <li><img class="weather-icon" src="${icon}" alt="ICON" /></li>
      </ul>
      <li class="weather-item weather-temp">Current temp: ${temp_c} &deg;C</li>
      <li class="weather-item weather-humidity">Humidity: ${humidity}</li>
    </ul>`
    )
    .join('');

  return containerEl.insertAdjacentHTML('beforeend', markup);
}

export { onCreateMarkupWeather };
