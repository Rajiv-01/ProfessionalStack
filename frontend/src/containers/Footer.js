import { Box } from '@mui/material';
import { width } from '@mui/system';
import React from 'react';

function Footer() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
				alignItems: 'flex-start',
				backgroundColor: 'rgb(20, 197, 123)',
			}}
			p='40px'
			pb='0px'
		>
			<div>
				<img src='../../static/images/Logo.svg' height='100px' width='100px' />
			</div>
			<div>
				<h1>
					Heading 1{' '}
					<ul className='footer_links'>
						<li>Link1</li>
						<li>Link2</li>
						<li>Link3</li>
						<li>Link4</li>
						<li>Link5</li>
					</ul>
				</h1>
			</div>
			<div>
				<h1>
					Heading 1{' '}
					<ul className='footer_links'>
						<li>Link1</li>
						<li>Link2</li>
						<li>Link3</li>
						<li>Link4</li>
						<li>Link5</li>
					</ul>
				</h1>
			</div>
			<div>
				<h1>
					Heading 1{' '}
					<ul className='footer_links'>
						<li>Link1</li>
						<li>Link2</li>
						<li>Link3</li>
						<li>Link4</li>
						<li>Link5</li>
					</ul>
				</h1>
			</div>
			<Box
				component='div'
				sx={{ display: 'block', width: '100%', textAlign: 'center' }}
			>
				<p style={{ color: 'rgba(0,0,0,0.5)' }}>
					CopyRight @ProfessionalStack 2022.
				</p>
			</Box>
		</Box>
	);
}

export default Footer;
