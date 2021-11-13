import React from 'react';
import CustomerCheckout from '../pages/CustomerCheckout';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import APICalls from '../services/APICalls';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';

describe('Tests for Customer Checkout', () => {

  const CUSTOMER_CART_KEY = 'customerCart';
  const PRODUCT_OBJ_ARRAY = [
    {id: 1, description: 'Skol Lata 250ml', quantity: 2, unitPrice: 2.20 },
    {id: 2, description: 'Império Lata 250ml', quantity: 4, unitPrice: 2.50 },
  ];
  const PRODUCT_TOTAL_PRICE = {
    0: 4.4,
    1: 10,
  }
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
  
  // SOURCE https://github.com/facebook/jest/issues/6798
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
    jest.spyOn(APICalls, 'getAllSellers')
            .mockResolvedValue(SELLERS_ARRAY);
  })

  afterEach(() => {    
    jest.clearAllMocks();
  });

  describe('path', () => {
    it('should be at customer/checkout', async () => {
      await act( async () => {
        const { history } = renderWithRouter(<App />);
        history.push('/customer/checkout');
      })
      const { getByTestId } = screen;
      
      expect(getByTestId('customer-checkout-page')).toBeInTheDocument();
    });
  });

  describe('localStorage', () => {
    it('should getItem once', async () => {
      await act( async () => {
        renderWithRouter(<App />); 
      })
      
      expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    });
    it('should be setted one time with customerCart at App if don\'t have a key', async () => {
      await act( async () => {
        renderWithRouter(<App />); 
      })
      const gotItem = localStorage.getItem(CUSTOMER_CART_KEY);
      localStorage.setItem(CUSTOMER_CART_KEY, []);

      expect(localStorage.getItem).toHaveBeenCalledWith(CUSTOMER_CART_KEY);
      expect(localStorage.getItem).toHaveBeenCalled();
      expect(gotItem).toBeFalsy();
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {  
    describe('user product cart', () => {
      it('should have a \"Finalizar pedido\" title ', async () => {
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })
        
        const { getByRole } = screen;
        const userCartTitle = getByRole('heading', {
          level: 1,
          name: /finalizar pedido/i,
        });
        expect(userCartTitle).toBeInTheDocument();
      });

      it('should have \"table header\" content', async () => {
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })
        
        const { getByText } = screen;
        
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
      
      it('should render localStorage content', async () => {
        localStorage.setItem(CUSTOMER_CART_KEY, PRODUCT_OBJ_ARRAY);
        expect(localStorage.setItem).toHaveBeenCalledWith(CUSTOMER_CART_KEY, PRODUCT_OBJ_ARRAY);

        const LS_GET_STRING_OUTPUT = "[{\"id\":1,\"description\":\"Skol Lata 250ml\",\"quantity\":2,\"unitPrice\":2.2},{\"id\":2,\"description\":\"Império Lata 250ml\",\"quantity\":4,\"unitPrice\":2.5}]"

        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(PRODUCT_OBJ_ARRAY));
        expect(localStorage.getItem()).toStrictEqual(LS_GET_STRING_OUTPUT);
        
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })

        const { getByText } = screen;

        PRODUCT_OBJ_ARRAY.forEach((product, index) => {
          const totalPrice = new RegExp(`R[$] ${PRODUCT_TOTAL_PRICE[index]}`, 'i');

          const idItem = getByText(index);
          const descriptionItem = getByText(product.description);
          const quantityItem = getByText(product.quantity);
          const unitPriceItem = getByText(`R$ ${product.unitPrice}`);
          const subTotalItem = getByText(totalPrice);
    
          expect(idItem).toBeInTheDocument();
          expect(descriptionItem).toBeInTheDocument();
          expect(quantityItem).toBeInTheDocument();
          expect(unitPriceItem).toBeInTheDocument();
          expect(subTotalItem).toBeInTheDocument();
        })
      });
  
      it('should have \"remove buttons\" equal to localStorage customerCart length', async () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(PRODUCT_OBJ_ARRAY));

        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })

        const { getAllByRole } = screen;
        const removeButtons = getAllByRole('button', { name: /remove/i });
        
        expect(removeButtons.length).toStrictEqual(2);
        expect(removeButtons[0]).toBeInTheDocument();
        expect(removeButtons[1]).toBeInTheDocument();
  
      })
  
      it('should have \"Total: R$ \" text to show the total cart price', async () => {
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })
        
        const { getByText } = screen;
        const totalCartPrice = getByText(/total: r[$] /i);
  
        expect(totalCartPrice).toBeInTheDocument();
      });
    });
    
    describe('user end order form', () => {
      it('should have a \"Detalhes e endereço para entrega\" title ', async () => {
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })
        const { getByRole } = screen;
        const endOrderFormTitle = getByRole('heading', {
          level: 1,
          name: /detalhes e endere[çc]o para entrega/i
        });
        
        expect(endOrderFormTitle).toBeInTheDocument();
      });

      it('should have \"P. vendedora responsável\", \"Endereço\" and \"Número\" \"Label texts\" to inputs (MUI just will accepts text getter)', async () => {
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })
        const { getByText, getAllByText } = screen;
        
        const seller = getByText(/P[.] vendedora respons[áa]vel/i);
        const address = getAllByText(/endere[çc]o/i);
        const number = getAllByText(/n[úu]mero/i);
  
        expect(seller).toBeInTheDocument();
        expect(address[0]).toBeInTheDocument();
        expect(number[0]).toBeInTheDocument();
      });

      describe('select box', () => {
        it('should have a Select Box to select one all Sellers', async () => {
          await act( async () => {
            renderWithRouter(<CustomerCheckout />);
          })
          const { getByTestId } = screen;

          const selectBox = getByTestId('select-box');
          expect(selectBox).toBeInTheDocument();
        });
        
        it('should have all got sellers as options', async () => {
          await act( async () => {
            renderWithRouter(<CustomerCheckout />);
          })
          const { getAllByTestId } = screen;
          expect(APICalls.getAllSellers).toHaveBeenCalled();
          expect(APICalls.getAllSellers()).resolves.toEqual([
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
          ])

          const sellerOptions = getAllByTestId('select-option');

          expect(sellerOptions[0]).toBeInTheDocument();
          expect(sellerOptions[1]).toBeInTheDocument();

          expect(sellerOptions[0].value).toBe(SELLERS_ARRAY[0].name);
          expect(sellerOptions[1].value).toBe(SELLERS_ARRAY[1].name);
        });
        
      });

      it('should have a button with text \"FINALIZAR PEDIDO\"', async () => {
        await act( async () => {
          renderWithRouter(<CustomerCheckout />);
        })
        
        const { getByRole } = screen;
        const endOrderButton = getByRole('button', { name: /finalizar pedido/i });

        expect(endOrderButton).toBeInTheDocument();
      });
    });
  });

});