import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { createStore, compose } from "redux";
import myReducers from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(myReducers);

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/List todo/i);
  expect(linkElement).toBeInTheDocument();  
});
