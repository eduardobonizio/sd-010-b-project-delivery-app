const STATUS_CREATED = 201;
const STATUS_BAD_REQUEST = 400;

const SALE_PATH = '/sale';

const SALE_VALID = {
  user_id: 8,
  seller_id: 4,
  total_price: 20,
  delivery_address: 'address',
  delivery_number: 1,
};

const SALE_VALID_RETURNED_VALUE = {
  user_id: 8,
  seller_id: 4,
  total_price: 20,
  delivery_address: 'address',
  delivery_number: 1,
  sale_date: '2021-11-10 20:00:00',
  status: 'pending'
};

const SALE_MISSING_USER_ID = {
  seller_id: 4,
  total_price: 20,
  delivery_address: 'address',
  delivery_number: 1,
};
const SALE_MISSING_SELLER_ID = {
  user_id: 8,
  total_price: 20,
  delivery_address: 'address',
  delivery_number: 1,
};
const SALE_MISSING_TOTAL_PRICE = {
  user_id: 8,
  seller_id: 4,
  delivery_address: 'address',
  delivery_number: 1,
};
const SALE_MISSING_DELIVERY_ADDRESS = {
  user_id: 8,
  seller_id: 4,
  total_price: 20,
  delivery_number: 1,
};
const SALE_MISSING_DELIVERY_NUMBER = {
  user_id: 8,
  seller_id: 4,
  total_price: 20,
  delivery_address: 'address',
};

const SALE_UNAUTHORIZED_KEY_SALE_DATE = {
  user_id: 8,
  seller_id: 4,
  total_price: 20,
  delivery_address: 'address',
  delivery_number: 1,
  sale_date: 'something'
};

const SALE_UNAUTHORIZED_KEY_STATUS = {
  user_id: 8,
  seller_id: 4,
  total_price: 20,
  delivery_address: 'address',
  delivery_number: 1,
  status: 'something'
};

module.exports = {
  SALE_PATH,
  SALE_VALID,
  SALE_VALID_RETURNED_VALUE,
  STATUS_CREATED,
  STATUS_BAD_REQUEST,
  SALE_MISSING_USER_ID,
  SALE_MISSING_SELLER_ID,
  SALE_MISSING_TOTAL_PRICE,
  SALE_MISSING_DELIVERY_ADDRESS,
  SALE_MISSING_DELIVERY_NUMBER,
  SALE_UNAUTHORIZED_KEY_SALE_DATE,
  SALE_UNAUTHORIZED_KEY_STATUS,
}