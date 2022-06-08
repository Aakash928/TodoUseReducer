export const initState = {
	todos: [],
	isComplete: false,
};

export const Reducer = (state, action) => {
	switch (action.type) {
		case "AddTodo":
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case "DeleteTodo":
			return {
				...state,
				todos: [...state.todos.filter((el) => el.id !== action.payload)],
			};
		case "ToggleTodo":
			return {
				...state,
				todos: [
					...state.todos.map((todo) => {
						if (todo.id === action.payload.id) {
							return { ...todo, isComplete: !todo.isComplete };
						}
						return todo;
					}),
				],
			};

		default:
			return state;
	}
};