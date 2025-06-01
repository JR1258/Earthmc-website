
import React from 'react';
import { Nation } from '@/hooks/useEarthMCData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  nation: Nation;
}

const NationCard: React.FC<Props> = ({ nation }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{nation?.name ?? 'Unknown'}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        <div><strong>Capital:</strong> {nation?.capital ?? 'Unknown'}</div>
        <div><strong>King:</strong> {nation?.king ?? 'Unknown'}</div>
        <div><strong>Population:</strong> {nation?.population ?? 0}</div>
      </CardContent>
    </Card>
  );
};

export default NationCard;
