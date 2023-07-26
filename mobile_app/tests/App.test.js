```javascript
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('home screen renders correctly', () => {
  const homeScreen = renderer.create(<App screen="homeScreen" />).toJSON();
  expect(homeScreen).toMatchSnapshot();
});

test('account screen renders correctly', () => {
  const accountScreen = renderer.create(<App screen="accountScreen" />).toJSON();
  expect(accountScreen).toMatchSnapshot();
});

test('transaction screen renders correctly', () => {
  const transactionScreen = renderer.create(<App screen="transactionScreen" />).toJSON();
  expect(transactionScreen).toMatchSnapshot();
});

test('goal screen renders correctly', () => {
  const goalScreen = renderer.create(<App screen="goalScreen" />).toJSON();
  expect(goalScreen).toMatchSnapshot();
});

test('subscription screen renders correctly', () => {
  const subscriptionScreen = renderer.create(<App screen="subscriptionScreen" />).toJSON();
  expect(subscriptionScreen).toMatchSnapshot();
});

test('referral screen renders correctly', () => {
  const referralScreen = renderer.create(<App screen="referralScreen" />).toJSON();
  expect(referralScreen).toMatchSnapshot();
});
```