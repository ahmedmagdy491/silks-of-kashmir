import React, { useState } from 'react';
import { Form, Button, Toast, Row } from 'react-bootstrap';
import { createCat, uploadImg } from './functions/functions';
import './Categories.css';
const Toasting = () => {
	return (
		<Toast>
			<Toast.Header>
				<img
					src="holder.js/20x20?text=%20"
					className="rounded mr-2"
					alt=""
				/>
				<strong className="mr-auto">Bootstrap</strong>
				<small>just now</small>
			</Toast.Header>
			<Toast.Body>See? Just like this.</Toast.Body>
		</Toast>
	);
};
const CreateCategory = () => {
	const [name, setName] = useState('');
	const [image, setImage] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		createCat({ name, image }).then((res) => {
			setName('');
			// <Toasting />;
			console.log(res);
		});
	};
	const onInputChange = (e) => {
		setImage(e.target.files[0]);
	};
	const handleUploadImg = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('catImg', image);
		uploadImg(formData).then((res) => {});
	};
	console.log(image);
	return (
		<Form className="col-md-4 m-auto pt-5" onSubmit={handleSubmit}>
			<h1>Create Category</h1>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Category Name</Form.Label>

				<Form.Control
					type="text"
					placeholder="Enter Category Name"
					onChange={(e) => setName(e.target.value)}
				/>
			</Form.Group>

			<Form.Group
				controlId="formFile"
				className="mb-3"
				enctype="multipart/form-data"
			>
				<Form.Label>Please Choose Category Image</Form.Label>
				<div className="row">
					<Form.Control
						name="catImg"
						type="file"
						onChange={onInputChange}
					/>
					<Button onClick={handleUploadImg}>Upload</Button>
				</div>
			</Form.Group>
			<Button className="create-btn" type="submit" onClick={handleSubmit}>
				Create
			</Button>
		</Form>
	);
};

export default CreateCategory;
