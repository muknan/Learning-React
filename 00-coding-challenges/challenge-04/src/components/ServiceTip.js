export default function ServiceTip({
  serviceQuality,
  onServiceChange,
  children,
}) {
  return (
    <div>
      <span>{children} </span>
      <select
        value={serviceQuality}
        onChange={(e) => onServiceChange(+e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="10">Good (10%)</option>
        <option value="15">Great (15%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}
