import { FunctionComponent, useState } from "react"
import { IToDo } from "../models/IToDo"
import ToDoItem from "./ToDoItem"

const ToDoList: FunctionComponent = () => {
    const [text, setText] = useState('')
    const [toDoList, setToDoList] = useState<IToDo[]>([])

    //Create default todo with text state and add to toDoList
    const addToDo = () =>{
        const newToDo: IToDo = {
            id: toDoList.length,
            text: text, 
            completed: false
        }
        if(text.length>0){
            setToDoList([
                ...toDoList,
                newToDo
            ])
        }
    }

    //Use map to change completed state from todo by id
    const toggleToDo = (id: number) => {
        setToDoList(toDoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    //Filter out todo where id equals given id
    const deleteToDo = (id: number) => {
        setToDoList(toDoList.filter(todo => todo.id !== id));
    }


    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <div className="mb-4">
                <input onChange={e=>setText(e.target.value)} value={text}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Add a new task"
                />
                <button onClick={addToDo}
                    className="mt-2 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add ToDo
                </button>
            </div>
            {
                toDoList.map(todDoItem => (
                    <ToDoItem key={todDoItem.id} todoItem={todDoItem} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
                ))
            }
        </div>
    )
}

export default ToDoList