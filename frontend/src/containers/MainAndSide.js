import { Box } from '@mui/material';
import React from 'react';
import SideContent from '../components/SideContent';
import MainContent from '../components/MainContent';

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
			<Box sx={{ gridArea: 'main' }} m='10px'>
				<MainContent />
			</Box>
			<Box sx={{ gridArea: 'sidebar' }} mr='20px' mt='10px'>
				<SideContent />
			</Box>
		</Box>
	);
}

export default MainAndSide;
