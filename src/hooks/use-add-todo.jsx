import { TODOS_URL } from '../constants';

export const useAddTodo = (setRefreshTodosFlag, setIsError) => {
	const requestAddTodo = async (titleTodo, setIsLoadingModalWindow) => {
		setIsLoadingModalWindow(true);

		try {
			const response = await fetch(TODOS_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: titleTodo,
					completed: false,
				}),
			});
			if (!response.ok) {
				throw new Error('Не удалось добавить задачу в базу');
			}

			setRefreshTodosFlag((prev) => !prev);
		} catch (error) {
			console.error(error);
			setIsError('Не удалось добавить задачу в базу');
		} finally {
			setIsLoadingModalWindow(false);
		}
	};

	return requestAddTodo;
};
