import { expect } from 'chai';
import * as actions from './../../src/actions/stations';
import * as types from './../../src/constants/ActionTypes';

describe('actions -> stations', () => {

  const stations = [
    {
      "id": 10,
      "name": "Sr P3",
      "description": "",
      "country": "SE",
      "website": "",
      "image": {
        "url": null,
        "thumb": {
          "url": null
        }
      },
      "created_at": "2012-01-15T05:55:12.000+01:00",
      "updated_at": "2015-04-11T14:10:45.000+02:00",
      "slug": "sr-p3"
    },
    {
      "id": 11,
      "name": "Digitally Imported Hardcore",
      "description": "",
      "country": "US",
      "website": "",
      "image": {
        "url": null,
        "thumb": {
          "url": null
        }
      },
      "created_at": "2012-01-15T05:56:48.000+01:00",
      "updated_at": "2015-04-11T14:10:45.000+02:00",
      "slug": "digitally-imported-hardcore"
    }
  ]

  it('should create an action to add all stations', () => {

    const expectedAction = {
      type: types.RECEIVE_ALL_STATIONS,
      all: stations
    }

    expect(actions.receiveAllStations(stations)).to.deep.equal(expectedAction);
  })

  it('should create an action to add recent stations', () => {

    const expectedAction = {
      type: types.RECEIVE_RECENT_STATIONS,
      recent: stations
    }

    expect(actions.receiveRecentStations(stations)).to.deep.equal(expectedAction);
  })

  it('should create an action to add popular stations', () => {

    const expectedAction = {
      type: types.RECEIVE_POPULAR_STATIONS,
      popular: stations
    }

    expect(actions.receivePopularStations(stations)).to.deep.equal(expectedAction);
  })

})