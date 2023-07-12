

function ListTodo(props) {

  const {items, onDeleteItem} = props

  const deleteItem = (e) => {
    e.preventDefault()
    onDeleteItem(e.target.dataset.ididem)
  }

  return (
    <div>
      <h2>Zoznam všetkých úloh:</h2>
      <table>
        <tbody>
        { items.map((item, index) => (
          <tr key={index}>
            <td className={item[1] == true ? "strong" : ""}> {item[0]} </td>
            <td> <a href="#" data-ididem={index} onClick={deleteItem} >Zmazať</a> </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodo;
