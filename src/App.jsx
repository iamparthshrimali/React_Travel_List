import React, { useRef, useState } from 'react'
import Logo from './components/Logo'
import  Form  from './components/Form'
import PackagingList from './components/PackagingList'
import Stats from './components/Stats'



function App() {
  const [items, setItems] = useState([])
  const handleDelete = (id) => {
    setItems(items => items.filter(item => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClear=()=>{
    
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackagingList items={items} onDelete={handleDelete} onToggleItem={handleToggleItem} onClear={handleClear}  />
      <Stats items={items} />
    </div>
  )
}





export default App