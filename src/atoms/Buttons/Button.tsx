import { ReactNode } from 'react'

type PropType = { 
    text?: ReactNode
}
export const Button = ({text}: PropType) => {
  return (
<button className="opacity-90 hover:opacity-100 color-black px-6 py-3 bg-steem-green-500 rounded-xl font-semibold">
    {text}
</button>
  )
}


