import Entrada from "./Entrada";
import { useState } from "react"
import Cliente from "../core/Cliente"
import Botao1 from "./Botao1";
import Botao from "./Botao";
import Botao2 from "./Botao2";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void 
    cancelado?: () => void
}

export default function Formulario (props: FormularioProps){
    const id =props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div className="bg-gray-200 rounded-xl p-5">
            { id ? ( 
                <Entrada
                somenteLeitura 
                texto="Codigo" 
                valor={id}
                className="mb-4"
                />
            ) : false }
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
                />
            <Entrada 
                texto="Idade" 
                tipo="number" valor={idade}
                valorMudou={setIdade}
                />
                <div className="mt-7 flex justify-end">
                    <Botao2 className="mr-2" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao2>
                    <Botao1 onClick={props.cancelado}>
                        Cancelar
                    </Botao1>
                </div>
        </div>
    )
}