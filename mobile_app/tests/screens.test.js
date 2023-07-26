```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import HomeScreen from '../src/screens/HomeScreen';
import AccountScreen from '../src/screens/AccountScreen';
import TransactionScreen from '../src/screens/TransactionScreen';
import GoalScreen from '../src/screens/GoalScreen';
import SubscriptionScreen from '../src/screens/SubscriptionScreen';
import ReferralScreen from '../src/screens/ReferralScreen';

describe('Screen rendering tests', () => {
  test('HomeScreen renders correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('homeScreen')).toBeTruthy();
  });

  test('AccountScreen renders correctly', () => {
    const { getByTestId } = render(<AccountScreen />);
    expect(getByTestId('accountScreen')).toBeTruthy();
  });

  test('TransactionScreen renders correctly', () => {
    const { getByTestId } = render(<TransactionScreen />);
    expect(getByTestId('transactionScreen')).toBeTruthy();
  });

  test('GoalScreen renders correctly', () => {
    const { getByTestId } = render(<GoalScreen />);
    expect(getByTestId('goalScreen')).toBeTruthy();
  });

  test('SubscriptionScreen renders correctly', () => {
    const { getByTestId } = render(<SubscriptionScreen />);
    expect(getByTestId('subscriptionScreen')).toBeTruthy();
  });

  test('ReferralScreen renders correctly', () => {
    const { getByTestId } = render(<ReferralScreen />);
    expect(getByTestId('referralScreen')).toBeTruthy();
  });
});
```