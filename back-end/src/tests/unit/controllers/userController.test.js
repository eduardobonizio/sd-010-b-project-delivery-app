const sinon = require('sinon')
const { expect } = chai;

const { User } = require('../../../models');
const { findAllUsers, findUserByPk } = require('../../../controllers/userController');

describe('User controller', () => {
  const users = [];
  const userByPk = {};

  describe('GET Users', () => {
    it('should use findAllUsers action and send response', async () => {
      const findAllUsers = sinon.stub(User, 'findAllUsers').resolves(users)
      let resSpy = sinon.spy();
      const req = {};
      const res = {
        status: sinon.stub().returns({ json: resSpy }),
      };

      await findAllUsers(req, res);

      expect(findAllUsers.calledOnce).to.equal(true)
      expect(resSpy.calledOnce).to.equal(true)
      expect(resSpy.calledWith(users)).to.equal(true)

      findAllUsers.restore()
    })
  })

  describe('GET specific user', () => {
    it('should use findUserByPk action and send response', async () => {
      const findUserByPk = sinon
        .stub(User, 'findUserByPk')
        .resolves(userByPk)
      let resSpy = sinon.spy()
      const req = {
        params: {
          id: 1,
        },
      };

      const res = {
        status: () => {
          return {
            json: resSpy,
          }
        },
      };

      const spy = sinon.spy(res, 'status')
      await findUserByPk(req, res)

      expect(findUserByPk.calledOnce).to.equal(true)
      expect(spy.calledOnce).to.equal(true)
      expect(resSpy.calledOnce).to.equal(true)
      expect(resSpy.calledWith(userByPk)).to.equal(true)

      findUserByPk.restore();
    });
  });
});
