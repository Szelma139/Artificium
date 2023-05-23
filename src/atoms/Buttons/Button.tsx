import { ReactNode } from 'react'

type PropType = { 
    text?: ReactNode,
    textColor?: string;
    backgroundColor?: string
}
export const Button = ({text, textColor = "text-black", backgroundColor = "bg-steem-green-500"}: PropType) => {
  return (
<button className={`opacity-90 hover:opacity-100 ${textColor} px-6 py-3 ${backgroundColor} rounded-xl font-semibold`}>
    {text}
</button>
  )
}

Button.defaultProps = {
  textColor: "text-black",
  backgroundColor: "bg-steem-green-500"
}
