const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const rewire = require('rewire');
let pageActionChecks = rewire('../../../lib/actions/pageActionChecks');

describe('pageActionChecks', () => {
  describe('checkVisible', () => {
    beforeEach(() => {
      pageActionChecks.__set__('defaultConfig', { retryInterval: 0, retryTimeout: 0 });
    });
    afterEach(() => (pageActionChecks = rewire('../../../lib/actions/pageActionChecks')));
    it('should call elements isVisible method and return result', async () => {
      const elem = { isVisible: () => true };
      const result = await pageActionChecks.__get__('checkVisible')(elem);
      expect(result).to.be.true;
    });
  });
  describe('checkNotDisabled', () => {
    beforeEach(() => {
      pageActionChecks.__set__('defaultConfig', { retryInterval: 0, retryTimeout: 0 });
    });
    afterEach(() => (pageActionChecks = rewire('../../../lib/actions/pageActionChecks')));
    it('should call elements isDisabled method and return not of result', async () => {
      const elem = { isDisabled: () => false };
      const result = await pageActionChecks.__get__('checkNotDisabled')(elem);
      expect(result).to.be.true;
    });
  });
  describe('checkIfActionable', () => {
    beforeEach(() => {
      pageActionChecks.__set__('defaultConfig', { retryInterval: 0, retryTimeout: 0 });
    });
    afterEach(() => (pageActionChecks = rewire('../../../lib/actions/pageActionChecks')));
    it('should check all given checks and return false if anyone is false', async () => {
      const checks = ['visible', 'disabled'];
      const elem = { isVisible: () => true, isDisabled: () => true };
      const result = await pageActionChecks.__get__('checkIfActionable')(elem, checks);
      expect(result).to.be.false;
    });
    it('should check all given checks and return true if all are true', async () => {
      const checks = ['visible', 'disabled'];
      const elem = { isVisible: () => true, isDisabled: () => false };
      const result = await pageActionChecks.__get__('checkIfActionable')(elem, checks);
      expect(result).to.be.true;
    });
  });
  describe('waitAndGetActionableElement', () => {
    beforeEach(() => {
      pageActionChecks.__set__('defaultConfig', { retryInterval: 5, retryTimeout: 10 });
    });
    afterEach(() => (pageActionChecks = rewire('../../../lib/actions/pageActionChecks')));
    it('should call checkActionable with default checks if not given', async () => {
      const defaultChecks = ['visible', 'disabled'];
      let actualCheck;
      pageActionChecks.__set__('checkIfActionable', (elem, checks) => {
        actualCheck = checks;
        return true;
      });
      pageActionChecks.__set__('findElements', () => [
        { isVisible: () => true, isDisabled: () => false },
      ]);
      await pageActionChecks.waitAndGetActionableElement('Something');
      expect(actualCheck).to.deep.equal(defaultChecks);
    });
    it('should call checkActionable with given checks', async () => {
      const expectedChecks = ['visible'];
      let actualCheck;
      pageActionChecks.__set__('checkIfActionable', (elem, checks) => {
        actualCheck = checks;
        return true;
      });
      pageActionChecks.__set__('findElements', () => [
        { isVisible: () => true, isDisabled: () => false },
      ]);
      await pageActionChecks.waitAndGetActionableElement('Something', expectedChecks);
      expect(actualCheck).to.deep.equal(expectedChecks);
    });
    it('should return first element that is actionable', async () => {
      pageActionChecks.__set__('findElements', () => [
        { name: 'notActionable', isVisible: () => true, isDisabled: () => true },
        { name: 'Actionable', isVisible: () => true, isDisabled: () => false },
      ]);
      const result = await pageActionChecks.waitAndGetActionableElement('Something');
      expect(result.name).to.equal('Actionable');
    });
    it('should throw error when no actionable element is found', async () => {
      pageActionChecks.__set__('findElements', () => [
        { name: 'notActionable', isVisible: () => true, isDisabled: () => true },
        { name: 'notActionable', isVisible: () => true, isDisabled: () => true },
      ]);
      await expect(
        pageActionChecks.waitAndGetActionableElement('Something'),
      ).to.be.eventually.rejectedWith(
        'Element matching text "Something" is not actionable. Check failed for anyone of the following cases visible,disabled',
      );
    });
  });
});
