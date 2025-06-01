
import React from 'react';
import { EarthMCData } from '@/hooks/useEarthMCData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  data: EarthMCData;
}

const StatsOverview: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Online Players</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {data?.onlinePlayers?.length ?? 0}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Residents</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {data?.residents?.length ?? 0}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Towns</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {data?.towns?.length ?? 0}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Nations</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold">
          {data?.nations?.length ?? 0}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;
