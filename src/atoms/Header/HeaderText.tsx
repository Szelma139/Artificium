
export const HeaderText = ({
        text = "Confirm Action"
    } : PropType) => {
        return (
            <h1 className="text-white text-2xl">
                {text} </h1>
        )
    }
    
type PropType = {
    text: string;
}