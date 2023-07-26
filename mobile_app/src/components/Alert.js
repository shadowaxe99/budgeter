import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import apiService from '../services/apiService';

const Alert = () => {
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await apiService.getAlerts();
        if (response.data) {
          setAlertMessage(response.data.message);
        }
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.alertText}>{alertMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  alertText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Alert;