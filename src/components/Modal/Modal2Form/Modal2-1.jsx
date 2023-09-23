import {Button, Label, Form, Typography} from "@goorm-dev/gds-challenge";
import {useState} from "react";
import styles from '../Modal2.scss';

export default function Modal21() {

    const [yesCheck, setYesCheck] = useState(false);
    const [noCheck, setNoCheck] = useState(false);

    const clickYesEvent = () => {
        if(noCheck === true) {
            setNoCheck(false)
        }

        if(yesCheck === true) {
            setYesCheck(false)
        } else {
            setYesCheck(true)
        }
    }

    const clickNoEvent = () => {
        if(yesCheck === true) {
            setYesCheck(false)
        }
        if(noCheck === true) {
            setNoCheck(false)
        } else {
            setNoCheck(true)
        }
    }

    return (
        <Form.Group>
            <Label required className="Modal2__form__title">
                <Typography>1. SW 관련 학과를 전송하셨나요?</Typography>
            </Label>
            <div className="modal2__form__buttonBox">
                <Button className="modal2__form__button" onClick={clickYesEvent} active={yesCheck} color="basic">전공</Button>
                <Button className="modal2__form__button" onClick={clickNoEvent} active={noCheck} color="basic">비전공</Button>
            </div>
        </Form.Group>
    );
}