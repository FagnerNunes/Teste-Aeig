/**
 * Valida um CPF e retorna apenas os números limpos se for válido, ou null se for inválido.
 * Aceita string ou number, com ou sem pontuação.
 */
export default function validarEFormatarCPF(cpfInput: string | number): string | null {
  // Converte para string e remove tudo o que não for número
  const cpf = String(cpfInput).replace(/\D/g, '');

  // Verifica se o CPF possui exatamente 11 dígitos
  if (cpf.length !== 11) {
    return null;
  }

  // Elimina CPFs com todos os dígitos iguais conhecidos como inválidos (ex: 000.000.000-00)
  if (/^(\d)\1{10}$/.test(cpf)) {
    return null;
  }

  // Validação do 1º dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i), 10) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9), 10)) {
    return null;
  }

  // Validação do 2º dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i), 10) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10), 10)) {
    return null;
  }

  // Se passou em todas as validações, retorna apenas os 11 números
  return cpf.toString();
}