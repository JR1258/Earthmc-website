
let cache = {};
let lastFetch = {};

export default async function handler(req, res) {
  const { endpoint } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: 'Missing endpoint query parameter' });
  }

  const now = Date.now();
  const cacheTTL = 60000; // 60 seconds

  if (cache[endpoint] && (now - lastFetch[endpoint] < cacheTTL)) {
    return res.status(200).json(cache[endpoint]);
  }

  try {
    const apiUrl = `https://api.earthmc.net/v3/aurora/${endpoint}`;
    const response = await fetch(apiUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `EarthMC API error: ${response.statusText}` });
    }

    const data = await response.json();

    cache[endpoint] = data;
    lastFetch[endpoint] = now;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy server error:", error);
    res.status(500).json({ error: 'Failed to fetch EarthMC data', detail: error.message });
  }
}
