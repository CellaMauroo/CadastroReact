interface Botao2Props{
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao2(props: Botao2Props){
    return(
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-blue-400 to-blue-700
        text-white rounded-md px-4 py-2 
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}