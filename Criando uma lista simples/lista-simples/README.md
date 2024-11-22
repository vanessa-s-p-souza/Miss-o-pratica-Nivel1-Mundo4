Lista simples 

Exemplo de Uso do FlatList em React Native

Este exemplo demonstra como utilizar o componente `FlatList` do React Native para renderizar uma lista de dados de forma eficiente e otimizada. 
O `FlatList` é ideal para exibir listas grandes e dinâmicas em um aplicativo móvel, permitindo que a rolagem de elementos seja feita de forma fluida e rápida.

Objetivo

O objetivo deste código é:
- Demonstrar como exibir uma lista simples de itens utilizando o componente `FlatList`.
- Ensinar como personalizar a renderização de itens de uma lista, aplicando estilos ao texto.

- Estrutura do Código

O código cria um componente funcional chamado `FlatListBasics`, que exibe uma lista de nomes utilizando o `FlatList`. 
Cada item da lista é renderizado como um componente `Text` com um estilo personalizado.

Explicação do Código
FlatList:

O componente FlatList é usado para renderizar a lista de itens. Ele é mais eficiente que o ScrollView quando se trata de listas grandes, 
pois ele carrega dinamicamente apenas os itens visíveis na tela.
A propriedade data recebe um array de objetos que contêm os itens da lista. Cada item deve ter uma chave (key) para garantir que cada elemento seja único.
A propriedade renderItem define como cada item será renderizado. No caso, estamos renderizando um componente Text com o valor de key de cada item.

Estilos:

O estilo container é usado para aplicar espaçamento superior e garantir que a lista ocupe toda a tela.
O estilo item define a aparência de cada item na lista, com padding, tamanho de fonte e altura.
Resultados Esperados
Após executar este código, o aplicativo exibirá uma lista rolável de nomes. Cada nome será exibido em um item de lista com o estilo definido no código. 
A lista será renderizada de forma eficiente, permitindo rolagem suave e renderização apenas dos itens visíveis.

Como o Componente se Comporta

A lista de nomes é exibida de forma vertical.
Cada item da lista é um nome, e o estilo é aplicado a cada nome, com um espaço de 10 pixels ao redor do texto e uma altura fixa de 44 pixels para cada item.
O layout se ajusta automaticamente conforme o número de itens na lista.


![image](https://github.com/user-attachments/assets/457208fe-c647-45f3-aaa2-0c18bc7527a2)

![image](https://github.com/user-attachments/assets/04f3622a-847b-43de-bf78-eb1703871899)

