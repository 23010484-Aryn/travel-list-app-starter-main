import Item from "./Item";

export default function PackingList({ items, handleTogglePacked, handleDeleteItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleTogglePacked={handleTogglePacked}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }