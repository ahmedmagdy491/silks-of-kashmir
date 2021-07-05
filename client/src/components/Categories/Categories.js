import React from 'react';
import { Col, Image } from 'react-bootstrap';
import cat1 from '../assets/purple/20210609_140851.jpg';
const Categories = () => {
	return (
		<Col xs={6} md={4}>
			<Image src={cat1} thumbnail />
		</Col>
	);
};

export default Categories;
