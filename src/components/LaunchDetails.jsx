export default function LaunchDetails({ launch }) {
  if (!launch) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Детали запуска</h2>
        <p>Выберите запуск из списка.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Детали запуска</h2>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="text-lg font-bold">{launch.name}</h3>
        <p><strong>Дата:</strong> {new Date(launch.net).toLocaleString()}</p>
        <p><strong>Статус:</strong> {launch.status?.name}</p>
        <p><strong>Ракета:</strong> {launch.rocket?.configuration?.full_name}</p>
        {launch.mission && (
          <>
            <p><strong>Миссия:</strong> {launch.mission.name}</p>
            <p><strong>Описание:</strong> {launch.mission.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
