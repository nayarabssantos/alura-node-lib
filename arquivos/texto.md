A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.

São geralmente recuperados a partir de um objeto [FileList](http://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](http://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](http://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](http://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](http://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).

[Teste de retorno 400](http://httpstat.us/404).
