import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom"
import { addTodo } from '../redux/todoSlice'
import TodoItems from './TodoItems';
import "./TodayTask.css"
import { IoMdAdd } from 'react-icons/io';

function TodayTask() {

    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);

    const addItem = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: name,
        }))
    }

    var location = useLocation();
    var currentPath = location.pathname;
    console.warn(currentPath)

    if (currentPath == "/")
        return (
            <div className="today-task">
                <div className="today-task-subdiv">
                    <h2>Today's Task</h2>
                    <div className="form-group">
                        <label>Add an Item</label>
                        <br />
                        <div className="item-input-div">
                            <input className="add-item-input" placeholder="Write an item to add." onChange={(e) => setName(e.target.value)} />
                            <button className="add-btn" onClick={addItem}> <IoMdAdd size="40" /></button>
                        </div>
                    </div>

                    <ul className="today-task-ul">
                        {todos.map((todo) => (
                            <TodoItems id={todo.id} title={todo.title} completed={todo.completed} progress={todo.progress} abandon={todo.abandon} />
                        ))}
                    </ul>
                </div>
            </div>
        )
}

export default TodayTask
