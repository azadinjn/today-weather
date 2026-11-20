function ForecastCard({ day, icon, maxTemp, minTemp }) {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-sm">

      <p className="font-semibold text-slate-700">
        {day}
      </p>

      <div className="text-3xl my-3">
        {icon}
      </div>

      <p className="font-bold text-slate-800">
        {maxTemp}°
      </p>

      <p className="text-sm text-slate-500">
        {minTemp}°
      </p>

    </div>
  )
}

export default ForecastCard