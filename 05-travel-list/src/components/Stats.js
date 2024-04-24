export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 📃</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  return (
    <footer className="stats">
      <em>
        {numItems === numPacked
          ? "You got everything! Ready to go 👏"
          : `👜 You have ${numItems} items on your list,
          and you already packed ${numPacked} (${Math.ceil(
              (numPacked / numItems) * 100
            )}%)`}
      </em>
    </footer>
  );
}
