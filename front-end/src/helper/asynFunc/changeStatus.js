import { fetchSetStatusSale } from '../../services/salesAPI';

const changeStatusFunc = async (status) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const res = await fetchSetStatusSale({ id: user.id, status });

  if (res.message) {
    console.log(res);
    // Apagar isso depois...
    setAllOrders([...arrayExemplo]);
  } else {
    setAllOrders([...res]);
  }
};

export default changeStatusFunc;
