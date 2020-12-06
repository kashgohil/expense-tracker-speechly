import React, { useState } from 'react';
import '../App.scss';

const Filter = ({ users, setUsers }) => {
	const [value, setValue] = useState('random');

	const handleSort = (e) => {
		let tmp = users.slice();
		if (e.target.value === 'decreasing')
			tmp = tmp.sort((a, b) =>
				a.name < b.name ? 1 : a.name === b.name ? 0 : -1
			);
		else if (e.target.value === 'increasing')
			tmp = tmp.sort((a, b) =>
				a.name > b.name ? 1 : a.name === b.name ? 0 : -1
			);
		else tmp = tmp.sort((a, b) => Math.random() * 10 > 5 ? 1 : -1);
		setUsers(tmp);
		setValue(e.target.value);
	};

	return (
		<div className='filter-bar'>
			Filter:
			<select value={value} onChange={handleSort} className='filter'>
				<option value='random'>Random</option>
				<option value='increasing'>Increasing</option>
				<option value='decreasing'>Decreasing</option>
			</select>
		</div>
	);
};

export default Filter;
