export function formatSaveAndRenderPrice(price) {
  return String(price).replace(/\./g, ',');
}

export function formatManipulatePrice(price) {
  return String(price).replace(/,/g, '.');
}

export function formatedSales(sale) {
  const subTotalPrice = (sale.quantity * sale.price).toFixed(2);
  const format = {
    productId: sale.id,
    name: sale.name,
    quantity: sale.quantity,
    unitPrice: formatSaveAndRenderPrice(sale.price),
    subTotal: formatSaveAndRenderPrice(subTotalPrice),
  };

  return format;
}

export function formatedDate(date) {
  return (`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`);
}
