import { shallow } from 'enzyme';
import React from 'react';
import RandResult from './RandResult';

it('expect to render Footer component', () => {
  const mockData = {
    Country: "Netherlands",
    Date: "2016-01-01",
    Local_price: 3.45,
    Dollar_ex: 0.930232558139535,
    Dollar_price: 3.70875,
    Dollar_PPP: 0.699797160243408,
    Dollar_valuation: -24.7718052738337
  }
  const RandCountryData = {
    Country: "Norway",
    Date: "2016-01-01",
    Local_price: 46.8,
    Dollar_ex: 8.97465,
    Dollar_price: 5.21468803797363,
    Dollar_PPP: 9.49290060851927,
    Dollar_valuation: 5.77460523273075
  }
  expect(shallow(<RandResult 
          data={mockData}
          randomCountryData={RandCountryData}
          />)).toMatchSnapshot;
})