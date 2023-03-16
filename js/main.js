'use strict'

//Importa o link da API utilizada
import {pesquisarCepPost} from "./postmon.js"

//Como capturar o evento sair do campo

const preencherFormulario = async () => {

    //Puxa as informações com base no CEP da API
    const cepDigitado = document.getElementById('cep').value

    //Faz um response para pegar as informações do JSON com base no CEP
    const cep = await pesquisarCepPost(cepDigitado)
    
    //Pega o id dos elementos(Endereço/Bairro/Cidade/Estado) e puxa com base nas informações do JSON da API
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado

}

//Ao receber o CEP no InputBox ele faz a requisição das informações do JSON
document.getElementById('cep').addEventListener('blur', preencherFormulario)