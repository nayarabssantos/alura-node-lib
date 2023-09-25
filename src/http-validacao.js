import chalk from "chalk";

function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
};

async function checkStatus(listaURLs){
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url)
                return response.status;
            }catch(erro){
                return trataErro(erro)
            }
        })
    )
    return arrStatus;
};

function trataErro(erro){

    if (erro.code === 'ENOTFOUND'){
        return 'Página não encontrada'
    }else{
        return 'Ocorreu um erro'
    }
}

export default async function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await checkStatus(links);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto, 
        status: status[indice]
    }));
};

