// Form3Btn Component
import React from 'react';

const Form3Btn = (props) => {
	const isSelected = props.value === props.selectedButton;
	return (
		<button
			onClick={() => props.handleClick(props.value)}
			style={{
				width: '100%',
				height: '100%',
				padding: '9px 16px',
				background: isSelected ? 'rgba(80, 148, 250, 0.24)' : 'rgba(205, 206, 214, 0.08)',
				borderRadius: '8px',
				border: isSelected ? '1px solid #5094FA' : '1px solid #E1E1E8',
				display: 'inline-flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				gap: '4px',
				cursor: 'pointer',
				fontSize: '16px',
				marginBottom: props.isLast ? '0' : '16px',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					gap: '8px',
					textAlign: 'center',
				}}
			>
				<div
					style={{
						textAlign: 'center',
						color: isSelected ? '#1D6CE0' : '#525463',
						fontSize: '14px',
						fontWeight: '500',
						lineHeight: '22px',
						wordWrap: 'break-word',
					}}
				>
					{props.option}
				</div>
			</div>
		</button>
	);
};

export default Form3Btn;