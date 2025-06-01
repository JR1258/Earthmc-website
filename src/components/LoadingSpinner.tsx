
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingSpinner: React.FC = () => {
  return (
    <Card className="bg-slate-800/50 border-emerald-500/20">
      <CardContent className="p-6">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-slate-700 rounded w-3/4"></div>
          <div className="h-4 bg-slate-700 rounded w-1/2"></div>
          <div className="h-4 bg-slate-700 rounded w-5/6"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingSpinner;
