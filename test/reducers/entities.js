import { expect } from 'chai';
import reducer from './../../src/reducers/entities';
import * as types from './../../src/constants/ActionTypes';

describe('reducers -> entities', () => {

  const initialState = {
    stations: {
      all: [],
      recent: [],
      popular: [],
      search: [],
    }
  }

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

  it('should return the initial state', () => {

    expect(
      reducer(undefined, {})
    ).to.deep.equal(initialState)

  })

  it('should handle RECEIVE_ALL_STATIONS', () => {

    expect(
      reducer(initialState, {
        type: types.RECEIVE_ALL_STATIONS,
        all: stations
      })
    ).to.deep.equal({ stations: { ...initialState.stations, all: stations } })

  })

  it('should handle RECEIVE_ALL_STATIONS', () => {

    expect(
      reducer(initialState, {
        type: types.RECEIVE_RECENT_STATIONS,
        recent: stations
      })
    ).to.deep.equal({ stations: { ...initialState.stations, recent: stations } })

  })

  it('should handle RECEIVE_ALL_STATIONS', () => {

    expect(
      reducer(initialState, {
        type: types.RECEIVE_POPULAR_STATIONS,
        popular: stations
      })
    ).to.deep.equal({ stations: { ...initialState.stations, popular: stations } })

  })

  it('should handle RECEIVE_SEARCH', () => {

    expect(
      reducer(initialState, {
        type: types.RECEIVE_SEARCH,
        search: stations
      })
    ).to.deep.equal({ stations: { ...initialState.stations, search: stations } })

  })

})
