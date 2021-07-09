import React, { Fragment } from 'react';
import Header from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/landing page/Landing';
import Panner from './components/Panner/Panner';
import CreateCategory from './pages/Categories/CreateCategory';
import CreateProducts from './pages/Products/CreateProducts';
import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/ProductDetails';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Header />
				<Container>
					<Route path="/" component={LandingPage} exact />
					<Route path="/createCat" component={CreateCategory} exact />
					<Route
						path="/createProduct"
						component={CreateProducts}
						exact
					/>
					<Route path="/:slug/products" component={Products} exact />
					<Route
						path="/:catSlug/:productSlug"
						component={ProductDetails}
						exact
					/>
				</Container>
			</Router>
		</Fragment>
	);
};
export default App;
