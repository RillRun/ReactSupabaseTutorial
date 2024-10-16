import { FunctionComponent} from "react"
import { IToDo } from "../models/IToDo"

interface ToDoItemProps{
    todoItem: IToDo
    toggleToDo: (id: number)=>void,
    deleteToDo: (id: number) => void
}

const ToDoItem: FunctionComponent<ToDoItemProps> = ({todoItem, toggleToDo, deleteToDo}) => {

    return (
        <li className={`flex justify-between items-center p-2 mb-2 border rounded ${todoItem.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
            <span className={`cursor-pointer hover: ${todoItem.completed ? 'line-through' : ''}`} onClick={()=>toggleToDo(todoItem.id)}>
                {todoItem.text}
            </span>
            <button className="text-red-500 hover:text-red-700" onClick={()=>deleteToDo(todoItem.id)}>
                Delete
            </button>
      </li>

    )
}

export default ToDoItem