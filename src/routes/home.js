import App from './../containers/AppContainer';
import HomePage from './../containers/HomeContainer';
import search from './search';
import station from './station';

export default {
  path: '/',
  component: App,
  indexRoute: {
    component: HomePage,
  },
  childRoutes: [
    search,
    station,
  ],
};
