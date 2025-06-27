export const formatNumberCurrency = (number: number) => {
  return number > 0 ? number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }) : 0;
}

export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
