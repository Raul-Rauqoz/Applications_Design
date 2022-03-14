import React, { useState } from 'react';

const NewEntry = ({ setData_blog_ }) => {
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ description, setDescription ] = useState('');

	return (
		<div
			style={{
				color: 'white',
				borderColor: 'white',
				borderStyle: 'solid',
				borderWidth: 5,
				margin: 20
			}}
		>
			<div>
				<label>Title</label>
				<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
			</div>
			<div>
				<label>Author</label>
				<input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />
			</div>
			<div>
				<label>Description</label>
				<input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
			</div>
			<div>
				<button
					onClick={() => {
						setData_blog_((a) => [ ...a, { title, description, author } ]);
						setAuthor('');
						setTitle('');
						setDescription('');
					}}
				>
					Entry
				</button>
			</div>
		</div>
	);
};

export default NewEntry;
