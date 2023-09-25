
function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
};

async function checkStatus(listaURLs){
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            const response = await fetch(url)
            return response.status;
        })
    )
    return arrStatus;
};

export default async function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await checkStatus(links);
    return status;
};


//[gatinho salsicha](http://gatinhosalsicha.com.br/)