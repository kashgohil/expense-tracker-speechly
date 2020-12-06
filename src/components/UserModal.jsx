import React, { useState, useEffect } from 'react';
import GroupImage from './GroupImage';
import Filter from './Filter';
import Card from './Card';
import '../App.scss';

const Data = [
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png',
		name: 'User1',
		id: '1001',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/user20c5688c.jpg',
		name: 'User2',
		id: '1002',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Richard%20Mathew3350914.jpg',
		name: 'Richard Matthew',
		id: '1003',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Richard_Davies_Hansons_27b0aae3.jpeg',
		name: 'Richard Hansons',
		id: '1004',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/betty%20hansonb071ac8.jpg',
		name: 'Betty Hanson',
		id: '1005',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/doug%20hermann1a0ca42.jpg',
		name: 'Doug Hermann',
		id: '1006',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/martha%20hermann4ceeba1.jpg',
		name: 'Martha Hermann',
		id: '1007',
	},
	{
		Image:
			'https://s3-ap-southeast-1.amazonaws.com/he-public-data/dotty%20feliz841b64f.jpg',
		name: 'Dotty Feliz',
		id: '1008',
	},
];

const UserModal = ({ group, drawer, setGroup, setDrawer, handleChange }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const tmpUsers = Data.map((item) => {
			if (group.members.findIndex((member) => item.id === member.id) !== -1)
				return { ...item, selected: true };
			else return { ...item, selected: false };
		});
		setUsers(tmpUsers);
	}, [drawer]);

	const selectUser = ({ id }) => {
		const tmpUsers = users.map((item) =>
			item.id === id ? { ...item, selected: !item.selected } : item
		);
		setUsers(tmpUsers);
	};

	return (
		<div className={`user-modal ${drawer ? 'modal-open' : ''}`}>
			<div className='user-modal-header'>
				Create Group
				<span className='close-icon' onClick={() => setDrawer(false)}>
					<i className='fa fa-close'></i>
				</span>
			</div>
			<GroupImage details={group} setDetails={setGroup} />
			<Filter users={users} setUsers={setUsers} />
			<div className='users-list'>
				{users.map((item) => (
					<Card details={item} key={item.id} onClick={selectUser} />
				))}
			</div>
			<div className='button-bar'>
				<button
					onClick={() => {
						const tmpMembers = users.filter((item) => item.selected);
						Promise.resolve()
							.then(() => {
								setGroup({
									...group,
									members: tmpMembers,
									something: 'good',
								});
							})
							.then(() => {
								handleChange();
								setDrawer(false);
							});
					}}
					className='button'
				>
					{group.id !== '' ? 'Update' : 'Create'} Group
				</button>
			</div>
		</div>
	);
};

export default UserModal;
