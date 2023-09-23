import React from 'react';

const Participant = () => {
	return (
		<div style={{
			width: '100%',
			height: '100%',
			paddingLeft: '24px',
			paddingRight: '24px',
			paddingTop: '16px',
			paddingBottom: '16px',
			background: 'white',
			justifyContent: 'flex-start',
			alignItems: 'center',
			gap: '8px',
			display: 'inline-flex',
		}}>
			<div style={{
				flex: '1 1 0',
				color: '#2B2D36',
				fontSize: '16px',
				fontWeight: '500',
				lineHeight: '24px',
				wordWrap: 'break-word',
			}}>참여자 1. 김태풍</div>
		</div>
	);
};

export default Participant;
