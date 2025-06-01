
import React from 'react';
import { Town } from '@/hooks/useEarthMCData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  town: Town;
}

const TownCard: React.FC<Props> = ({ town }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{town?.name ?? 'Unknown'}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        <div><strong>Mayor:</strong> {town?.mayor ?? 'Unknown'}</div>
        <div><strong>Nation:</strong> {town?.nation ?? 'None'}</div>
        <div><strong>Chunks:</strong> {town?.chunks ?? 0}</div>
      </CardContent>
    </Card>
  );
};

export default TownCard;
