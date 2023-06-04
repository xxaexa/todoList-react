import { useState } from 'react'
import { FaTimes, FaPlus } from 'react-icons/fa'

export default function Form() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!item) return
    const id = items.length + 1
    const newItem = { id: id, item: item }
    const updatedItem = [...items, newItem]
    setItems(updatedItem)
    setItem('')
  }
  const removeUser = (id) => {
    const updatedItem = items.filter((item) => item.id !== id)
    setItems(updatedItem)
  }
  return (
    <div>
      <div className="display">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex my-4 relative text-2xl bg-sky-500 bg-opacity-30 px-2 rounded-lg">
              <h2>{item.item}</h2>
              <button className="absolute right-0 top-1" onClick={() => removeUser(item.id)}>
                <FaTimes />
              </button>
            </div>
          )
        })}
      </div>
      <div className="form">
        <p className="text-right text-2xl px-2">{items.length} TASK</p>
        <form className="form my-4 flex" onSubmit={handleSubmit}>
          <input className="appearance-none w-full border-b-2 border-sky-500 bg-transparent px-2" type="text" id="item" name="item" value={item} onChange={(e) => setItem(e.target.value)} />
          <button type="submit" className=" ">
            <FaPlus />
          </button>
        </form>
      </div>
    </div>
  )
}
