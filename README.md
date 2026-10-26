### Como rodar o projeto

1. Clone o projeto na máquina
2. Instale as dependências do projeto com PNPM na versão 10.29.3
3. Rode o comando "pnpm generate:env" para gerar o .env e substitua os campos pelas credenciais enviadas no privado
4. Importe o arquivo json no postman para fazer testes/requisições [postman/AEIG-API.postman.json], o curl das requisições também estão disponíveis em [postman/aeig-api.curl.md]
5. Rode a aplicação no terminal usando "pnpm dev"

Obs.: Realizei esse teste com um db online (PostgreSQL) que ficará disponível até 30/10


### Validação da função calcularJuros

Você pode rodar o comando "pnpm calcular-juros" no terminal para ver os resultados ou acessar o arquivo BUGS.md


### Principais decisões
Decidi realizar o teste com Express.js pela agilidade e fluidez que o Framework traz, decidi usar mvc como pattern para organizar e estruturar o projeto, acredito que ficou bem dinâmico, organizado e de fácil manutenção.

Falta algumas funcionalidades como gerar a cobrança com o mês X,Y,Z, algumas query para consulta e talvez validações mais estruturadas e rigorosas.

Usei IA para me ajudar com o router, querys no db, resolução de bugs, algumas validações incluindo do CPF e pesquisa/dúvida com sintaxe, métodos, etc.
