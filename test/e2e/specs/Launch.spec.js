import utils from '../utils'

should()

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('electron-vue-with-irohajs')
      })
  })

  describe('createKeyPair button', function () {
    it('creates new kay pair', function () {
      return this.app.client.click('#btn-create-key-pair')
        .getText('#public-key').should.eventually.match(/publicKey: .+/)
        browserWindow.getText('#private-key').should.eventually.match(/private: .+/)
    })
  })
})
