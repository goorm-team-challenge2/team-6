import {Button, Label, Input, Form} from "@goorm-dev/gds-challenge";
import {useState} from "react";

import styles from '../Modal2.scss';
import Modal221CheckBoxList from "@/components/Modal/Modal2Form/Modal221CheckBoxList";

export default function Modal221() {

    return (
        <Form.Group>
			<Label required className={styles.Modal2__form__title__sub}>
                2-1. 사용 경험이 있는 서비스를 선택해주세요. (복수 선택 가능)
            </Label>
            <Modal221CheckBoxList/>
        </Form.Group>
    )
}