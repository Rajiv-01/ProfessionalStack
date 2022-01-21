import { Box } from '@mui/material';
import React from 'react';
import { positions } from '@mui/system';

function SideContent() {
	return (
		<>
			<Box
				component='div'
				sx={{
					backdropFilter: 'blur(8px) saturate(112%)',
					backgroundColor: 'rgba(197, 197, 197, 0.48)',

					height: '70vh',
				}}
				p='30px'
			>
				<div className='side_content'>
					This box will contain all the side contents and all the latest news. I
					think i will get api of latest post from may be quora or stack
					exchange I can get using backend api from the database all the
					questions that have been yet posted.
				</div>
			</Box>
		</>
	);
}

export default SideContent;
