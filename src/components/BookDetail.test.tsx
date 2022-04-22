import { shallow } from 'enzyme';
import * as React from 'react';
import BookDetail from './BookDetail';

//Mock for use location
const mockedUsedLocation = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => mockedUsedLocation,
}));

describe('Book Detail Page', () => {
  it('render header', () => {
    expect(shallow(<BookDetail />).find('#authors').length).toEqual(1);
  });
  it('renders a email input', () => {
    expect(shallow(<BookDetail />).find('#download_count').length).toEqual(1);
  });
  it('renders a message input', () => {
    expect(shallow(<BookDetail />).find('#bookshelves').length).toEqual(1);
  });
  it('renders a submit button', () => {
    expect(shallow(<BookDetail />).find('#subjects').length).toEqual(1);
  });
  it('can render the Book Detail page', () => {
    const component = shallow(<BookDetail />);
    expect(component).toMatchSnapshot();
  });
});
