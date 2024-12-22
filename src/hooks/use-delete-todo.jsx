import { DELETE_TODO_URL } from '../constants/index.js';

export const useDeleteTodo = (setRefreshTodosFlag, setIsError) => {
	async function requestDeleteTodo(id, setIsLoading) {
		setIsLoading(true);

		try {
			const response = await fetch(DELETE_TODO_URL + id, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Не удалось удалить задачу из базы данных');
			}

			setRefreshTodosFlag((prev) => !prev);
		} catch (error) {
			console.error(error);
			setIsError('Не удалось удалить задачу из базы данных');
		} finally {
			setIsLoading(false);
		}
	}
	return requestDeleteTodo;
};
