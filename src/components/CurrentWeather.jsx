import { getWeatherInfo } from "../utils/weatherCodes";
import { Droplets, Wind} from "lucide-react";

function CurrentWeather({ weather, city }) {
  if (!weather || !city) {
    return null;
  }

  const date = new Date(weather.current.time);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-6 md:py-10">
      {/* City and Date */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-xl md:text-2xl font-medium">
          {city.name}, {city.country}
        </h2>

        <p className="text-sm text-weather-muted">{formattedDate}</p>
      </div>

      {/* Main Weather Information */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12">
        {/* Temperature */}
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-normal tracking-tight">
            {Math.round(weather.current.temperature_2m)}°
          </h1>

          <p className="text-xl md:text-2xl text-weather-muted mt-2">
            {getWeatherInfo(weather.current.weather_code).description}
          </p>
        </div>

        {/* Weather Details */}
        <div className="flex flex-row md:flex-col gap-6 md:gap-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl"><Wind size={24} strokeWidth={1.5} /></span>
            <div>
              <p className="text-sm text-weather-muted">Wind Speed</p>
              <p className="font-medium">
                {weather.current.wind_speed_10m} km/h
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl"><Droplets size={24} strokeWidth={1.5} /></span>
            <div>
              <p className="text-sm text-weather-muted">Humidity</p>
              <p className="font-medium">
                {weather.current.relative_humidity_2m}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Icon */}
      <div className="flex justify-center items-center mt-8">
        {(() => {
          const WeatherIcon = getWeatherInfo(weather.current.weather_code).icon;

          return <WeatherIcon   size={100} strokeWidth={1.3} />;
        })()}
        
      </div>

      {/* High and Low */}
      <div className="flex justify-center gap-12 border-t border-weather-border mt-10 pt-6 text-sm">
        <p>
          High:
          <span className="font-semibold ml-2">
            {Math.round(weather.daily.temperature_2m_max[0])}°
          </span>
        </p>

        <p>
          Low:
          <span className="font-semibold ml-2">
            {Math.round(weather.daily.temperature_2m_min[0])}°
          </span>
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
