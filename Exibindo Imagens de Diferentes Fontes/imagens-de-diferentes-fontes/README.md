
Exibindo Imagens em Diferentes Formatos em React Native

Este exemplo demonstra como exibir imagens em um aplicativo React Native a partir de diferentes fontes:
uma imagem local, uma imagem remota via URL e uma imagem codificada em base64.

Objetivo

O objetivo deste código é:
- Exibir imagens no aplicativo utilizando três fontes diferentes.
- Mostrar como usar imagens locais, imagens de uma URL externa e imagens embutidas em base64.

- Estrutura do Código

O código cria um componente funcional chamado `DisplayAnImage`, que exibe três imagens com estilos personalizados. 
As imagens vêm de fontes diferentes:
1. Uma imagem local embutida no projeto.
2. Uma imagem carregada de uma URL remota.
3. Uma imagem codificada em base64.

Explicação do Código

View: O componente View é usado para envolver as imagens e garantir que elas sejam dispostas corretamente na tela.
Imagens:
Imagem Local: A primeira imagem é carregada localmente, usando o require() para referenciar o arquivo da imagem dentro do projeto.
Imagem Remota: A segunda imagem é carregada a partir de uma URL externa, usando o formato {uri: 'URL'}.
Imagem Base64: A terceira imagem é codificada diretamente em base64 e embutida no código. 
Esse formato é útil quando não queremos depender de URLs externas ou de arquivos de imagem separados.
Estilos: As imagens têm estilos aplicados para definir o tamanho (50x50), o que pode ser facilmente modificado conforme necessário.

Resultados Esperados

Após executar este código, o aplicativo exibirá três imagens na tela:

Uma imagem local, carregada diretamente do diretório do projeto.
Uma imagem remota, carregada a partir de uma URL.
Uma imagem codificada em base64, que é embutida diretamente no código.
Essas imagens serão dispostas de forma vertical, uma abaixo da outra, com o mesmo tamanho de 50x50 pixels.



![image](https://github.com/user-attachments/assets/c437fb4a-54cf-4172-ae62-34a76b94f1a3)

![image](https://github.com/user-attachments/assets/8ec2ad27-02d3-4874-a407-53936dc6f923)

