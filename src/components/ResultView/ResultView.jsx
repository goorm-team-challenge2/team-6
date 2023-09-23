import React from 'react';
import Participant from './Participant';

const ResultView = () => {
	return (
		<div
			style={{
				border: '1px solid #E8E8EE', // Add border
				borderRadius: '8px', // Add border radius
				overflow: 'hidden', // Ensure border radius applies to all child elements
			}}
		>
			<div
				style={{
					width: '100%',
					height: '100%',
					paddingLeft: '24px',
					paddingRight: '24px',
					paddingTop: '16px',
					paddingBottom: '16px',
					background: 'white',
					boxShadow: '0px -1px 0px #E8E8EE inset',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					gap: '10px',
					display: 'inline-flex',
				}}
			>
				<div
					style={{
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: '8px',
						display: 'inline-flex',
					}}
				>
					<div
						style={{
							color: '#2B2D36',
							fontSize: '16px',
							fontWeight: '500',
							lineHeight: '24px',
							wordWrap: 'break-word',
						}}
					>
						응답한 참여자
					</div>
					<div
						style={{
							color: '#5094FA',
							fontSize: '16px',
							fontWeight: '500',
							lineHeight: '24px',
							wordWrap: 'break-word',
						}}
					>
						1
					</div>
				</div>
			</div>
			<Participant />
		</div>
	);
};

export default ResultView;
