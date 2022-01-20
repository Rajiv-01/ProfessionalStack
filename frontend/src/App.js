import React from 'react';
import { render } from 'react-dom';
import Navbar from './containers/Navbar';

function App() {
	return <Navbar />;
}

export default App;

const appDiv = document.getElementById('app');
render(<App />, appDiv);
