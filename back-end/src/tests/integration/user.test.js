const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const faker = require('faker');
const  { fakeUser }  = require('../utils/fakes');

chai.use(chaiHttp);

const { expect } = chai;

describe('1 - teste user', () => {
  let response;

  before(async () => {
    response = await chai.request(app)
      .post('/user')
      .send(fakeUser);
  })

  it('1 + 1 é igual a 2 ?', () => {
    const result = (1 + 1);
    expect(result).to.equal(2)
  });

  it('Registrou no banco ?', () => {
    expect(response).to.have.status(201)
  })
});