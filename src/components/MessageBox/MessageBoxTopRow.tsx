import { ReactNode } from 'react'


export const MessageBoxTopRow = ({children}:PropType) => {
    return (
        <div className="flex flex-row items-center justify-between">
            {children} </div>
    );
}

type PropType = { 
    children?: ReactNode;
}