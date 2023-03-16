'use strict'

export const pesquisarCepPost = async (cep) => {

    //Puxa o link da minha API(POSTMON) passando o CEP como parametro de pesquisa das informações do JSON
    const url = `https://api.postmon.com.br/v1/cep/${cep}`

    //Puxa as informações do URL
    const response = await fetch(url)

    //Faz um response da API
    const data = await response.json() 

    //Retorna as informações do JSON(Municipio,Estado,Bairro,Cidade e Logradouro)
    return {
        municipio: data.cidade,
        estado: data.estado,
        bairro: data.bairro,
        logradouro: data.logradouro
    }
}