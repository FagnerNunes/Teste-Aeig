### A função para calcular o juros estava com 2 erros principais.

1. O loop estava gerando valores incorretos, o cálculo deve ser feito com base no valor fixo.
2. Não havia condição para barrar caso não houvesse dias de atraso.

Caminho do arquivo corrigido (sem IA): [src/api/utils/calcularJuros.ts]

- Você pode rodar o comando "pnpm calcular-juros" no terminal para rodar a função, os resultados também estão logo abaixo


#### Resultados:
Datas: vencimento: 2026-10-05, pagamento: 2026-10-01
Valor inicial: 189.9
Dias de atraso: -4
Valor inicial: 189.9
Total: 189.90 

Datas: vencimento: 2026-10-05, pagamento: 2026-10-05
Valor inicial: 189.9
Dias de atraso: 0
Valor inicial: 189.9
Total: 189.90 

Datas: vencimento: 2026-10-05, pagamento: 2026-10-06
Valor inicial: 189.9
Dias de atraso: 1
Total: 193.76 

Datas: vencimento: 2026-10-05, pagamento: 2026-10-15
Valor inicial: 189.9
Dias de atraso: 10
Total: 194.32 

