import template from './sidebar.html';

export const SidebarComponent = {
  template,
  bindings: {
    facets: '<',
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
      
      this.clearAll = false;
      this.facets.forEach((facet)=>{
        facet.filters.forEach((filter)=>{
          if (filter.active) {
            this.clearAll = true;
          }
        });
      });
    }

    removeAll() {
      this.clearAll=false;
      this.deactivateAll();
    }
  }
};

