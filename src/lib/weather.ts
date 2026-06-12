export type Mood = "cold" | "hot" | "mild";

export interface WeatherData {
  mood: Mood;
  temp: number | null;
  city: string;
  chipText: string;
}

const ATLANTA_LAT = 33.749;
const ATLANTA_LON = -84.388;
const ATLANTA_CITY = "Atlanta";

function classifyMood(tempF: number): Mood {
  if (tempF < 45) return "cold";
  if (tempF > 85) return "hot";
  return "mild";
}

function buildChipText(mood: Mood, temp: number, city: string): string {
  if (mood === "cold") return `${temp}° tonight in ${city}`;
  if (mood === "hot") return `${temp}° right now in ${city}`;
  return `${temp}° in ${city} — enjoy it while it lasts`;
}

export async function getWeatherData(
  requestHeaders: Headers,
  searchParams: Record<string, string | undefined>
): Promise<WeatherData> {
  const overrideMood =
    ["cold", "hot", "mild"].includes(searchParams.mood ?? "")
      ? (searchParams.mood as Mood)
      : undefined;

  const rawCity =
    searchParams.city ??
    requestHeaders.get("x-vercel-ip-city") ??
    ATLANTA_CITY;
  const city = decodeURIComponent(rawCity);

  // || not ?? so NaN falls through to the default
  const lat =
    parseFloat(requestHeaders.get("x-vercel-ip-latitude") ?? "") || ATLANTA_LAT;
  const lon =
    parseFloat(requestHeaders.get("x-vercel-ip-longitude") ?? "") || ATLANTA_LON;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&temperature_unit=fahrenheit`,
      { signal: controller.signal, next: { revalidate: 900 } }
    );
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = (await res.json()) as {
      current?: { temperature_2m?: number };
    };
    const temp = Math.round(data.current?.temperature_2m ?? 72);
    const mood = overrideMood ?? classifyMood(temp);

    return { mood, temp, city, chipText: buildChipText(mood, temp, city) };
  } catch {
    return {
      mood: overrideMood ?? "mild",
      temp: null,
      city,
      chipText: "Comfort, whatever the weather",
    };
  }
}
