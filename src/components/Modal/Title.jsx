import React from 'react';

const Title = (props) => {
	return (
		<div
			style={{
				marginBottom: '32px', // Added this line
			}}
		>
			<div
				style={{
					color: '#2B2D36',
					fontSize: '20px',
					fontWeight: '700',
					lineHeight: '30px',
					wordWrap: 'break-word',
					marginBottom: '5px',
				}}
			>
				{props.title}
			</div>
			<div
				style={{
					color: '#858899',
					fontSize: '12px',
					fontWeight: '400',
					lineHeight: '18px',
					wordWrap: 'break-word',
				}}
			>
				{props.subTitle}
			</div>
		</div>
	);
};

export default Title;
