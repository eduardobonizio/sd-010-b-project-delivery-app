const redirect = (roles) => {
  if (roles === 'customer') return '/customer/products';
  if (roles === 'seller') return '/seller/orders';
  if (roles === 'administrator') return '/admin/manage';
};

export default redirect;
