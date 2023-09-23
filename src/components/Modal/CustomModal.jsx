import { Button, Modal } from '@goorm-dev/gds-challenge';

const CustomModal = ({ isOpen, toggle }) => {
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
				<Modal.Header toggle={toggle}>헤더</Modal.Header>
				<Modal.Body>컨텐츠를 넣어주세요.</Modal.Body>
				<Modal.Footer>
					<Button>다음</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CustomModal;
