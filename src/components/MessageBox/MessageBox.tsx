import {ReactNode} from 'react'
import {Modal} from "../../atoms/Modals/Modal";
import { Button } from '../../atoms/Buttons/Button';

type PropType = {
    text?: string;
};

type TextProps = {
    text: string
}
const HeaderText = ({
    text = "Confirm Action"
} : TextProps) => {
    return (
        <h1 style={
            {
                color: "#FFFFFF",
                fontSize: "24px"
            }
        }>
            {text} </h1>
    )
}


const MessageBoxTopRow = ({children}) => {
    return (
        <div className="flex flex-row items-center justify-between">
            {children} </div>
    );
}

export const MessageBox = ({
    text = "Are you sure you want to proceed with this action ?"
} : TextProps) => {
    return (
        <Modal>
            <MessageBoxTopRow>
                <HeaderText text="Confirm Action"/>
                <CloseButton/>
            </MessageBoxTopRow>
            <p style={
                {
                    color: "#9B9C9E",
                    fontSize: "16px"
                }
            }>
                {text} </p>
                <ButtonGroup>             
                <button style={
                    {
                        color: "gray",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "12px"
                    }
                }>
                    Cancel
                </button>
               <Button text="Proceed"/>
                </ButtonGroup>
        </Modal>
    );
};

const ButtonGroup = ({ children }) => {
return (
    <div className="flex flex-row justify-end gap-6">
        {children}
        </div>
)
}
const CloseButton = () => {
    return (
        <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    )
}
