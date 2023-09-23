import React, { useState } from 'react';
import { Button, Modal } from '@goorm-dev/gds-challenge';
import Title from './Title';

const Form4 = ({ isOpen, toggle }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Button size="lg" onClick={toggle}>설문조사 참여하기</Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <Modal.Header toggle={toggle}></Modal.Header>
        <Modal.Body>
          <div className="content">
            <Title 
              title={[
                "구름톤 챌린지에", 
                <br key="break" />, 
                "전하고 싶은 말을 적어주세요."
              ]}
              subTitle="더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요." 
            />
          <textarea
              className="textarea"
              rows="4"
              style={{
                  resize: 'vertical',
                  width: '420px',
                  height: 'auto',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid #E1E1E8',
                  marginBottom: '16px'
              }}
              value={inputValue}
              onChange={handleInputChange}
              placeholder="ex.&#10;다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요.&#10;오프라인 과제가 다양했으면 좋겠어요."
          />

          </div>
        </Modal.Body>
        {/*Modal.Footer*/}
      </Modal>
    </>
  );
};

export default Form4;