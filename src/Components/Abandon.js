import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"
import TodoItems from './TodoItems';
import "./TodayTask.css"

function Abondon() {

    const todos = useSelector((state) => state.todos);
    var location = useLocation();
    var currentPath = location.pathname;
    console.warn(currentPath)

    if (currentPath == "/abondon")
        return (
            <div className="today-task">
                <div className="today-task-subdiv">
                    <h2>Abondon Tasks</h2>
                    <ul className="today-task-ul">
                        {todos.map((todo) => (
                            (todo.abandon) ?
                                <TodoItems
                                    id={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                    progress={todo.progress}
                                    abandon={todo.abandon} />
                                : <h1></h1>))}
                    </ul>
                </div>
            </div>
        )
}

export default Abondon
