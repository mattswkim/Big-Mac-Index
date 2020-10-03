import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('<App />', () => {
  it('expect to render Footer component', () => {
    expect(shallow(<App />)).toMatchSnapshot;
  })
})
