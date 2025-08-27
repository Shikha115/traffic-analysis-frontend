
 function BreakdownList({
  title,
  items,
}: {
  title: string;
  items?: { label: string; value: number }[];
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="text-sm text-gray-500 mb-2">{title}</div>
      <ul className="space-y-2">
        {(items || []).map((it, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{it.label}</span>
            <span>{(it.value * 100).toFixed(1)}%</span>
          </li>
        ))}
        {!items?.length && <li className="text-gray-400">No data</li>}
      </ul>
    </div>
  );
}

export default BreakdownList;
