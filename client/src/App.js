import React, { Fragment } from 'react';
import Header from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/landing page/Landing';
import Panner from './components/Panner/Panner';
import CreateCategory from './components/Categories/CreateCategory';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Header />
				<Container>
					<Route path="/" component={LandingPage} exact />
					<Route path="/createCat" component={CreateCategory} exact />
				</Container>
			</Router>
		</Fragment>
	);
};
export default App;
