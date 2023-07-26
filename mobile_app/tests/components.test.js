```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import ExpenseTracker from '../src/components/ExpenseTracker';
import BudgetPlanner from '../src/components/BudgetPlanner';
import Alert from '../src/components/Alert';
import GoalSetter from '../src/components/GoalSetter';
import ExpenseAnalyzer from '../src/components/ExpenseAnalyzer';
import Subscription from '../src/components/Subscription';
import Referral from '../src/components/Referral';

describe('Components Testing', () => {
  test('ExpenseTracker renders correctly', () => {
    const { getByTestId } = render(<ExpenseTracker />);
    expect(getByTestId('expenseTracker')).toBeTruthy();
  });

  test('BudgetPlanner renders correctly', () => {
    const { getByTestId } = render(<BudgetPlanner />);
    expect(getByTestId('budgetPlanner')).toBeTruthy();
  });

  test('Alert renders correctly', () => {
    const { getByTestId } = render(<Alert />);
    expect(getByTestId('alert')).toBeTruthy();
  });

  test('GoalSetter renders correctly', () => {
    const { getByTestId } = render(<GoalSetter />);
    expect(getByTestId('goalSetter')).toBeTruthy();
  });

  test('ExpenseAnalyzer renders correctly', () => {
    const { getByTestId } = render(<ExpenseAnalyzer />);
    expect(getByTestId('expenseAnalyzer')).toBeTruthy();
  });

  test('Subscription renders correctly', () => {
    const { getByTestId } = render(<Subscription />);
    expect(getByTestId('subscription')).toBeTruthy();
  });

  test('Referral renders correctly', () => {
    const { getByTestId } = render(<Referral />);
    expect(getByTestId('referral')).toBeTruthy();
  });
});
```