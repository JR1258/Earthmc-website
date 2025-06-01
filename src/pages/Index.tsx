
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResidentCard from '@/components/ResidentCard';
import TownCard from '@/components/TownCard';
import NationCard from '@/components/NationCard';
import OnlinePlayersWidget from '@/components/OnlinePlayersWidget';
import StatsOverview from '@/components/StatsOverview';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useEarthMCData } from '@/hooks/useEarthMCData';
import { Input } from '@/components/ui/input';

const Index = () => {
  const { data, loading, error } = useEarthMCData();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('residents');

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); // reload to re-trigger fetch
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const filterBySearch = (list: any[] = [], key: string) => {
    return list.filter(item => item[key]?.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-4">Error: {error}</div>;
  if (!data) return null;

  const filteredResidents = filterBySearch(data.residents, 'name');
  const filteredTowns = filterBySearch(data.towns, 'name');
  const filteredNations = filterBySearch(data.nations, 'name');

  return (
    <div className="p-4 space-y-6">
      <StatsOverview data={data} />
      <OnlinePlayersWidget onlinePlayers={data.onlinePlayers ?? []} />
      <Input
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 mx-auto"
      />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-center">
          <TabsTrigger value="residents">Residents</TabsTrigger>
          <TabsTrigger value="towns">Towns</TabsTrigger>
          <TabsTrigger value="nations">Nations</TabsTrigger>
        </TabsList>
        <TabsContent value="residents">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(filteredResidents ?? []).map(res => (
              <ResidentCard key={res.name} resident={res} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="towns">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(filteredTowns ?? []).map(town => (
              <TownCard key={town.name} town={town} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="nations">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(filteredNations ?? []).map(nation => (
              <NationCard key={nation.name} nation={nation} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
