import './SearchAndSort.css';
import sortPng from '../../assets/sort.png';

export const SearchAndSort = ({ sort, setSort, search, setSearch }) => {
	const onChange = ({ target }) => {
		setSearch(target.value);
	};

	return (
		<div className="container-search">
			<input
				className="search-textfield"
				type="text"
				value={search}
				placeholder="Поиск..."
				onChange={onChange}
			/>
			<div
				className={`btn-img-sort${sort ? ' sort-active' : ''}`}
				onClick={() => setSort((prev) => !prev)}
			>
				<img className="img-sort" src={sortPng} alt="sort a-b" />
			</div>
		</div>
	);
};
