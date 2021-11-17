export function formatSaveAndRenderPrice(price) {
  return String(price).replace(/\./g, ',');
}

export function formatManipulatePrice(price) {
  return String(price).replace(/,/g, '.');
}
