const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const http = require('../api/app');
const { user } = require('../database/models');

describe('Busca todos os usuários', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(user, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called user.findAll', async () => {
      await chai.request(http)
        .get('/register');

      expect(user.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(http)
        .get('/register');
      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(http)
        .get('/register');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(http)
        .get('/register');

      expect(result.body).to.be.empty;
    });
  });
});

describe('Cadastra um novo usuario', () => {
  describe('cadastra com sucesso', () => {
    const createStub = stub(user, 'create');

    before(() => {
      createStub.resolves({ token: 'token' });
    });

    after(() => {
      createStub.restore();
    });

    it('called user.create', async () => {
      await chai.request(http)
        .post('/register')
        .send({
          name: 'teste usuario',
          email: 'email@email.com',
          password: '123456'
        });

      expect(user.create.calledOnce).to.be.equals(true);
    });

    it('o status é 201', async () => {
      const response = await chai.request(http)
      .post('/register')
      .send({
        name: 'teste usuario',
        email: 'email@email.com',
        password: '123456'
      });

      expect(response.status).to.be.equals(201);
    });

    it('a resposta é um object', async () => {
      const response = await chai.request(http)
      .post('/register')
      .send({
        name: 'teste usuario',
        email: 'email@email.com',
        password: '123456'
      });

      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "token"', async () => {
      const response = await chai.request(http)
      .post('/register')
      .send({
        name: 'teste usuario',
        email: 'email@email.com',
        password: '123456'
      });

      expect(response.body).to.have.property('token');
    });
  });
  
  describe('erro caso não sejam passadas as informações', () => {
    it('o status é 500', async () => {
      const response = await chai.request(http)
      .post('/register')
      expect(response.status).to.be.equals(500);
    });

    it('a resposta é um object', async () => {
      const response = await chai.request(http)
      .post('/register')
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', async () => {
      const response = await chai.request(http)
      .post('/register')
      expect(response.body).to.have.property('message');
    });
  });
  
});