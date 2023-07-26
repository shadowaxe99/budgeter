import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import apiService from '../services/apiService';
import { user, account } from '../config';

const AccountScreen = () => {
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    fetchAccountData();
  }, []);

  const fetchAccountData = async () => {
    const response = await apiService.getAccountData(user, account);
    setAccountData(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      {accountData ? (
        <View>
          <Text style={styles.text}>Account Name: {accountData.name}</Text>
          <Text style={styles.text}>Account Balance: {accountData.balance}</Text>
          <Text style={styles.text}>Account Type: {accountData.type}</Text>
          <Button title="Update Account" onPress={fetchAccountData} />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default AccountScreen;