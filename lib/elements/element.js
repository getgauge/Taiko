class Element {
  constructor(objectId, description, runtimeHandler) {
    this.objectId = objectId;
    this.description = description;
    this.runtimeHandler = runtimeHandler;
  }
  get() {
    return this.objectId;
  }

  async text() {
    let getText = function () {
      if (this.nodeType === Node.TEXT_NODE) {
        return this.parentElement.innerText;
      } else {
        return this.innerText;
      }
    };
    const result = await this.runtimeHandler.runtimeCallFunctionOn(getText, null, {
      objectId: this.objectId,
    });
    return result.result.value;
  }

  async isVisible() {
    function isHidden() {
      let elem = this;
      if (this.nodeType === Node.TEXT_NODE) {
        elem = this.parentElement;
      }
      return !(elem.offsetHeight || elem.offsetWidth || elem.getClientRects().length);
    }
    const result = await this.runtimeHandler.runtimeCallFunctionOn(isHidden, null, {
      objectId: this.objectId,
      returnByValue: true,
    });
    return !result.result.value;
  }

  static create(objectIds, runtimeHandler) {
    return objectIds.map((objectId) => new Element(objectId, '', runtimeHandler));
  }

  async isDisabled() {
    function isDisabled() {
      if (this.nodeType === Node.ELEMENT_NODE) {
        return this.parentElement.disabled || this.disabled;
      }
    }
    const { result } = await this.runtimeHandler.runtimeCallFunctionOn(isDisabled, null, {
      objectId: this.objectId,
      returnByValue: true,
    });
    if (result.value === undefined) {
      throw new Error(`${this.description} does not have disable attribute`);
    }
    return result.value;
  }
}

module.exports = Element;
