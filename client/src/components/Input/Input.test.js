import { shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

it('expect to render Input component', () => {
  const mockContry = "United States";
  expect(shallow(<Input country={mockContry}/>)).toMatchSnapshot;
})