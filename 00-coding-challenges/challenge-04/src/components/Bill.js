export default function Bill({ bill, onBillChange }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onBillChange(+e.target.value)}
      />
    </div>
  );
}
