import { createClient } from 'contentful';

const cliente = createClient({
	space: 'arjgavmehdr9',
	accessToken: '1yCzkA-WvfdaOZOh7QCcEEEhds-AEB-HoMp8vbp7Oeg',
	host: 'preview.contentful.com'
});

export const contentful_ = async () => {
	const pre_data = await cliente.getEntries({
		content_type: 'ap3',
		select: 'fields'
	});

	return pre_data.items.map((e) => {
		return {
			...e.fields
		};
	});
};
