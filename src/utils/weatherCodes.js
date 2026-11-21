import {
  Sun,
  Cloud,
  CloudSun,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from "lucide-react";

const weatherConditions = {
  0: { description: "Clear sky", icon: Sun },
  1: { description: "Mainly clear", icon: CloudSun },
  2: { description: "Partly cloudy", icon: Cloud },
  3: { description: "Overcast", icon: Cloud },

  45: { description: "Fog", icon: CloudFog },
  48: { description: "Depositing rime fog", icon: CloudFog },

  51: { description: "Light drizzle", icon: CloudDrizzle },
  53: { description: "Moderate drizzle", icon: CloudDrizzle },
  55: { description: "Dense drizzle", icon: CloudDrizzle },
  56: { description: "Light freezing drizzle", icon: CloudDrizzle },
  57: { description: "Dense freezing drizzle", icon: CloudDrizzle },

  61: { description: "Slight rain", icon: CloudRain },
  63: { description: "Moderate rain", icon: CloudRain },
  65: { description: "Heavy rain", icon: CloudRain },
  66: { description: "Light freezing rain", icon: CloudRain },
  67: { description: "Heavy freezing rain", icon: CloudRain },

  71: { description: "Slight snow", icon: CloudSnow },
  73: { description: "Moderate snow", icon: CloudSnow },
  75: { description: "Heavy snow", icon: CloudSnow },
  77: { description: "Snow grains", icon: CloudSnow },

  80: { description: "Slight rain showers", icon: CloudRain },
  81: { description: "Moderate rain showers", icon: CloudRain },
  82: { description: "Violent rain showers", icon: CloudRain },

  85: { description: "Slight snow showers", icon: CloudSnow },
  86: { description: "Heavy snow showers", icon: CloudSnow },

  95: { description: "Thunderstorm", icon: CloudLightning },
  96: { description: "Thunderstorm with slight hail", icon: CloudLightning },
  99: { description: "Thunderstorm with heavy hail", icon: CloudLightning },
};

export function getWeatherInfo(code) {
  return (
    weatherConditions[code] ?? {
      description: "Unknown weather",
      icon: "❔",
    }
  );
}
