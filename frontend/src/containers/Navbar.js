import React from 'react';
import { Avatar, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	const options = [
		{ value: 'channel1', label: 'Channel1' },
		{ value: 'channel2', label: 'Channel2' },
		{ value: 'channel3', label: 'Channel3' },
	];
	const customStyles = {
		noOptionsMessage: (provided) => ({
			...provided,
			color: 'white',
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused
				? 'rgba(50,50,50,0.9)'
				: 'rgba(120,120,120,0.9)',
		}),
		control: (provided) => ({
			...provided,
			backgroundColor: 'rgba(120,120,120,0.9)',
			textDecoration: 'none',
			width: '130px',
			border: 'none',
			height: '30px',
		}),
		placeholder: (provided) => ({
			...provided,
			color: 'white',
		}),
		input: (provided) => ({
			...provided,
			color: 'white',
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: 'rgba(150,150,150,0.9)',
			color: 'white',
		}),
		singleValue: (provided) => ({
			...provided,
			color: 'white',
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: 'white',
		}),
	};
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
				<div className='channels'>
					<Select
						options={options}
						styles={customStyles}
						placeholder='Channels'
					></Select>
				</div>
				<button id='join_button'> Join </button>
			</div>
		</>
	);
}

export default Navbar;
