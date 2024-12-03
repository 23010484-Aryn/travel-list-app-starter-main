export default function Item({ item, handleTogglePacked, handleDeleteItem }) {
    return (
      <li>
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }} >
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleTogglePacked(item.id)}
        />
        {item.description} ({item.quantity})
        </span>
        <button
  onClick={() => {
    if (window.confirm('Are you sure you want to delete said item(s)?')) {
        handleDeleteItem(item.id);
    }
  }}
          style={{
            marginLeft: "8px",
            background: "transparent",
            border: "none",
            color: "black",
            cursor: "pointer",
            fontSize: "40px",
          }}
          aria-label="Delete item"
        >
        x
        </button>
        
      </li>
    );
  }