export default function redirectUser(role, history) {
  switch (role) {
  case 'customer':
    history.push('/customer/products');
    break;
  case 'seller':
    history.push('/seller/orders');
    break;
  case 'administrator':
    history.push('/admin/manage');
    break;
  default:
    history.push('/');
    break;
  }
}
