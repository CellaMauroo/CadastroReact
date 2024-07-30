interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
    
}

export default function Entrada (props: EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input className={`
            bg-gray-100 border border-purple-500 rounded-lg
            focus:outline-none
            px-4 py-2 
            ${props.somenteLeitura ? '' : 'focus:bg-white'}
            `} 
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}