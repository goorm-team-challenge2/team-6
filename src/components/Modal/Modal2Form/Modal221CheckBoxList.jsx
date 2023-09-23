import {useState} from "react";
import {Input, Label} from "@goorm-dev/gds-challenge";

export default function Modal221CheckBoxList() {
    const initialCheckboxes = [
        {id: 1, label: '구름EDU', isChecked: false},
        {id: 2, label: '구름LEVEL', isChecked: false},
        {id: 3, label: '구름DEVTH', isChecked: false},
        {id: 4, label: '구름IDE', isChecked: false},
        {id: 5, label: '구름EXP', isChecked: false},
    ];

    const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id
                ? {...checkbox, isChecked: !checkbox.isChecked}
                : checkbox
        );

        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="modal2__form__check">
            {checkboxes.map((checkbox) => (
                <Label key={checkbox.id} className="modal2__form__checkBox">
                    <Input
                        type="checkbox"
                        label={checkbox.label}
                        checked={checkbox.isChecked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                </Label>
            ))}
        </div>
    );
}