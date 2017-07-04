import template from './catalog.html';

export const CatalogComponent = {
  template,
  controller: class CatalogComponentController {
  	constructor(SiteService) {
      'ngInject';
      this.SiteService = SiteService;
      this.Site = new this.SiteService();

      this.items=[];
      this.facets=[];
      this.topControls={};
    }

    $onInit() {
      //Init Contact List
      this.results = this.Site
      .get()
      .then((response) => {
        this.transformData(response.data);
      }, ()=> {
        console.log('Error resolving response');
      });
    }

    transformData(data){
      this.items = data.catalog;
      this.topControls = data.topControls;

      
      this.facets = this.removeAll(data.facets);
    }

    activateFacet(facet,filter) {
      this.facets[facet].filters[filter].active=true;
    }

    removeFacet(facet, filter) {
      this.facets[facet].filters[filter].active=false;
    }

    removeAll(facets){
      facets.forEach((facet) => {
        facet.filters.forEach((filter)=>{
          filter.active = false;
        });
      });
      return facets;
    }


  }
};

