import { useState } from "react";
import Item from "./Item";


export default function PackagingList({ items, onDelete, onToggleItem,onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
// alert(sortBy)
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

  if(sortBy==="status") sortedItems=items.slice().sort((a,b)=>Number(b.packed)-Number(a.packed));

  return <>
    <div className="list">
      <ul >
        {
          sortedItems.map(item => <Item item={item} key={item.id} onDelete={onDelete} onToggleItem={onToggleItem} />)
        }
      </ul>
      <div className="actions">
        <select name="" id="" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sor By Input Order</option>
          <option value="description">Sort By Description </option>
          <option value="status">Sort By packed status</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  </>
}
