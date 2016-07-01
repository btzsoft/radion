import React from 'react';
import { shallow } from 'enzyme';
import StationsGrid from './../../src/components/StationsGrid';
import StationCard from './../../src/components/StationCard';
import { expect } from 'chai';

describe('components -> <StationsGrid />', () => {

  it('should render two <StationCard /> components', () => {
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

    const wrapper = shallow(<StationsGrid stations={stations} />)
    expect(wrapper.find(StationCard)).to.have.length(2);

  });

});
