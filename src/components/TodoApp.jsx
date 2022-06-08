import React, { useReducer, useState } from "react";
import { initState, Reducer } from "./Reducer";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
	const [text, setText] = useState("");
	const [state, dispatch] = useReducer(Reducer, initState);
	const [isCompleted,setIsCompleted] = useState(false)

	

	const handleClick = () => {
		if (text === "") return;
		else {
			dispatch({
				type: "AddTodo",
				payload: {
					id: uuidv4(),
					text,
				},
			});
			setText("");
		}
	};

	const handleDelete = (id) => {
		dispatch({ type: "DeleteTodo", payload: id });
	};

	const handleStatus = (id) => {
		// state.todos.map((todo)=>{(todo.id === action.payload.id)?{return todo.setIsCompleted(true)}})
		setIsCompleted(!isCompleted);
		// dispatch({type:"ToggleTodo", payload: id})
	};

	return (
		<div>
			<input
				type="text"
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter Todo..."
			/>
			<button onClick={handleClick}>Submit</button>

			{state.todos.map((el) => {
				return (
					<div key={el.id}>
						<span>{el.text}</span>
						<button onClick={() => handleDelete(el.id)}>Delete</button>
						<button onClick={() => handleStatus(el.id)}>
							{isCompleted ? "Done" : "Not done"}
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default TodoApp;