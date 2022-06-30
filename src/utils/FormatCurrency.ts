export function FormatCurrency(amount: string) {
  const stringToNumber = Number(amount);
  const formattedCurrency = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'BRL'
  }).format(stringToNumber);
  return formattedCurrency;
}