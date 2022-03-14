import React from 'react';

const Post = ({ title, description, author }) => {
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
			<div style={{ margin: 20 }}>
				<h1>{title}</h1>
				<h3>{author}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Post;
