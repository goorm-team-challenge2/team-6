import {Button, Form, Label} from "@goorm-dev/gds-challenge";
import {createContext, useState} from "react";
import Modal221 from "@/components/Modal/Modal2Form/Modal2-2-1";
import Modal222 from "@/components/Modal/Modal2Form/Modal2-2-2";

import styles from '../Modal2.scss';

export default function Modal22() {
    const [yesCheck, setYesCheck] = useState(false);
    const [noCheck, setNoCheck] = useState(false);

    const clickYesEvent = () => {
        if (noCheck === true) {
            setNoCheck(false)
        }

        if (yesCheck === true) {
            setYesCheck(false)
        } else {
            setYesCheck(true)
        }
    }

    const clickNoEvent = () => {
        if (yesCheck === true) {
            setYesCheck(false)
        }
        if (noCheck === true) {
            setNoCheck(false)
        } else {
            setNoCheck(true)
        }
    }

    return (
        <>
            <Form.Group>
                <Label required className="Modal2__form__title">
                    2. 구름 서비스를 사용해보신 적이 있나요?
                </Label>
                <div className="modal2__form__buttonBox">
                    <Button className="modal2__form__button" onClick={clickYesEvent} active={yesCheck}
                            color="basic">예</Button>
                    <Button className="modal2__form__button" onClick={clickNoEvent} active={noCheck}
                            color="basic">아니요</Button>
                </div>
            </Form.Group>
            {yesCheck && (
                <>
                    <Modal221/>
                    <Modal222/>
                </>
            )}
        </>
    )
}