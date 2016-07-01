import React, { Component } from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightTheme from './../themes/light';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './../components/App';
import configureStore from './../store/configureStore';


const store = configureStore();

// Fix Material-ui Tabs
injectTapEventPlugin();

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightTheme)}>
          <App {...this.props} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
