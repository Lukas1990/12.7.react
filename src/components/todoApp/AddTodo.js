import {useRef} from "react"

function AddTodo(props) {

  // props.onItemSubmit()
  const {onItemSubmit} = props

  const textarea = useRef(0)
  const checkbox = useRef(0)


  const handleSubmit = (e) => {
    e.preventDefault()

    if (textarea.current.value.trim()) {
      onItemSubmit([textarea.current.value, checkbox.current.checked])

      textarea.current.value = ""
      textarea.current.focus()
      checkbox.current.checked = false
    }
  }

  return (
    <div id="pridanie_ulohy">
      <h2>Pridanie úlohy:</h2>
      <textarea ref={textarea}></textarea>
      <label> <input type="checkbox" ref={checkbox} /> Dôležitá úloha </label>
      <button type="submit" className="btn" onClick={handleSubmit}> Uložiť úlohu</button>
    </div>
  );
}

export default AddTodo;
