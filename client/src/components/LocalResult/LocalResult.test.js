import { shallow } from 'enzyme';
import React from 'react';
import LocalResult from './LocalResult';

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
  expect(shallow(<LocalResult 
          data={mockData}
          />)).toMatchSnapshot;
})