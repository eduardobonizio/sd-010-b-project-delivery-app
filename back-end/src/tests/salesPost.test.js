const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../api/app');
const { Sale } = require('../database/models');

const {
  SALE_PATH,
  SALE_VALID,
  SALE_VALID_RETURNED_VALUE,
  SALE_MISSING_USER_ID,
  SALE_MISSING_SELLER_ID,
  SALE_MISSING_TOTAL_PRICE,
  SALE_MISSING_DELIVERY_ADDRESS,
  SALE_MISSING_DELIVERY_NUMBER,
  STATUS_CREATED,
  STATUS_BAD_REQUEST,
  SALE_UNAUTHORIZED_KEY_SALE_DATE,
  SALE_UNAUTHORIZED_KEY_STATUS,
} = require('./utils/constants')

describe('Testing /sale POST route', () => {
  const createStub = stub(Sale, 'create');

  describe('when "body" data is valid', () => {
    let postSale;
    
    before(async () => {
      createStub.resolves(SALE_VALID_RETURNED_VALUE)
      
      postSale = await chai.request(app)
        .post(SALE_PATH)
        .send(SALE_VALID);
    })

    after(() => {
      createStub.restore();
    })

    it('calls Sale.create', () => {
      expect(Sale.create.calledOnce).to.be.true;
    });

    it('returns 201 - Created', () => {
      const { status } = postSale;

      expect(status).to.be.equals(STATUS_CREATED);
    });

    it('returns created object', () => {
      const { body } = postSale;
      
      expect(body).to.be.deep.equals(SALE_VALID);
    });

    it('returns sale_date at format "yyyy-mm-dd hh:mm:ss"', () => {
      createStub.restore();

      const { body: { sale_date } } = postSale;
      const dateRegex = new RegExp(/ ^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$ /)
      const regexTestResult = dateRegex.test(sale_date);

      expect(regexTestResult).to.be.true;
    });

    it('returns always "status" as "pending"', () => {
      createStub.restore();
      
      const { body: { status } } = postSale;

      expect(status).to.be.equals('pending');
    })
  });

  describe('when "body" data is invalid', () => {
    it('shouldn\'t calls Sale.create', async () => {
      await chai.request(app)
        .post(SALE_PATH)
        .send({});

      expect(Sale.create.calledOnce).to.be.false;
    });

    it('return 400 - Bad Request', async () => {
      const { status } = await chai.request(app)
        .post(SALE_PATH)
        .send({});

      expect(status).to.be.equals(STATUS_BAD_REQUEST)
    });

    describe('with missing body', () => {
      describe('user_id key', () => {
        it('returns with body message "user_id" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_MISSING_USER_ID);

          expect(message).to.be.an('array').that.contains('"user_id" is required');
        });
      });

      describe('seller_id key', () => {
        it('returns with body message "seller_id" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_MISSING_SELLER_ID);

            expect(message).to.be.an('array').that.contains('"seller_id" is required');
        });
      });

      describe('total_price key', () => {
        it('returns with body message "total_price" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_MISSING_TOTAL_PRICE);

            expect(message).to.be.an('array').that.contains('"total_price" is required');
        });
      });

      describe('delivery_address key', () => {
        it('returns with body message "delivery_address" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_MISSING_DELIVERY_ADDRESS);

            expect(message).to.be.an('array').that.contains('"delivery_address" is required');
        });
      });

      describe('delivery_number key', () => {
        it('returns with body message "delivery_number" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_MISSING_DELIVERY_NUMBER);

            expect(message).to.be.an('array').that.contains('"delivery_number" is required');
        });
      });
    });

    describe('with unauthorized body', () => {
      describe('sale_date key', () => {
        it('returns with body message "sale_date" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_UNAUTHORIZED_KEY_SALE_DATE);

          expect(message).to.be.equals('"sale_date" can\'t be post on')
        });
      })

      describe('status key', () => {
        it('returns with body message "status" is required', async () => {
          const { body: { message } } = await chai.request(app)
            .post(SALE_PATH)
            .send(SALE_UNAUTHORIZED_KEY_STATUS);

          expect(message).to.be.equals('"status" can\'t be post on')
        });
      })
      
    })
  })
});