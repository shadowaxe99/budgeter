import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Transaction } from '../components/ExpenseTracker';
import apiService from '../services/apiService';

const TransactionScreen = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await apiService.getTransactions();
    setTransactions(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <ScrollView>
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TransactionScreen;