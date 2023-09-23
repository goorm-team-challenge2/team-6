import {Form} from '@goorm-dev/gds-challenge';
import Modal21 from "@/components/Modal/Modal2Form/Modal2-1";
import Modal22 from "@/components/Modal/Modal2Form/Modal2-2";
import Title from "@/components/Modal/Title";


export default function Modal2({page}){

    return (
        <div style={{ display: `${page === 2 ? 'block' : 'none'}` }}>
            <Title title="구름 서비스 이용 경험을 알려주세요." subTitle="더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요."/>
            <Form.Group className="modal2__group">
                <Modal21/>
                <Modal22/>
            </Form.Group>
        </div>
    );
}
