import { shallow } from 'enzyme';
import BookList from './BookList';

//Mock for use navigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Book List Page', () => {
  it('can render the Book List page', () => {
    const component = shallow(<BookList />);
    expect(component).toMatchSnapshot();
  });
});
