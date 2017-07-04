import template from './display.html';

export const DisplayComponent = {
  template,
  bindings: {
    items: '<',
    maximum: '<'
  },
  controller: class DisplayComponentController {
  }
};

