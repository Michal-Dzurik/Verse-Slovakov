
interface Props {
    type?: string,
    name?: string,
    placeholder?: string,
    setName: (val: string) => void,
    required?: boolean;
    className?: string;
}

function Input( {type,name,placeholder,setName,required,className}: Props ) {
    return (
        <>
            <input required={required} placeholder={placeholder} className={`input font-normal placeholder:font-normal ${className}`} name={name} type={type} onChange={(e) =>{
                setName(e.target.value)
            }}/>
        </>
    )
}

export default Input
