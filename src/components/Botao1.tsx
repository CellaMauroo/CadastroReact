interface Botao1Props{
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao1(props: Botao1Props){
    return(
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-gray-400 to-gray-700
        text-white rounded-md px-4 py-2 
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}