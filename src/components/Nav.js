import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import NavSearch from './../components/NavSearch';
import CircularProgress from 'material-ui/CircularProgress';

@connect(
  state => {
    const { environment } = state;
    const { isMobile, isLoading } = environment;

    return {
      isMobile,
      isLoading,
    };
  },
)

export default class Nav extends Component {

  static propTypes = {
    isMobile: PropTypes.bool,
    isLoading: PropTypes.bool,
  }

  render() {
    const { isLoading, onNavLeftButtonTouchTap } = this.props;
    return (
      <AppBar
        title="Radion"
        children={<NavSearch />}
        iconElementRight={isLoading ? <CircularProgress size={0.5} color="#aaf" /> : null}
        onLeftIconButtonTouchTap={() => onNavLeftButtonTouchTap()}
      />
    );
  }
}
