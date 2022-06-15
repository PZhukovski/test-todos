import { useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ToDoItem from "./ToDoItem";
import downArrow from './img/downarrow.svg';
import filteredTasks from "./helpers/filteredTasks";
import transformTask from "./helpers/transformTask";

const List = () => {

    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState('all');


    const onChange = (e) => {
        setTodo(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault();
        setList(prevState => {
            return [transformTask(todo), ...prevState];
        })
        setTodo('');
    }

    const filterActive = (filter) => () => {
        setFilter(filter);
    }
    
     const clearCopletedTasks = () => {
        setList(list.filter(task => task.completed === false))
    }

    const renderFilteredTasks = filteredTasks(filter, list);
    const taskstoDo = list.filter(task => task.completed === false);

    return (
        <div className="list">
            <div className="list__container container">
                <div className="container__title title">
                    <form onSubmit={addTask} className='title-input'>
                        <button className="button-task">
                            <img src={downArrow} alt='downArrow' />
                        </button>
                        <input type="text"
                            className="input-style"
                            name="todoItem"
                            value={todo}
                            onChange={onChange}
                            placeholder='What needs to be done?'
                        />
                    </form>
                </div>

                {list.length > 0 ?
                    <TransitionGroup>
                        {renderFilteredTasks.map(item => {
                             return <CSSTransition key={item.id} timeout={500} classNames="todo__item item">
                                <div className="todo__item item">
                                    <ToDoItem key={item.id} item={item} setList={setList} />
                                </div>
                            </CSSTransition>

                        })}
                    </TransitionGroup> : ''
                }
                <div className="container__footer">
                    <div className="container__footer-list">
                        {taskstoDo.length > 1 ?
                            `${taskstoDo.length} items left` :
                            `${taskstoDo.length} item left`
                        }
                    </div>
                    <div className="container__footer-filter filter">
                        <button
                            className={filter === 'all' ? "filter-button active" : "filter-button"}
                            onClick={filterActive('all')}
                        >
                            All
                        </button>
                        <button
                            className={filter === 'active' ? "filter-button active" : "filter-button"}
                            onClick={filterActive('active')}
                        >
                            Active
                        </button>
                        <button
                            className={filter === 'completed' ? "filter-button active" : "filter-button"}
                            onClick={filterActive('completed')}
                        >
                            Completed
                        </button>
                    </div>
                    <div className="container__footer-delete delete">
                        <button
                            className="button-delete"
                            onClick={clearCopletedTasks}
                        >
                            Clear completed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List;