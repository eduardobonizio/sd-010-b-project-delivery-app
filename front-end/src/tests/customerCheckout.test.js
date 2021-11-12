import React from 'react';
import CustomerCheckout from '../pages/CustomerCheckout';
import App from '../App';
import renderWithRouter from './renderWithRouter';
// import APICalls from './services/APICalls';

// TODO: Remove this and uncomment line 5
const APICalls = { getAllSellers: () => {} };

describe('Tests for Customer Checkout', () => {
  let store = {};

  const CUSTOMER_CART_KEY = 'customerCart';
  const PRODUCT_OBJ_ARRAY = [
    {id: 1, description: 'Skol Lata 250ml', quantity: 2, unitPrice: 2.20, subTotal: 4.40 },
  ];
  const CUSTOMER_CART_LENGHT = 1;
  const SELLERS_ARRAY = [
    {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller'
    },
    {
      id: 4,
      name: 'Matheus',
      email: 'matheus@seller.com',
      password: '123456',
      role: 'seller'
    },
  ]

  const getAllSellersMock = jest
    .spyOn(APICalls, 'getAllSellers')
    .mockResolvedValue(SELLERS_ARRAY);
  
  /* 
    SOURCE: https://javascript.plainenglish.io/testing-local-storage-with-testing-library-580f74e8805b
    AND https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests 
  */
  beforeEach(() => {
    // jest.spyOn(Storage.prototype, 'setItem'); // Test if works
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn((key) => store[key]),
        setItem: jest.fn((key, value) => store[key] = JSON.stringify(value))
      },
      writable: true
    });
  });

  describe('path', () => {
    it('should be at customer/checkout', () => {
      const { history, getByTestId } = renderWithRouter(<App />);
      history.push('/customer/checkout');
      expect(getByTestId('customer-checkout-page')).toBeInTheDocument();
    });
  });

  describe('localStorage', () => {
    it('should getItem once', () => {
      renderWithRouter(<App />);
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    });
    it('should be setted one time with customerCart at App if don\'t have a key', () => {
      renderWithRouter(<App />);
      store = {};
      const gotItem = window.localStorage.getItem(CUSTOMER_CART_KEY);
      window.localStorage.setItem(CUSTOMER_CART_KEY, []);
      
      expect(window.localStorage.getItem).toHaveBeenCalled();
      expect(gotItem).toBeFalsy();
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    describe('user product cart', () => {
      it('should have a \"Finalizar pedido\" title ', () => {
        const { getByRole } = renderWithRouter(<CustomerCheckout />);
        const userCartTitle = getByRole('heading', {
          level: 1,
          name: /finalizar pedido/i,
        });
        console.log(userCartTitle.type);
        expect(userCartTitle).toBeInTheDocument();
      });

      it('should have \"table header\" content', () => {
        const { getByText } = renderWithRouter(<CustomerCheckout />);
        
        const itemHeader = getByText(/^(?!.*substring)item/i);
        const descriptionHeader = getByText(/descri[cç][aã]o/i);
        const quantityHeader = getByText(/quantidade/i);
        const unitValueHeader = getByText(/valor unit[aá]rio/i);
        const subTotalHeader = getByText(/sub(-| |)total/i);
        const removeItemHeader = getByText(/remover item/i);
  
        expect(itemHeader).toBeInTheDocument();
        expect(descriptionHeader).toBeInTheDocument();
        expect(quantityHeader).toBeInTheDocument();
        expect(unitValueHeader).toBeInTheDocument();
        expect(subTotalHeader).toBeInTheDocument();
        expect(removeItemHeader).toBeInTheDocument();
      });
      
      it.skip('should render localStorage content', () => {
        const { getByText } = renderWithRouter(<CustomerCheckout />);
        window.localStorage.setItem(CUSTOMER_CART_KEY, PRODUCT_OBJ_ARRAY);
        const localStorageProducts = window.localStorage.getItem(CUSTOMER_CART_KEY);
  
        expect(localStorageProducts).toHaveBeenCalledTimes(1);
  
        const idItem = getByText(PRODUCT_OBJ_ARRAY[0].id);
        const descriptionItem = getByText(PRODUCT_OBJ_ARRAY[0].description);
        const quantityItem = getByText(PRODUCT_OBJ_ARRAY[0].quantity);
        const unitPriceItem = getByText(PRODUCT_OBJ_ARRAY[0].unitPrice);
        const subTotalItem = getByText(PRODUCT_OBJ_ARRAY[0].subTotal);
  
        expect(idItem).toBeInTheDocument();
        expect(descriptionItem).toBeInTheDocument();
        expect(quantityItem).toBeInTheDocument();
        expect(unitPriceItem).toBeInTheDocument();
        expect(subTotalItem).toBeInTheDocument();
      });
  
      it.skip('should have \"remove buttons\" equal to localStorage customerCart length', () => {
        const { queryAllByText } = renderWithRouter(<CustomerCheckout />);
        
        const removeButtons = queryAllByText('Remover');
        const areButtons = removeButtons.every((btn) => btn.type === 'button')
        
        expect(removeButtons.length).toBe(CUSTOMER_CART_LENGHT);
        expect(areButtons).toBeTruthy();
  
      })
  
      it.skip('should have \"Total: R$ \" text to show the total cart price', () => {
        const { getByText } = renderWithRouter(<CustomerCheckout />);
        const totalCartPrice = getByText(/total: r[$] /i);
  
        expect(totalCartPrice).toBeInTheDocument();
      });
    });
    
    describe.skip('user end order form', () => {
      it('should have a \"Detalhes e endereço para entrega\" title ', () => {
        
        const { getByText } = renderWithRouter(<CustomerCheckout />);
        const endOrderFormTitle = getByText(/detalhes e endereço para entrega/i);
        
        expect(endOrderFormTitle.type).toBe('h1');
        expect(endOrderFormTitle).toBeInTheDocument();
      });

      it('should have \"table header\" content', () => {
        const { getByText } = renderWithRouter(<CustomerCheckout />);
        
        const sellerHeader = getByText(/P[.] vendedora respons[áa]vel/i);
        const addressHeader = getByText(/endere[çc]o/i);
        const numAddressHeader = getByText(/n[úu]mero/i);
  
        expect(sellerHeader).toBeInTheDocument();
        expect(addressHeader).toBeInTheDocument();
        expect(numAddressHeader).toBeInTheDocument();
      });

      // TODO: Verify if works with MUI
      describe('select box', () => {
        it('should have a Select Box to select one all Sellers', () => {
          const { getByTestId } = renderWithRouter(<CustomerCheckout />);

          const selectBox = getByTestId('select-box');
          expect(selectBox).toBeInTheDocument();
        });
        
        it('should have all got sellers as options', async () => {
          const { getAllByRole } = renderWithRouter(<CustomerCheckout />);
          const gotSellers = await getAllSellersMock();
          expect(getAllSellersMock).toHaveBeenCalledTimes(1);

          const sellerOptions = getAllByRole('option');

          expect(sellerOptions[0]).toBeInTheDocument();
          expect(sellerOptions[1]).toBeInTheDocument();

          expect(sellerOptions[0].value).toBe(gotSellers[0].name);
          expect(sellerOptions[1].value).toBe(gotSellers[1].name);
        });
        
      });

      it('should have \"address input\" and \"address number input\"', () => {
        const { getByTestId } = renderWithRouter(<CustomerCheckout />);

        const addressInput = getByTestId('address-input');
        const numberAddressInput = getByTestId('number-address-input');

        expect(addressInput.type).toBe('input');
        expect(numberAddressInput.type).toBe('input');

        expect(addressInput).toBeInTheDocument();
        expect(numberAddressInput).toBeInTheDocument();
      });

      it('should have a button with text \"FINALIZAR PEDIDO\"', () => {
        const { getAllByText } = renderWithRouter(<CustomerCheckout />);

        const endOrderElement = getAllByText(/finalizar pedido/i);
        const [endOrderButton] = endOrderElement.filter((btn) => btn.type === 'button');

        expect(endOrderButton).not.toEqual([]);
        expect(endOrderButton).toBeInTheDocument();
      });
    });
  });

});