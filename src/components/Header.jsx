
function Header() {
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between px-2 py-3">

      <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
        Today Weather
      </h1>

      <p className="text-sm text-weather-muted hidden sm:block">
        Your daily weather forecast
      </p>

    </header>
  )
}

export default Header
