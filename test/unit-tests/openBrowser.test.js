const expect = require('chai').expect;
let {
  openBrowser,
  closeBrowser,
  client,
} = require('../../lib/taiko');
let { openBrowserArgs } = require('./test-util');

describe('opens browser successfully', () => {
  xit("openBrowser should return 'Browser Opened' message", async () => {
    expect(process.env.TAIKO_EMULATE_DEVICE).to.be.undefined;
    await openBrowser(openBrowserArgs).then(data => {
      expect(data).to.equal(undefined);
    });
  });

  it('openBrowser should initiate the CRI client object', () => {
    return openBrowser(openBrowserArgs).then(() => {
      expect(client).not.to.be.null;
    });
  });

  afterEach(async () => await closeBrowser());
});

describe('open browser throws an error', () => {
    it('openBrowser should throw an error when options parameter is string', () =>
        openBrowser('someString')
            .catch(error => expect(error).to.be.an.instanceOf(Error)));
    it('openBrowser should throw an error when options parameter is array', () =>
        openBrowser([])
            .catch(error => expect(error).to.be.an.instanceOf(Error)));
})
