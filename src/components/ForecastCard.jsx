
 
function ForecastCard({ day, icon, maxTemp, minTemp, description, isToday }) {
  return (
    <div
      className={`rounded-2xl p-4 text-center transition-colors ${
        isToday
          ? "border border-weather-border bg-weather-surface"
          : "border border-transparent hover:border-weather-border"
      }`}
    >
      <p className="font-medium text-sm">
        {day}
      </p>

      <div className="text-3xl my-4">
        {icon}
      </div>

      <p className="text-xl font-medium">
        {maxTemp}°
      </p>

      <p className="text-sm text-weather-muted mt-1">
        {description}
      </p>

      <p className="text-sm text-weather-muted mt-2">
        {minTemp}°
      </p>
    </div>
  )
}

export default ForecastCard

