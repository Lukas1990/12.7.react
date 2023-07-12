import {useState, useEffect} from "react"

import ListTodo from "./ListTodo";
import AddTodo from "./AddTodo";

function TodoApp() {

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if ( savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }

  const handleDeleteItem = (id) => {
    setItems( items.filter((item, index) => index != id) )
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items])

  return (
    <div className="kontajner" id="zoznam_uloh">

      <ListTodo items={items} onDeleteItem={handleDeleteItem} />
      <AddTodo onItemSubmit={handleItemSubmit} />

    </div>
  );
}

export default TodoApp;
