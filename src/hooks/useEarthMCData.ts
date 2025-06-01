
import { useState, useEffect } from 'react';

export interface Resident {
  name: string;
  town?: string;
  nation?: string;
  isOnline: boolean;
  coordinates?: { x: number; z: number };
  playtime?: number;
  joinDate?: string;
  lastSeen?: string;
}

export interface Town {
  name: string;
  mayor?: string;
  residents?: string[];
  nation?: string;
  chunks?: number;
  founded?: string;
  coordinates?: { x: number; z: number };
  isCapital?: boolean;
}

export interface Nation {
  name: string;
  capital?: string;
  king?: string;
  towns?: string[];
  population?: number;
  founded?: string;
  alliances?: string[];
}

export interface EarthMCData {
  residents: Resident[];
  towns: Town[];
  nations: Nation[];
  onlinePlayers: Resident[];
}

export function useEarthMCData() {
  const [data, setData] = useState<EarthMCData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [playersRes, townsRes, nationsRes] = await Promise.all([
          fetch("/api/earthmc?endpoint=players"),
          fetch("/api/earthmc?endpoint=towns"),
          fetch("/api/earthmc?endpoint=nations"),
        ]);

        if (!playersRes.ok || !townsRes.ok || !nationsRes.ok) {
          throw new Error("Failed to fetch EarthMC data");
        }

        const players = await playersRes.json();
        const towns = await townsRes.json();
        const nations = await nationsRes.json();

        const onlinePlayers = players.filter((p: any) => p.status?.isOnline);

        setData({
          residents: players,
          towns,
          nations,
          onlinePlayers,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
