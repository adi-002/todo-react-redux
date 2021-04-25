import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "todo pending sample", completed: false, progress: false, abandon: false },
        { id: 2, title: "todo progress sample", completed: false, progress: true, abandon: false },
        { id: 3, title: "todo completed sample", completed: true, progress: false, abandon: false },
        { id: 4, title: "todo abandon sample", completed: false, progress: false, abandon: true },
        { id: 5, title: "todo pending sample", completed: false, progress: false, abandon: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),  //for a unique id
                title: action.payload.title,
                completed: false,
                progress: false,
                abandon: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
            state[index].progress = action.payload.progress;

        },
        deleteTodo: (state, action) => {
            // state.filter((todo) => todo.id === action.payload.id))
            return (state.filter((todo) => todo.id !== action.payload.id))
        },
        progressTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].progress = action.payload.progress;
        },
        abandonTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].abandon = action.payload.abandon;


        }
    }
})

export const { addTodo, toggleComplete, deleteTodo, progressTodo, abandonTodo } = todoSlice.actions;

export default todoSlice.reducer