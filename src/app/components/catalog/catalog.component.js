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
      this.activeFacets=[];
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
      this.facets = data.facets;
      this.activeFacets = data.activeFacets;
    }

  }
};

