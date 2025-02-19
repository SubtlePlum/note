# modal

```typescript
// 모달창 버튼 페이지
import ModalPage from "./ModalPage";
import { useState } from "react";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {showModal === true ? (
        <ModalPage showModal={showModal} closeModal={closeModal} />
      ) : null}
    </>
  );
}

// 모달창 오픈된 페이지
import styled from "styled-components";

export const ModalPage = ({ showModal, closeModal, children }) => {
  return (
    <>
      {showModal ? (
        <StyledModalBackground onClick={closeModal}>
          <StyledModalContainer onClick={(e) => e.stopPropagation()}>
            <StyledModal>{children}</StyledModal>
          </StyledModalContainer>
        </StyledModalBackground>
      ) : null}
    </>
  );
};

const StyledModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
  cursor: auto;
`;

const StyledModal = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
`;
```
