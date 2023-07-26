```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import apiService from '../services/apiService';

const BudgetPlanner = () => {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    const fetchBudget = async () => {
      const response = await apiService.analyzeSpending();
      setBudget(response.data);
    };

    fetchBudget();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalized Budget</Text>
      {budget ? (
        Object.keys(budget).map((category, index) => (
          <View key={index} style={styles.budgetItem}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.amount}>${budget[category]}</Text>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  budgetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BudgetPlanner;
```