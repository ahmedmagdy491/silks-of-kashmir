import axios from 'axios';
const REACT_APP_API = `${process.env.REACT_APP_API}`;
export const createCat = async (category) =>
	await axios.post(`${REACT_APP_API}/category`, category);

export const uploadImg = async (formData) =>
	await axios.post(`${REACT_APP_API}/uploadCatImg`, formData, {
		headers: {
			'content-type': 'multipart/form-data',
		},
	});
