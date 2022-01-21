import { Box } from '@mui/material';
import React from 'react';

function MainContent() {
	return (
		<Box
			component='div'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backdropFilter: 'blur(8px) saturate(112%)',
				backgroundColor: 'rgba(197, 197, 197, 0.48)',
			}}
			p='30px'
		>
			<h1>Tour For Our Site</h1>
			<img src='../../static/images/Logo.svg' />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
				laudantium perspiciatis aut? Maxime culpa labore distinctio corporis,
				aspernatur, quia inventore, a quibusdam officia dolores iusto totam ut
				eveniet voluptates placeat? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Blanditiis corporis, mollitia deserunt tempora libero
				porro maiores laboriosam voluptate natus adipisci fugit esse distinctio
				ut quidem architecto vero sit voluptatum ratione? Lorem ipsum dolor sit
				amet consectetur, adipisicing elit. Ut totam, tenetur dolor illo quod
				laudantium laborum praesentium nemo possimus eligendi at asperiores est
				quisquam cum quia consequuntur deserunt repudiandae harum! Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Possimus assumenda
				consequatur tenetur totam dignissimos autem atque hic perspiciatis eius
				expedita vero saepe cum, ad, mollitia, ipsa consequuntur. Iure,
				mollitia? Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Excepturi consectetur veritatis debitis laudantium dolore eaque in
				consequatur illum fugiat laboriosam nobis velit nisi dolorem eligendi
				voluptatem officiis, id saepe expedita.
			</p>
		</Box>
	);
}

export default MainContent;
