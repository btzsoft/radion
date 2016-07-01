import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions/search';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)

export default class NavSearch extends Component {

  static propTypes = {
    fetchSearch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSlashPress = this.handleSlashPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleSlashPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyCode', this.handleSlashPress, false);
  }

  handleOnChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      const value = this.state.searchValue.trim();
      if (value) {
        browserHistory.push(`/search/${value}`);
      }
    }
  }

  handleSlashPress(e) {
    const keyCode = e.keyCode || e.which;
    const isInsideInput = e.target.tagName.toLowerCase().match(/input|textarea/);
    if (keyCode === 47 && !isInsideInput) {
      e.preventDefault();
      this.refs.search.focus();
    }
  }

  render() {
    return (
      <div>
        <TextField
          id="input_search"
          ref="search"
          placeholder="Search"
          value={this.state.searchValue}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
        />
      </div>
    );
  }
}
