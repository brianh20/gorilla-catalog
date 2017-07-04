//Framework
import angular from 'angular';

//Components
import { ComponentsModule } from './components/components.module';

//Services
import { SiteService } from './services/site.service';

//Styles
import less from '../styles/styles.less'; // eslint-disable-line

export const App = angular
  .module('app', [ComponentsModule])
  .service('SiteService', SiteService)
  .run();