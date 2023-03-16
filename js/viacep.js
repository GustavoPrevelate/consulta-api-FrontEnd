'use strict'


export const pesquisarCep = async (cep) => {
    
    //Puxa o link da minha API(VIACEP) passando o CEP como parametro de pesquisa das informações do JSON
    const url = `https://viacep.com.br/ws/${cep}/json/`
    
    //Puxa as informações do URL
    const response = await fetch(url)

    //Faz um response da API
    const data = await response.json() 

    //Retorna as informações do JSON(Municipio,Estado,Bairro,Cidade e Logradouro)
    return {
        municipio: data.localidade,
        estado: data.uf,
        bairro: data.bairro,
        cidade: data.cidade,
        logradouro: data.logradouro
    }
}