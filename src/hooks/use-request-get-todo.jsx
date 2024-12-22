import { useState, useEffect } from 'react';
import { TODOS_URL } from '../constants/index';

export const useRequestGetTodo = (setIsLoading, setIsError, refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const requestGetTodos = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(TODOS_URL);
				if (!response.ok) {
					throw new Error('Нам не удалось загрузить данные');
				}
				const listTodos = await response.json();
				setTodos(listTodos);
			} catch (error) {
				console.error(error);
				setIsError('Нам не удалось загрузить данные');
			} finally {
				setIsLoading(false);
			}
		};
		requestGetTodos();
	}, [refreshTodosFlag]);

	return {
		todos,
		setTodos,
	};
};
