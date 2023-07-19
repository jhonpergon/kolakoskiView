# Kolakoski View

Esse é um projeto que gera e facilita a visualização da Sequência de Kolakoski, uma sequência infinita de números compostos por 1s e 2s. O projeto fornece uma interface simples onde você pode definir o tamanho da sequência a ser gerada e visualizar cada etapa de sua geração.


### Funcionamento

    - O projeto possui um botão "Iniciar" que, quando clicado, inicia a geração da sequência de Kolakoski.
    - A velocidade da geração é ajustável através da variável "velocidade" (em milissegundos).
    - A memória utilizada para gerar a sequência é exibida no elemento de ID "result1".
    - A sequência de geração, mostrando os números 1s e 2s gerados, é exibida no elemento de ID "result2".
    - O número de passos é definido pelo valor inserido no campo de ID "valor".
    - Os números da sequência são exibidos com cores distintas para facilitar a visualização.

### Interface

    - O botão "Iniciar" altera seu texto para "Em processo..." durante a geração da sequência.
    - Quando a geração é concluída, o botão "Iniciar" é alterado para "Recomeçar", permitindo reiniciar o processo.
    - Ao clicar no botão "Recomeçar", a página é recarregada para iniciar uma nova geração.
    - Após finalizada a geração dos números até a quantidade pedida, os números da sequência de Kolakoski são exibidos em animação animação por CSS para efeito visual.


### Licença

    MIT License

