import { useEffect, useState } from 'react';
import { contentful_ } from './Middleware';
import NewEntry from './NewEntry';
import Post from './Post';

const Blog = () => {
	const [ data_blog, setData_blog_ ] = useState([]);

	useEffect(() => {
		contentful_().then((data) => {
			setData_blog_(data);
		});
	}, []);

	return (
		<div>
			<NewEntry setData_blog_={setData_blog_} />

			{data_blog.map((e) => {
				return <Post key={e.title} title={e.title} description={e.description} author={e.author} />;
			})}
		</div>
	);
};

export default Blog;
