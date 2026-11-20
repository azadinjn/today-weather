
const BASE_URL = "https://api.open-meteo.com/v1/forecast"

export async function getWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: latitude,
    longitude: longitude,

    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "wind_speed_10m",
      "uv_index",
      "weather_code",
    ].join(","),

    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
    ].join(","),

    timezone: "auto",
    forecast_days: "7",
  })

  const response = await fetch(`${BASE_URL}?${params}`)

  if (!response.ok) {
    throw new Error("Failed to fetch weather data")
  }

  const data = await response.json()

  return data
}
