import { useState } from 'react';

import { Button, Modal } from '@goorm-dev/gds-challenge';
import Modal1 from "@/components/Modal/Info/Modal1";
import Modal2 from "@/components/Modal/Modal2";
import Form3 from "@/components/Modal/Form3";
import Form4 from "@/components/Modal/Form4";

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
				<Modal.Header toggle={toggle} />
				<Modal.Body>
					<Modal1 />
					<Modal2 />
					<Form3 />
					<Form4 />
				</Modal.Body>
				<Modal.Footer>
					<Button color="link" onClick={prevPage}>이전</Button>
					<Button onClick={nextPage}>다음</Button>
					<Button style={{display: `${page === 4 ? 'block' : 'none'}`}}> 제출하기</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CustomModal;
