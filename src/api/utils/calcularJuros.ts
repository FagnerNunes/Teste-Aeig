// Deveria calcular o valor atualizado de uma cobrança:
// multa única de 2% + juros simples de 0,033% ao dia.
// Pagamento até o vencimento não tem multa nem juros.
function calcularValorAtualizado(
  valor: number,
  vencimento: string,
  dataPagamento: string,
): number {
  const venc = new Date(vencimento);
  const pag = new Date(dataPagamento);
  const diasAtraso = Math.floor((pag.getTime() - venc.getTime()) / 86400000);

  if (diasAtraso <= 0) {
    console.log(`Datas: vencimento: ${vencimento}, pagamento: ${dataPagamento}`);
    console.log(`Valor inicial: ${valor}`);
    console.log(`Dias de atraso: ${diasAtraso}`);
    console.log(`Valor inicial: ${valor}`);
    console.log(`Total: ${valor.toFixed(2)} \n`);
    return valor;
  }

  let multa = valor * 0.02;
  let jurosSimples = valor * 0.00033 * diasAtraso;
  let total = valor;

  total = total + jurosSimples + multa;

  console.log(`Datas: vencimento: ${vencimento}, pagamento: ${dataPagamento}`);
  console.log(`Valor inicial: ${valor}`);
  console.log(`Dias de atraso: ${diasAtraso}`);
  console.log(`Total: ${total.toFixed(2)} \n`);

  return total;
}

calcularValorAtualizado(189.9, "2026-10-05", "2026-10-01");
calcularValorAtualizado(189.9, "2026-10-05", "2026-10-05");
calcularValorAtualizado(189.9, "2026-10-05", "2026-10-06");
calcularValorAtualizado(189.9, "2026-10-05", "2026-10-15");
