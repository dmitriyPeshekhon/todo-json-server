import './App.css';
import { useState } from 'react';
import {
	useRequestGetTodo,
	useDeleteTodo,
	useAddTodo,
	useEditTodo,
	sortSearchTodos,
} from '../../hooks/index';
import { SearchAndSort, Todo, ModalWindow } from '../index';

export const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false); // флаг для useEffect
	const [editTodo, setEditTodo] = useState(null); // для редактируемого todo что бы использовать его в модалке
	const [sort, setSort] = useState(false);
	const [search, setSearch] = useState('');

	const { todos } = useRequestGetTodo(setIsLoading, setIsError, refreshTodosFlag);
	const requestAddTodo = useAddTodo(setRefreshTodosFlag, setIsError);
	const requestDeleteTodo = useDeleteTodo(setRefreshTodosFlag, setIsError);
	const requestEditTodo = useEditTodo(setRefreshTodosFlag, setIsError);

	const finalyTodos = sortSearchTodos(todos, search, sort);

	return (
		<div className="container">
			<div className="tablo-container">
				<SearchAndSort
					sort={sort}
					setSort={setSort}
					search={search}
					setSearch={setSearch}
				/>

				<div className="tablo">
					{isLoading ? <span className="loader"></span> : null}

					{isError ? <p className="error">{isError}</p> : null}

					{!isLoading && !isError
						? finalyTodos.map((todo) => {
								return (
									<Todo
										key={todo.id}
										todo={todo}
										requestDeleteTodo={requestDeleteTodo}
										requestEditTodo={requestEditTodo}
										setIsModalOpen={setIsModalOpen}
										setEditTodo={setEditTodo}
									/>
								);
						  })
						: null}
				</div>
				<button className="btn-add-todo" onClick={() => setIsModalOpen(true)}>
					+
				</button>
			</div>
			<ModalWindow
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				requestAddTodo={requestAddTodo}
				requestEditTodo={requestEditTodo}
				editTodo={editTodo}
				setEditTodo={setEditTodo}
			/>
		</div>
	);
};
