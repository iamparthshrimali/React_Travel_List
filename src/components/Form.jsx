import { useRef } from "react";

export default function Form({ setItems }) {
    const descriptionRef = useRef();
    const quantityRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!descriptionRef.current.value) return;
        const newItem = { description: descriptionRef.current.value, quantity: quantityRef.current.value, packed: false, id: Date.now() }
        console.log(newItem);
        descriptionRef.current.value = "";
        quantityRef.current.value = ""
        setItems(items => [...items, newItem])

    }
    
  return <form className="add-form" onSubmit={handleSubmit}>
  <h3>What do you need for your trip ?</h3>
  <select ref={quantityRef}>
    {Array.from({ length: 20 }, (_, i) => <option key={i} selected={i === 0}>{i + 1}</option>)}
  </select>
  <input type="text" name="" id="" placeholder='Item... ' ref={descriptionRef} />
  <button>Add</button>


</form>
}
