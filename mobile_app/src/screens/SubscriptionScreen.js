import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { subscribe } from '../services/apiService';
import config from '../config';

const SubscriptionScreen = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState('Not Subscribed');

  const handleSubscription = async () => {
    try {
      const response = await subscribe(config.subscriptionPlanId);
      if (response.status === 200) {
        setSubscriptionStatus('Subscribed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription</Text>
      <Text style={styles.status}>Status: {subscriptionStatus}</Text>
      <Button title="Subscribe" onPress={handleSubscription} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  status: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default SubscriptionScreen;