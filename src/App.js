import React, { useState } from 'react';
import UserModal from './components/UserModal';
import Card from './components/Card';
import './App.scss';

const App = () => {
	const [groups, setGroups] = useState([]);
	const [drawer, setDrawer] = useState(false);
	const [group, setGroup] = useState({
		name: '',
		desc: '',
		members: [],
		id: '',
		Image: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png',
	});

	const handleGroupChange = () => {
		if (groups.findIndex((item) => item.id === group.id) === -1)
			setGroups([...groups, { ...group, id: groups.length }]);
		else setGroups(groups.map((item) => (item.id === group.id ? group : item)));
		setGroup({
			name: '',
			desc: '',
			members: [],
			id: '',
			Image: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png',
		});
	};

	const selectGroup = (item) => {
		setGroup(item);
		setDrawer(true);
	};

	return (
		<div className='main'>
			<div className='header'>Groups</div>
			<div className='groups-container'>
				{groups.length > 0 ? (
					groups.map((item) => <Card details={item} onClick={selectGroup} />)
				) : (
					<span>There are no groups at the moment!</span>
				)}
			</div>
			<button className='button' onClick={() => setDrawer(true)}>
				Create Group
			</button>
			<UserModal
				group={group}
				setGroup={setGroup}
				drawer={drawer}
				setDrawer={setDrawer}
				handleChange={handleGroupChange}
			/>
		</div>
	);
};

export default App;
