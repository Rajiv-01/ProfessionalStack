import React from 'react';
import { Avatar, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	return (
		<>
			<div className='navbar'>
				<Avatar src={'../static/images/Logo.svg'} />
				<div className='two_links'>
					<Link to='/tour'>Tour</Link>
					<Link to='/about'>About Us</Link>
				</div>
				<button className='theme_change'>
					<FontAwesomeIcon icon={faMoon} />
				</button>
				<div className='search_container'>
					<form action='#' method='get'>
						<input type='text' placeholder='Search' className='search_bar' />
					</form>
				</div>
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
