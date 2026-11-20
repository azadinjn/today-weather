import ForecastCard from "./ForecastCard"
import {getWeatherInfo} from "../utils/weatherCodes"

function WeeklyForecast({ weather }) {
  if (!weather) {
    return null
  }
  console.log("WeeklyForecast weather prop:", weather)
  return (
    
    <section className="mt-8">

      <h2 className="text-xl font-bold text-slate-800 mb-4">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">

        {weather.daily.time.map((date, index) => (
          <ForecastCard
            key={index}
            day={new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
            icon={getWeatherInfo(weather.daily.weather_code[index]).icon}
            maxTemp={Math.round(weather.daily.temperature_2m_max[index])}
            minTemp={Math.round(weather.daily.temperature_2m_min[index])}
          />
        ))}

      </div>

    </section>
  )
}



export default WeeklyForecast