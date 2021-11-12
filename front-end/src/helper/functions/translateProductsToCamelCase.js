const translateProductsToCamelCase = (el) => ({
  id: el.id, name: el.name, price: el.price, url: el.url_image,
});

export default translateProductsToCamelCase;
