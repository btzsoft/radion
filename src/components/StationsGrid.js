import React, { Component, PropTypes } from 'react';
import StationCard from './StationCard';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

export default class Stations extends Component {

  static propTypes = {
    stations: PropTypes.array,
  };

  render() {
    const { stations } = this.props;

    return (
      <div style={styles.root}>
        <GridList
          padding={4}
          style={styles.gridList}
        >
          <Subheader>Stations</Subheader>
          {stations.map(station => <StationCard key={station.id} station={station} />)}
        </GridList>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 600,
    overflowY: 'auto',
    marginBottom: 24,
  },
};
