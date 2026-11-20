
import { useState, useEffect } from "react"
import { searchCities } from "../services/geocodingApi"

function SearchBar({ onSelectCity }) {
  const [query, setQuery] = useState("")
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    const searchQuery = query.trim()

    if (searchQuery.length < 2) {
      setCities([])
      setLoading(false)
      setError("")
      return
    }

    let isActive = true

    setLoading(true)
    setError("")

    const timer = setTimeout(async () => {
      try {
        const results = await searchCities(searchQuery)

        if (isActive) {
          setCities(results)
        }
      } catch (err) {
        if (isActive) {
          setError("Unable to search for cities.")
          setCities([])
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }, 300)

    return () => {
      isActive = false
      clearTimeout(timer)
    }
  }, [query])

  function getCountryFlag(countryCode) {
    return countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      )
  }

  // function handleSelectCity(city) {
  //   setSelectedCity(city)
  //   setCities([])
  // }
function handleSelectCity(city) {
  setSelectedCity(city)
  setCities([])
  setQuery("")
  onSelectCity(city)
}
  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="relative">
        <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedCity(null)
            }}
            placeholder="Enter city name..."
            className="flex-1 p-3 outline-none"
          />
        </div>

        {loading && (
          <p className="mt-2 text-sm text-slate-500">
            Searching...
          </p>
        )}

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}

        {cities.length > 0 && (
          <div className="absolute top-full overflow-y-scroll max-h-50 h-auto  left-0 right-0 mt-1 bg-white rounded-xl shadow-lg z-10">
            {cities.map((city) => (
              <button
                key={city.id}
                type="button"
                onClick={() => handleSelectCity(city)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-slate-100"
              >
                <span className="text-2xl">
                  {getCountryFlag(city.country_code)}
                </span>

                <div>
                  <p className="font-semibold text-slate-800">
                    {city.name}
                  </p>

                  <p className="text-sm text-slate-500">
                    {city.admin1 ? `${city.admin1}, ` : ""}
                    {city.country}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {selectedCity && (
          <p className="mt-3 text-sm text-slate-600">
            Selected: {selectedCity.name}, {selectedCity.country}
          </p>
        )}
      </div>
    </div>
  )
}

export default SearchBar
