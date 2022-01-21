import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function SocialLink() {
	return (
		<div className='all_social_icons'>
			<FontAwesomeIcon
				icon={['fab', 'github']}
				transform='grow-6'
				className='social_icons'
			/>
			<FontAwesomeIcon
				icon={['fab', 'instagram']}
				transform='grow-6'
				className='social_icons'
			/>
			<FontAwesomeIcon
				icon={['fab', 'google-plus-g']}
				transform='grow-6'
				className='social_icons'
			/>
			<FontAwesomeIcon
				icon={['fab', 'twitter']}
				transform='grow-6'
				className='social_icons'
			/>
		</div>
	);
}

export default SocialLink;
