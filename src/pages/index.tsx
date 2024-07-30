import { reportWebVitals } from "next/dist/build/templates/pages";
import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";



export default function Home () {
  
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect(obterTodos, [])
    
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        setVisivel('tabela')
      })

    }

    function clienteSelecionado(cliente: Cliente){
      setCliente(cliente)
      setVisivel('form')
    }

    async function clienteExcluido(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }

    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }
    
    function novoCliente(){
      setCliente(Cliente.vazio())
      setVisivel('form')
    }

  return (
    <div className={`
    flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white
    `}> 
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela'?( 
        <>
          <div className="flex justify-end">
            <Botao className="mb-3"
            onClick={novoCliente}>
              Novo Cliente 
            </Botao>
          </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
          />
        </>
        ) : (
          <Formulario 
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          
          />
        )}
        
      </Layout>
    </div>
  )
}