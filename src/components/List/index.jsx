import { useState } from "react";
import './style.module.css';

const List = () => {
    const [todo, setTodo] = useState([
        {
            "id": 1,
            "title": "Membuat Komponen",
            "completed": true,
        },
        {
            "id": 2,
            "title": "Unit Testing",
            "completed": false,
        },
        {
            "id": 3,
            "title": "Setup Development Environment",
            "completed": false,
        },
        {
            "id": 4,
            "title": "Deploy ke Server",
            "completed": true,
        }
    ]);

   

    return ( 
        <div className="list">
            {todo.map((todo) => (
                <div className="todolist"  >
                    <h2 style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</h2>
                </div>
            ))}
        </div>
     );
}

export default List;