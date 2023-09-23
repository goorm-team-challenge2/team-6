import {Form, Label, TextArea} from "@goorm-dev/gds-challenge";

export default function Modal222() {
    return (
        <Form.Group>
            <Label required className="Modal2__form__title__sub">
                2-2. 해당 서비스를 사용하게 된 이유는 무엇인가요?
            </Label>
            <TextArea invalid={false} rows={4} resize="vertical" block placeholder="ex. 구름톤 챌린지에 참여하기 위해 레벨 서비스를 사용해봤습니다."/>
        </Form.Group>
    )
}