import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
// import ReactDOM from 'react-dom';
import App from 'App';

afterEach(cleanup);

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders a message', () => {
  const { getByText, getByTitle } = render(<App />);
  expect(getByText('HERE')).toBeInTheDocument();
});
