
interface Props {
    type?: string,
    name?: string,
    placeholder?: string,
    setName: (val: string) => void,

    className?: string;
}

function Input( props: Props ) {
    const {type,name,placeholder,setName,className} = props

    return (
        <>
            <input placeholder={placeholder} className={`input font-normal placeholder:font-normal ${className}`} name={name} type={type} onChange={(e) =>{
                setName(e.target.value)
            }}/>
        </>
    )
}

export default Input
