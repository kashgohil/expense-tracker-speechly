import React from 'react';
import '../App.scss';

const Card = ({ details, onClick }) => {
	return (
		<div key={details.id} className='card' onClick={()=>onClick(details)}>
			<div className='card-image'>
				<img src={details.Image} className='image' alt={details.name} />
			</div>
			<div className='card-name'>{details.name}</div>
			{details.selected && <div className='card-checked'>&#10003;</div>}
		</div>
	);
};

export default Card;
