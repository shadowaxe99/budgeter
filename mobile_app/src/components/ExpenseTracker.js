```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import apiService from '../services/apiService';

const ExpenseTracker = () => {
  const [expense, setExpense] = useState({ category: '', amount: 0 });
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await apiService.getExpenses();
    setExpenses(response.data);
  };

  const handleInputChange = (field, value) => {
    setExpense({ ...expense, [field]: value });
  };

  const handleTrackExpense = async () => {
    const response = await apiService.trackExpense(expense);
    if (response.status === 200) {
      fetchExpenses();
      setExpense({ category: '', amount: 0 });
    }
  };

  return (
    <View>
      <Text>Expense Tracker</Text>
      <TextInput
        placeholder="Category"
        value={expense.category}
        onChangeText={(value) => handleInputChange('category', value)}
      />
      <TextInput
        placeholder="Amount"
        value={expense.amount.toString()}
        onChangeText={(value) => handleInputChange('amount', parseFloat(value))}
        keyboardType="numeric"
      />
      <Button title="Track Expense" onPress={handleTrackExpense} />
      {expenses.map((expense, index) => (
        <View key={index}>
          <Text>{expense.category}: {expense.amount}</Text>
        </View>
      ))}
    </View>
  );
};

export default ExpenseTracker;
```