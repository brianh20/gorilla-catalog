import template from './sidebar.html';

export const SidebarComponent = {
  template,
  bindings: {
    facets: '<',
    activeFacets: '<',
    activateFacet: '&',
    deactivateFacet: '&',
    deactivateAll: '&'
  },
  controller: class SidebarComponentController {
    constructor() {
      this.clearAll = false;
    }

    selectFilter(facet, filter) {
      this.activateFacet({facet, filter});
      this.clearAll = true;
    }

    removeFacet(facet, filter) {
      this.deactivateFacet({facet, filter});

      //check for true
    }

    removeAll() {
      this.clearAll=false;
      this.deactivateAll();
      
    }
  }
};

