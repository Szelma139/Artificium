import { ReactNode } from 'react';

export const ButtonGroupRow = ({children}: PropType) => {
    return (
        <div className="flex flex-row justify-end gap-6">
            {children}
            </div>
        )
}

type PropType = {
    children?: ReactNode
}
