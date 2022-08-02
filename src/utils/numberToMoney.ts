// convert float number in money
// ref.: https://stackoverflow.com/a/16233919/7059119
export function numberToMoney(value: number): string {
  if (!value) return 'R$ 0,00';
  if (typeof (value) !== 'number') return 'R$ 0,00';
  // create our number formatter.
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
}
