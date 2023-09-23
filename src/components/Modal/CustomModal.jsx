import { useState } from 'react';

import { Button, Modal } from '@goorm-dev/gds-challenge';

const CustomModal = ({ isOpen, toggle }) => {
	const [page, setPage] = useState(1);

	const nextPage = () => {
		setPage(page + 1);
	};

	const prevPage = () => {
		setPage(page - 1);
	};

	return (
		<>
			<Button size="lg" onClick={toggle}>
				설문조사 참여하기
			</Button>
			<Modal
				isOpen={isOpen}
				toggle={toggle}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '32px',
				}}
			>
				<Modal.Header toggle={toggle}></Modal.Header>
				<Modal.Body>컨텐츠를 넣어주세요.</Modal.Body>
				<Modal.Footer>
					<Button>다음</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CustomModal;
