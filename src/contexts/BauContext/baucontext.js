import { createContext, useState } from "react";

export const BauContext = createContext({});

export const BauProvider = ({children}) => {
    const [itensBau,setItensBau]=useState([])   

    function addBau(id,img,nome,valor){
        const itens =[...itensBau];

        const produto = itens.find((product)=>product.id === id);

        if(!produto){
            itens.push({id:id, qtd:1, name:nome, preço:valor, caminho:img})
        }else{produto.qtd += 1;}
            
        setItensBau(itens)
        console.log(itens)
    }
    function removeBau(id){
        const itens =[...itensBau];
        const produto = itens.find((product)=>product.id === id);

        if (produto.qtd > 1){
            produto.qtd -= 1;
            setItensBau(itens)
        }else{
            const filtrarItens= itens.filter(product=> product.id !== id);
            setItensBau(filtrarItens)
        }
        
    }
    function limparBau(){
        setItensBau([])
    }

    return(
        <BauContext.Provider value={{itensBau, addBau, removeBau,limparBau}}>
            {children}
        </BauContext.Provider>
    )
}