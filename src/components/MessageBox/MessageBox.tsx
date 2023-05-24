import React, { useState } from 'react';

import { Modal } from "../../atoms/Modals/Modal";
import { Button } from "../../atoms/Buttons/Button";
import { HeaderText } from "../../atoms/Header/HeaderText";
import { MessageBoxTopRow } from "./MessageBoxTopRow";
import { ButtonGroupRow } from "../../atoms/ButtonGroups/ButtonGroupRow";

type TextProps = {
  text?: string;
};

export const useMessageBox = ({
  text = "Are you sure you want to proceed with this action ?",
}: TextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resolveCallback, setResolveCallback] = useState(null);

  const openMessageBox = () => {
    setIsOpen(true);

    return new Promise((resolve) => {
      setResolveCallback(() => resolve);
    });
  };

  const handleOkClick = () => {
    setIsOpen(false);
    resolveCallback(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
    resolveCallback(false);
  };

  const MessageBox = () => (
    <>
    {isOpen && ( <Modal>
      <MessageBoxTopRow>
        <HeaderText text="Confirm Action" />
        <CloseButton />
      </MessageBoxTopRow>
      <p
        style={{
          color: "#9B9C9E",
          fontSize: "16px",
        }}
      >
        {text}{" "}
      </p>
      <ButtonGroupRow>
        <Button
          text="Cancel"
          backgroundColor="transparent"
          textColor="text-gray-400"
        />
        <Button text="Proceed" />
      </ButtonGroupRow>
    </Modal>)}
    </>
    
  );
  return { openMessageBox, MessageBox };
};

const CloseButton = () => {
  return (
    <button
      type="button"
      className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span className="sr-only">Close menu</span>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};



//usage
// const MyComponent = () => {
//   const { openMessageBox, MessageBox } = useMessageBox();

//   const handleClick = async () => {
//     const result = await openMessageBox('Are you sure?');
//     console.log('User clicked:', result);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Show Message Box</button>
//       <MessageBox />
//     </div>
//   );
// };
/**
 * 
 * 
// 
    const { openMessageBox, MessageBox } = useMessageBox({ text: "Hello"});
    const handleClick = ()=> {
        openMessageBox();
        setTimeout(()=> console.log("dupcia"), 500);
    <AppBackground>
        <button onClick={handleClick}> KLIK</button>
          <MessageBox/>
    </AppBackground>import { useMessageBox } from "./components/MessageBox/MessageBox";
import { AppBackground } from "./atoms/Utility/AppBackground";
import "./index.css";


function App() {
    const { openMessageBox, MessageBox } = useMessageBox({ text: "Hello"});
    const handleClick = ()=> {
        openMessageBox();
        setTimeout(()=> console.log("dupcia"), 500);
    }
    return (
    <AppBackground>
        <button onClick={handleClick}> KLIK</button>
          <MessageBox/>
    </AppBackground>
    );
}

export default App;


*/
