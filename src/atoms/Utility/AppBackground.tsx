import  { ReactNode } from 'react'

type PropType = {
    children?: ReactNode
}
export const AppBackground = ({children}: PropType) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-backgroundGray">
            {children}
            </div>
  )
}
