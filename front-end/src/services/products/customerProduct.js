// import { getAll } from '../httpService';

const image = 'Imagem produto';

const array = [
  {
    _id: '618d673b97069d03e848fe00',
    name: 'Skol',
    id: 1,
    price: 5.5,
    url_image: image,
  },
  {
    _id: '618d67fb97069d03e848fe01',
    name: 'Brama',
    id: 2,
    price: 6.5,
    url_image: image,
  },
  {
    _id: '618d688097069d03e848fe02',
    name: 'Coca-Cola',
    id: 3,
    price: 8.5,
    url_image: image,
  },
  {
    _id: '618d689a97069d03e848fe03',
    name: 'Guaraná',
    id: 4,
    price: 7.5,
    url_image: image,
  },
  {
    _id: '618d68ce97069d03e848fe04',
    name: 'Antartica Pilsen',
    id: 5,
    price: 3.49,
    url_image: image,
  },
  {
    _id: '618d68ea97069d03e848fe05',
    name: 'Heneken',
    id: 6,
    price: 7.49,
    url_image: image,
  },
  {
    _id: '618d690d97069d03e848fe06',
    name: 'Becks',
    id: 7,
    price: 4.49,
    url_image: image,
  },
  {
    _id: '618d692297069d03e848fe07',
    name: 'Soda',
    id: 8,
    price: 4.49,
    url_image: image,
  },
  {
    _id: '618d693197069d03e848fe08',
    name: 'Dolly',
    id: 9,
    price: 3.49,
    url_image: image,
  },
  {
    _id: '618d695897069d03e848fe09',
    name: 'Brahma Duplo Malte',
    id: 10,
    price: 3.49,
    url_image: image,
  },
  {
    _id: '618d697e97069d03e848fe0a',
    name: 'Fanta laranja',
    id: 11,
    price: 6.49,
    url_image: image,
  },
];

async function apiGetAllProducts() {
  try {
    // const allProducts = await getAll('/customer/products');
    return array;
  } catch (error) {
    console.log(error);
  }
}

export default apiGetAllProducts;
