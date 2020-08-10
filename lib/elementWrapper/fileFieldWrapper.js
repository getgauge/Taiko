const FileField = require('../elements/fileField');
const ValueWrapper = require('./valueWrapper');
const { $function } = require('../elementSearch');
const { getElementGetter } = require('./helper');
function getFileFieldElementWithLabel(searchElement, label) {
  const fileField = [];
  function checkAndPushElement(elem) {
    if (
      elem.tagName &&
      elem.tagName.toLowerCase() == 'input' &&
      elem.type &&
      elem.type.toLowerCase() === 'file'
    ) {
      fileField.push(elem);
    }
  }
  const matchingLabels = [...searchElement.querySelectorAll('label')].filter((labelElem) => {
    return labelElem.innerText.toLowerCase().includes(label.toLowerCase());
  });
  for (let matchingLabel of matchingLabels) {
    const labelFor = matchingLabel.getAttribute('for');
    if (labelFor) {
      //check label with attribute for
      const labelForElement = searchElement.getElementById(labelFor);
      checkAndPushElement(labelForElement);
    } else {
      // check child node of label tag
      matchingLabel.childNodes.forEach((elem) => {
        checkAndPushElement(elem);
      });
    }
  }
  return fileField;
}
class FileFieldWrapper extends ValueWrapper {
  constructor(attrValuePairs, _options, ...args) {
    super('FileField', 'label', attrValuePairs, _options, ...args);
    this._get = getElementGetter(
      this.selector,
      async () =>
        await $function(
          getFileFieldElementWithLabel,
          this.selector.label,
          this.options.selectHiddenElements,
        ),
      'input[type="file"]',
      this.options.selectHiddenElements,
    );
  }

  async elements(retryInterval, retryTimeout) {
    let elements = await super.elements(retryInterval, retryTimeout);
    return elements.map((element) => FileField.from(element, this._description));
  }
}

module.exports = FileFieldWrapper;
