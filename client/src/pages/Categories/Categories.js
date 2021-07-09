import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { listCatProduct } from '../../actions/catActions';
import Category from './Category';
const Categories = ({ cats }) => {
	// const dispatch = useDispatch();
	// const getItsProducts = (slug) => {
	// 	dispatch(listCatProduct(slug));
	// };

	return (
		<div className="row">
			{cats &&
				cats.map((cat) => (
					<Link to={`/${cat.slug}/products`}>
						<Category
							image={cat.image}
							// onClick={() => {
							// 	getItsProducts(cat.slug);
							// }}
						/>
					</Link>
				))}
		</div>
	);
};

export default Categories;
