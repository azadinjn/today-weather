import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import Sidebar from "./components/Sidebar";
import WeatherSkeleton from "./components/WeatherSkeleton";

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
    <main className="min-h-screen p-4 md:p-8">
      <Header />

      <div className="max-w-7xl mx-auto mt-6">
        <div className="mb-6">
          <SearchBar onSelectCity={setSelectedCity} />
        </div>

        {!selectedCity ? (
          <section className="bg-weather-surface rounded-3xl mt-6 min-h-[450px] flex flex-col items-center justify-center text-center p-8">
            <div className="mb-8">
              <svg
                viewBox="0 0 100 100"
                className="w-28 h-28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M50 8V20 M50 80V92 M8 50H20 M80 50H92 M20.3 20.3L28.8 28.8 M71.2 71.2L79.7 79.7 M79.7 20.3L71.2 28.8 M28.8 71.2L20.3 79.7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Welcome to Today Weather
            </h2>

            <p className="text-weather-muted mt-3 max-w-md leading-relaxed">
              Discover the weather in your favorite cities. Search for a city to
              get current conditions and a 7-day forecast.
            </p>

            <p className="text-sm text-weather-muted mt-8">
              Start by searching for a city above
            </p>
          </section>
        ) : loading ? (
          <WeatherSkeleton />
        ) : weather ? (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
            <section className="bg-weather-surface rounded-3xl p-5 md:p-8">
              <CurrentWeather weather={weather} city={selectedCity} />
              <WeeklyForecast weather={weather} />
            </section>

            <Sidebar weather={weather} />
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default App;
