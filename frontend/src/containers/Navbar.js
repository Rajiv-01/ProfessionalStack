import React from 'react';
import { Avatar, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<div className='navbar'>
				<Avatar src={'../static/images/Logo.svg'} />
				<div className='two_links'>
					<a href='#'>Tour</a>
					<a href='#'>About Us</a>
				</div>
				<button className='theme_change'>Dark Mode</button>

				<form action='#' method='get'>
					<input type='text' placeholder='Search' />
				</form>

				<select name='channels' id='channels'>
					<option value='Channel1'>Channel1</option>
					<option value='Channel2'>Channel2</option>
					<option value='Channel3'>Channel3</option>
					<option value='Channel4'>Channel4</option>
				</select>
				<button> Join </button>
			</div>
		</>
	);
}

export default Navbar;
