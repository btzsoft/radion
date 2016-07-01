import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { initEnvironment } from './../actions/environment';
import Nav from './Nav';
import Player from './Player';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

@connect(
  state => {
    const { environment } = state;
    const { height, width, isMobile, isLoading, error } = environment;

    return {
      height,
      width,
      isMobile,
      isLoading,
      error,
    };
  }
)

export default class App extends Component {

  static propTypes = {
    height: PropTypes.number,
    isMobile: PropTypes.bool,
    width: PropTypes.number,
    dispatch: PropTypes.func,
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { drawerIsOpen: false };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
  }

  handleDrawerToggle() {
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
  }

  handleDrawerClose() {
    this.setState({ drawerIsOpen: false });
  }

  handleMenuItemClick(path) {
    this.setState({ drawerIsOpen: false });
    if (path) {
      browserHistory.push(path);
    }
  }

  renderDrawer() {
    return <Drawer
      docked={false}
      width={200}
      open={this.state.drawerIsOpen}
      onRequestChange={(drawerIsOpen) => this.setState({ drawerIsOpen })}
    >
      <MenuItem onTouchTap={this.handleMenuItemClick.bind(this, '/')}>Stations</MenuItem>
    </Drawer>;
  }

  renderNavBar() {
    return <Nav onNavLeftButtonTouchTap={this.handleDrawerToggle.bind(this)} />;
  }

  renderPlayer() {
    return <Player />;
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {this.renderDrawer()}
        {this.renderNavBar()}
        {children}
        {this.renderPlayer()}
      </div>
    );
  }
}
