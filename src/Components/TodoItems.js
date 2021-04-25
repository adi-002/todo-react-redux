import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo, progressTodo, abandonTodo } from '../redux/todoSlice'
import "../Components/Todoitems.css";
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { GiMovementSensor } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";

function TodoItems({ id, title, completed, progress, abandon, index }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleComplete({ id: id, completed: !completed }))
    }
    const rends = {
        border: "1px solid blue"
    }

    const handleDelete = () => {
        dispatch(deleteTodo({ id: id }))
    }
    const handleProgress = () => {

        dispatch(progressTodo({ id: id, progress: !progress }))
    }
    const handleAbandon = () => {
        dispatch(abandonTodo({ id: id, abandon: !abandon }))
    }

    return (

        <div
            className={`input-item ${completed == true && "completed"} 
                        ${progress == true && "in-progress"}
                         ${abandon == true && "abandon"}`
            }
        >

            <li className="todo-li">{title}
                <div className="li-btns-div " >
                    <button
                        value={completed}
                        onClick={handleClick}
                        className="li-btn">
                        <TiTick size="20" color="#33cc33" />
                        <span class="tooltiptext">Completed</span>
                    </button>
                    <button
                        value={progress}
                        onClick={handleProgress}
                        className="li-btn">
                        <GiMovementSensor size="20" color="#ffcc00" />
                        <span class="tooltiptext">Progress</span>
                    </button>
                    <button
                        value={progress}
                        onClick={handleAbandon}
                        className="li-btn">
                        <FaSkullCrossbones size="20" color="black" />
                        <span class="tooltiptext">Abondon</span>
                    </button>
                    <button
                        onClick={handleDelete}
                        className="li-btn">
                        <MdDeleteForever size="20" color="#ff0000" />
                        <span class="tooltiptext">Delete</span>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default TodoItems
