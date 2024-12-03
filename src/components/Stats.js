export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = totalItems
      ? Math.round((packedItems / totalItems) * 100)
      : 0;
  
    return (
      <footer className="stats">
        <em>
          You have {totalItems} items in the list. You already packed {packedItems}{" "}
          ({packedPercentage}%).
        </em>
        {packedPercentage === 100 && <p>You got everything!</p>}
      </footer>
    );
  }
  