
export default function Item({ item, onDelete, onToggleItem }) {


  return <>
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={{
        textDecoration: item.packed && "line-through"
      }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  </>
}