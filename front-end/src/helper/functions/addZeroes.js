import fixPrice from './fixPrice';

const addZeroes = (el) => {
  if (el.toString().split('.').length < 2 || el.toString().split('.')[1].length <= 2) {
    // https://stackoverflow.com/questions/24038971/add-00-tofixed-only-if-number-has-less-than-two-decimal-places
    return fixPrice(el.toFixed(2));
  }
};

export default addZeroes;
