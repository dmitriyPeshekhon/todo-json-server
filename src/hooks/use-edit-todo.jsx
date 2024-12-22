import { DELETE_TODO_URL } from '../constants/index';

export const useEditTodo = (setRefreshTodosFlag, setIsError) => {
	async function requestEditTodo(id, param, setIsLoading) {
		const objWithRequest =
			typeof param === 'boolean' ? { completed: param } : { title: param };

		setIsLoading(true);

		try {
			const response = await fetch(DELETE_TODO_URL + id, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(objWithRequest),
			});
			if (!response.ok) {
				throw new Error('Не удалось редактировать задачу');
			}

			setRefreshTodosFlag((prev) => !prev);
		} catch (error) {
			console.error(error);
			setIsError('Не удалось редактировать задачу');
		} finally {
			setIsLoading(false);
		}
	}
	return requestEditTodo;
};
