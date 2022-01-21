import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLink from './components/SocialLink';
import Navbar from './containers/Navbar';

import MainAndSide from './containers/MainAndSide';
import Footer from './containers/Footer';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<SocialLink />

			<MainAndSide />
			<Footer />
		</BrowserRouter>
	);
}

export default App;

const appDiv = document.getElementById('app');
render(<App />, appDiv);
