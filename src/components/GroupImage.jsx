import React from 'react';
import '../App.scss';

const GroupImage = ({ details, setDetails }) => {
	const noUser =
		'https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png';

	const uploadImage = (e) => {
		const userImage = URL.createObjectURL(e.target.files[0]);
		setDetails({ ...details, Image: userImage });
	};

	const removeImage = () => {
		setDetails({ ...details, Image: noUser });
	};

	return (
		<div className='group-image-container'>
			<div className='group-image'>
				<input
					type='file'
					onChange={uploadImage}
					id='upload-button'
					style={{ display: 'none' }}
				/>
				<img
					src={details.Image}
					alt='group wallpaper'
					className='uploaded-image'
				/>
				{details.Image === noUser && (
					<label htmlFor='upload-button' className='upload-label'>
						<i className='fa fa-camera'></i>
						Upload Image
					</label>
				)}
				{details.Image !== noUser && (
					<label className='upload-label' onClick={removeImage}>
						<i className='fa fa-camera'></i>Remove Image
					</label>
				)}
			</div>
			<div className='group-description'>
				<input
					placeholder='Group Name'
					value={details.name}
					onChange={(e) => setDetails({ ...details, name: e.target.value })}
					className='input-description'
				/>
				<input
					placeholder='Group Description'
					value={details.desc}
					onChange={(e) => setDetails({ ...details, desc: e.target.value })}
					className='input-description'
				/>
			</div>
		</div>
	);
};

export default GroupImage;
