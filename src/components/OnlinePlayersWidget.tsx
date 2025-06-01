
import React from 'react';
import { Resident } from '@/hooks/useEarthMCData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  onlinePlayers: Resident[];
}

const OnlinePlayersWidget: React.FC<Props> = ({ onlinePlayers }) => {
  const safePlayers = Array.isArray(onlinePlayers) ? onlinePlayers : [];

  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>Currently Online</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
        {safePlayers.length > 0 ? (
          safePlayers.map((p) => (
            <div key={p.name} className="truncate">
              {p.name}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No players online.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default OnlinePlayersWidget;
