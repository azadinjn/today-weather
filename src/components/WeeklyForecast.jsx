
import ForecastCard from "./ForecastCard"
import { getWeatherInfo } from "../utils/weatherCodes"

function WeeklyForecast({ weather }) {
  if (!weather) {
    return null
  }

  return (
    <section className="mt-10">

      <h2 className="text-xl font-medium mb-6">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">

        {weather.daily.time.map((date, index) => {

          const weatherInfo = getWeatherInfo(
            weather.daily.weather_code[index]
          )

          return (
            <ForecastCard
              key={date}
              day={new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
              icon={weatherInfo.icon}
              description={weatherInfo.description}
              maxTemp={Math.round(weather.daily.temperature_2m_max[index])}
              minTemp={Math.round(weather.daily.temperature_2m_min[index])}
              isToday={index === 0}
            />
          )
        })}

      </div>
    </section>
  )
}

export default WeeklyForecast
