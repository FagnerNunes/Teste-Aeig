## Registrar associado
curl --location 'localhost:3000/associados' \
--header 'Content-Type: application/json' \
--data '{
    "nome": "Fagner",
    "cpf": "786.948.300-19",
    "valor_mensalidade": 92.30
}'


## Registrar cobrança
curl --location 'localhost:3000/cobrancas' \
--header 'Content-Type: application/json' \
--data '{
    "cpf": "786.948.300-19"
}'


## Ver cobrança
curl --location 'localhost:3000/cobrancas/5cf910a6-5fd8-402d-a52a-c08eccff4b24'


## Webhook para atualizar cobrança
curl --location 'localhost:3000/webhooks/pagamento' \
--header 'Content-Type: application/json' \
--data '{
  "id_evento": "evt_000123",
  "nosso_numero": "5cf910a6-5fd8-402d-a52a-c08eccff4b24",
  "data_pagamento": "2026-10-15"
}'