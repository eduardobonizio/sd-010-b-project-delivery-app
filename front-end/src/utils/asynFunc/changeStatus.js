import { fetchSetStatusSale } from '../../services/saleAPI';

const changeStatusFunc = async (status) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await fetchSetStatusSale({ id: user.id, status });

  console.log(res);
};

export default changeStatusFunc;
