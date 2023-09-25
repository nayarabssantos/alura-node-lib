import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        
        const encoding = 'UTF-8';
        const texto = await fs.promises
          .readFile(caminhoDoArquivo, encoding)
          console.log(chalk.green(texto))
    }
    catch(erro){
        trataErro(erro);
    }
}

/*
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'UTF-8';
    fs.promises
      .readFile(caminhoDoArquivo, encoding)
      .then((texto) => console.log(chalk.green(texto)))
      .catch((erro) => trataErro(erro))
}
*/

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');