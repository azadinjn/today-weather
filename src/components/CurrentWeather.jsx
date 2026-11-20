import {getWeatherInfo} from "../utils/weatherCodes"

function CurrentWeather({ weather, city }) {
  if (!weather || !city) {
  return null
}
console.log("CurrentWeather weather prop:", weather)

const date = new Date(weather.current.time)

const formattedDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
})
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6">
      {/* City Information */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {city.name}, {city.country}
        </h2>

        <p className="text-sm text-slate-500 mt-1">{formattedDate}</p>
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-between mt-6 w-full">
        <div >
          <h1 className="text-6xl font-bold text-slate-800">{Math.round(weather.current.temperature_2m)}°</h1>

          <p className="text-lg text-slate-600 mt-2">{getWeatherInfo(weather.current.weather_code).description}</p>

          <p className="text-sm text-slate-500 mt-1">Feels like {Math.round(weather.current.apparent_temperature)}°</p>
        </div>

        <div className="text-6xl" >{getWeatherInfo(weather.current.weather_code).icon}</div>
      </div>

      {/* High and Low */}
      <div className="flex justify-between border-t mt-6 pt-4 text-sm text-slate-600">
        <p>
  High: {Math.round(weather.daily.temperature_2m_max[0])}°
</p>

<p>
  Low: {Math.round(weather.daily.temperature_2m_min[0])}°
</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
