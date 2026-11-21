import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeeklyForecast from "./components/WeeklyForecast";
import Sidebar from "./components/Sidebar";

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

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">

        {/* Main Area */}
        <section className="bg-weather-surface rounded-3xl p-5 md:p-8">

          <CurrentWeather
            weather={weather}
            city={selectedCity}
          />

          <WeeklyForecast weather={weather} />

        </section>

        {/* Sidebar */}
        <Sidebar weather={weather} />

      </div>
    </div>

  </main>


  );
}

export default App;
