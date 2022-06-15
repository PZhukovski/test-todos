
const ToDoItem = ({ item, setList }) => {

    const { task, id, completed } = item;

    const completedItem = (id) => () => {
        setList(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return { ...item, completed: !completed };
                }
                else return item;
            });
        })
    }

    return (
        <div className="item__form">
            <div className="item__checkbox">
                <input type="checkbox"
                    className="checkbox-round"
                    id="taskCompleted"
                    name="taskCompleted"
                    value="taskCompleted"
                    checked={completed}
                    onChange={completedItem(id)}
                />
                <label htmlFor="taskCompleted" className={completed ? "todo todo-done" : "todo"} > {task} </label>

            </div>
        </div>
    )
}
export default ToDoItem;