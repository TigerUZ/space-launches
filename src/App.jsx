import { useState } from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

export default function App() {
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Space Launches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LaunchList onSelect={setSelectedLaunch} />
        <LaunchDetails launch={selectedLaunch} />
      </div>
    </div>
  );
}
