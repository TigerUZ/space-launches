import { useEffect, useState } from 'react';

export default function LaunchList({ onSelect }) {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10')
      .then(res => res.json())
      .then(data => setLaunches(data.results))
      .catch(err => console.error('Ошибка загрузки:', err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Ближайшие запуски</h2>
      <ul className="space-y-3">
        {launches.map(launch => (
          <li
            key={launch.id}
            className="bg-gray-800 p-3 rounded cursor-pointer hover:bg-gray-700"
            onClick={() => onSelect(launch)}
          >
            <strong>{launch.name}</strong><br />
            📅 {new Date(launch.net).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
