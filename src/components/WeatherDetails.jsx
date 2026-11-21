import { Droplets, Wind, Thermometer, Sun } from "lucide-react";

function WeatherDetails({ weather }) {
  if (!weather) {
    return null;
  }

  const details = [
    {
      id: 1,
      label: "Humidity",
      value: `${weather.current.relative_humidity_2m}%`,
      icon: Droplets,
    },
    {
      id: 2,
      label: "Wind Speed",
      value: `${weather.current.wind_speed_10m} km/h`,
      icon: Wind,
    },
    {
      id: 3,
      label: "Feels Like",
      value: `${Math.round(weather.current.apparent_temperature)}°`,
      icon: Thermometer,
    },
    {
      id: 4,
      label: "UV Index",
      value: weather.current.uv_index,
      icon: Sun,
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-medium mb-5">Weather Details</h2>

      <div className="grid grid-cols-2 gap-3">
        {details.map((detail) => (
          <div key={detail.id} className="bg-weather-surface rounded-2xl p-4">
            <div className="text-2xl mb-3 " ><detail.icon size={28} strokeWidth={1.5} /></div>

            <p className="text-xs text-weather-muted">{detail.label}</p>

            <p className="text-lg font-medium mt-1">{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeatherDetails;
