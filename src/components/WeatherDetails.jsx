function WeatherDetails({ weather }) {
  console.log(weather)
  if (!weather) {
    return null
  }
  return (
    <section className="mt-6">

      <h2 className="text-xl font-bold text-slate-800 mb-4">
        Weather Details
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Humidity</p>
          <h3 className="text-2xl font-bold mt-2">{weather.current.relative_humidity_2m}%</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Wind Speed</p>
          <h3 className="text-2xl font-bold mt-2">{weather.current.wind_speed_10m} km/h</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">Feels Like</p>
          <h3 className="text-2xl font-bold mt-2">{Math.round(weather.current.apparent_temperature)}°</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-slate-500">UV Index</p>
          <h3 className="text-2xl font-bold mt-2">{weather.current.uv_index}</h3>
        </div>

      </div>

    </section>
  )
}

export default WeatherDetails