import React from 'react';
import { shallow } from 'enzyme';
import Note from './note.component';

it('renders Note Component', () => {
  const note = "my text";
  const removeNote = jest.fn();
  const wrapper = shallow(<Note note={note} removeNote={removeNote} />);
  expect(wrapper).toMatchSnapshot();
});