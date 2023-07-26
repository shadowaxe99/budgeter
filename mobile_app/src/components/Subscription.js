import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import apiService from '../services/apiService';
import config from '../config';

const Subscription = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState('Not Subscribed');

  const subscribe = async () => {
    try {
      const response = await apiService.subscribe(config.user);
      if (response.status === 200) {
        setSubscriptionStatus('Subscribed');
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Subscription</Text>
      <Text style={styles.status}>Status: {subscriptionStatus}</Text>
      <Button title="Subscribe" onPress={subscribe} />
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Subscription;