
import React from 'react';
import { Resident } from '@/hooks/useEarthMCData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  resident: Resident;
}

const ResidentCard: React.FC<Props> = ({ resident }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{resident?.name ?? 'Unknown'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div><strong>Town:</strong> {resident?.town?.name ?? 'None'}</div>
        <div><strong>Nation:</strong> {resident?.nation?.name ?? 'None'}</div>
        <div><strong>Online:</strong> {resident?.status?.isOnline ? 'Yes' : 'No'}</div>
      </CardContent>
    </Card>
  );
};

export default ResidentCard;
