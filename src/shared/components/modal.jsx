import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from "styled-components";

/*
function UserProfile() {
   const [modalVisible, setModalVisible] = useState(false);

   return (
      <div class="user-profile">
         <h1>Brad's Profile</h1>
         <button onClick={() => setModalVisible(true)}>Remove User</button>
         <Modal visible={modalVisible} handleVisible={setModalVisible} />
      </div>
   )
}

const Modal = ({ visible, handleVisible }) => {
   return visible && createPortal(
      <>
         <div class="modal">
            <p>Are you sure...</p>
            <button onClick={() => console.log("yes")}>Yes</button>
            <button onClick={() => handleVisible(false)} >No</button>
         </div>
      </>
      ,
      document.getElementById('modal-root'))
}
*/

const Portal = ({ children }) => {
   const modalRoot = document.getElementById("modal");
   const el = document.createElement("div");

   useEffect(() => {
      modalRoot.appendChild(el);
   }, []);

   useEffect(() => {
      return () => modalRoot.removeChild(el);;
   });
   return createPortal(children, el);
};

const Modal = ({ children, toggle, open = false }) => {
   return open &&
      <Portal>
         <ModalWrapper>
            <ModalCard>
               <CloseButton onClick={toggle}>
                  <img src="https:icon.now.sh/x/ff0000" alt="close" />
               </CloseButton>
               {children}
            </ModalCard>
            <Background onClick={toggle} />
         </ModalWrapper>
      </Portal>
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  &:hover {    
    cursor: pointer;
  }`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;
