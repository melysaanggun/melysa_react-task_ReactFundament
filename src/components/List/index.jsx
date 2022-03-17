import { useState } from "react";
import style from './style.module.css';

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
            "completed": false,
        }
    ]);

    return ( 
        <div className="list">
            {todo.map((todo) => (
                <div className="todolist" key={todo.id}>
                    <h2>{todo.title}</h2>
                </div>
            ))}
        </div>
     );
}

export default List;