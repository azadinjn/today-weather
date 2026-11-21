
function WeatherSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 animate-pulse">
      {/* Main Area */}
      <section className="bg-weather-surface rounded-3xl p-5 md:p-8">
        <div className="flex justify-between items-center">
          <div className="h-6 w-36 bg-weather-border rounded-lg" />
          <div className="h-4 w-28 bg-weather-border rounded-lg" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16">
          <div className="flex flex-col items-center gap-4">
            <div className="h-24 w-44 bg-weather-border rounded-xl" />
            <div className="h-5 w-32 bg-weather-border rounded-lg" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="h-10 w-32 bg-weather-border rounded-lg" />
            <div className="h-10 w-32 bg-weather-border rounded-lg" />
          </div>
        </div>

        <div className="h-16 w-16 bg-weather-border rounded-full mx-auto mt-10" />

        <div className="flex justify-center gap-12 mt-10 pt-6 border-t border-weather-border">
          <div className="h-5 w-20 bg-weather-border rounded-lg" />
          <div className="h-5 w-20 bg-weather-border rounded-lg" />
        </div>

        <div className="mt-10">
          <div className="h-6 w-36 bg-weather-border rounded-lg mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="bg-weather-sidebar rounded-2xl p-4 flex flex-col items-center gap-4"
              >
                <div className="h-4 w-10 bg-weather-border rounded" />
                <div className="h-8 w-8 bg-weather-border rounded-full" />
                <div className="h-4 w-10 bg-weather-border rounded" />
                <div className="h-3 w-8 bg-weather-border rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <aside className="bg-weather-sidebar rounded-3xl p-5 md:p-8">
        <div className="h-4 w-28 bg-weather-border rounded mb-4" />
        <div className="h-10 w-36 bg-weather-border rounded-lg mb-3" />
        <div className="h-4 w-32 bg-weather-border rounded mb-10" />

        <div className="h-6 w-36 bg-weather-border rounded mb-5" />

        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-weather-surface rounded-2xl p-4 flex flex-col gap-3"
            >
              <div className="h-7 w-7 bg-weather-border rounded" />
              <div className="h-3 w-16 bg-weather-border rounded" />
              <div className="h-5 w-20 bg-weather-border rounded" />
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default WeatherSkeleton
