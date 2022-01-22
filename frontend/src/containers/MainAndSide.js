import { Box } from '@mui/material';
import React from 'react';
import SideContent from '../components/SideContent';
import Tour from '../components/Tour';
import About from '../components/About';
import { Route, Routes } from 'react-router-dom';

function MainAndSide() {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
				gap: 2,
				gridTemplateRows: 'auto',
				gridTemplateAreas: `" . main main main main main main main main sidebar sidebar sidebar"`,
			}}
			mt='40px'
		>
			<Box
				sx={{
					gridArea: 'main',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backdropFilter: 'blur(8px) saturate(112%)',
					backgroundColor: 'rgba(197, 197, 197, 0.48)',
				}}
				m='10px'
				p='30px'
			>
				<Routes>
					<Route path='/tour' element={<Tour />} />
					<Route path='/about' element={<About />} />
					<Route path='/' element={<About />} />
				</Routes>
			</Box>
			<Box sx={{ gridArea: 'sidebar' }} mr='20px' mt='10px'>
				<SideContent />
			</Box>
		</Box>
	);
}

export default MainAndSide;
