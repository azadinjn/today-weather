
import { useEffect, useState } from "react"
import WeatherDetails from "./WeatherDetails"

function Sidebar({ weather }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const hour = currentTime.getHours()

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
        ? "Good Afternoon"
        : "Good Evening"

  return (
    <aside className="bg-weather-sidebar rounded-3xl p-5 md:p-8 ">

      <div className="mb-10">
        <p className="text-weather-muted text-sm">
          {greeting}
        </p>

        <h2 className="text-4xl font-medium mt-2">
          {currentTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h2>

        <p className="text-sm text-weather-muted mt-2">
          {currentTime.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <WeatherDetails weather={weather} />

    </aside>
  )
}

export default Sidebar
