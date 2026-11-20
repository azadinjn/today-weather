import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import WeeklyForecast from "./components/WeeklyForecast";

import { getWeather } from "./services/weatherApi";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedCity) {
      return;
    }

    let isActive = true;

    async function fetchWeather() {
      try {
        setLoading(true);
        setError("");
        setWeather(null);

        const data = await getWeather(
          selectedCity.latitude,
          selectedCity.longitude,
        );

        if (isActive) {
          setWeather(data);
        }
      } catch (err) {
        if (isActive) {
          setError(err.message);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => {
      isActive = false;
    };
  }, [selectedCity]);

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Search */}
        <SearchBar onSelectCity={setSelectedCity} />

        {/* Weather Information */}
        <div className="mt-8">
          <CurrentWeather weather={weather} city={selectedCity} />

          <WeatherDetails weather={weather} />

          <WeeklyForecast weather={weather} />
        </div>
      </div>
    </main>
  );
}

export default App;
