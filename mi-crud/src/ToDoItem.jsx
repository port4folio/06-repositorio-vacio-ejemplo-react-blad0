function ToDoItem({todo, cambiarEstado}){
    const {id, text, completed} = todo;
    const fnCambiarEstado = () => {
        cambiarEstado(id);
    }
    return (
        <>
            <li className="list-group-item">
            <input className="form-check-input me-2" onChange={fnCambiarEstado} type="checkbox" checked={completed}/>
            </input>
            {task}
            </li>
        </>
    );
}
export default ToDoItem;