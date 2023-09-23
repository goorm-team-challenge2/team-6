// Form3 Component
import React, { useState } from 'react';
import Title from './Title';
import { Input } from '@goorm-dev/gds-challenge';
import Form3Btn from './Form3Btn';

const Form3 = ({page}) => {
	const [selectedButton, setSelectedButton] = useState(null);

	const handleClick = (value) => {
		setSelectedButton(value);
	};

	return (
		<div style={{ display: `${page === 3 ? 'block' : 'none'}` }}>
			<Title
				title={[
					'오프라인 팀 챌린지에',
					<br />,
					'가장 기대하는 점은 무엇인가요?',
				]}
				subTitle="더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요."
			/>
			<Form3Btn
				option="1. (예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행"
				value={1}
				selectedButton={selectedButton}
				handleClick={handleClick}
			/>
			<Form3Btn
				option="2."
				value={2}
				selectedButton={selectedButton}
				handleClick={handleClick}
			/>
			<Form3Btn
				option="3."
				value={3}
				selectedButton={selectedButton}
				handleClick={handleClick}
			/>
			<Form3Btn
				option="4."
				value={4}
				selectedButton={selectedButton}
				handleClick={handleClick}
				isLast={true}
			/>
		</div>
	);
};

export default Form3;
