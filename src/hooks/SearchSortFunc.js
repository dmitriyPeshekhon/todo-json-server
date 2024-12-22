export const sortSearchTodos = (todos, search, sort) => {
	if (search) {
		if (sort) {
			return [...todos]
				.sort((a, b) => {
					const aa = a.title.toLowerCase();
					const bb = b.title.toLowerCase();
					if (aa > bb) {
						return 1;
					}
					if (aa < bb) {
						return -1;
					}
					return 0;
				})
				.filter((todo) => todo.title.includes(search));
		}

		return [...todos].filter((todo) => todo.title.includes(search));
	} else if (sort) {
		return [...todos].sort((a, b) => {
			const aa = a.title.toLowerCase();
			const bb = b.title.toLowerCase();
			if (aa > bb) {
				return 1;
			}
			if (aa < bb) {
				return -1;
			}
			return 0;
		});
	} else {
		return todos;
	}
};
