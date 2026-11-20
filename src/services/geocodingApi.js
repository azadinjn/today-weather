
const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

export async function searchCities(query) {
  if (!query.trim()) {
    return []
  }

  const params = new URLSearchParams({
    name: query,
    language: "en",
    format: "json",
  })

  const response = await fetch(`${BASE_URL}?${params}`)

  if (!response.ok) {
    throw new Error("Failed to fetch cities")
  }

  const data = await response.json()

  return data.results ?? []
}
