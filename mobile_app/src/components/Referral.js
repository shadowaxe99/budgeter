import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';
import apiService from '../services/apiService';
import securityUtils from '../utils/securityUtils';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('');

  const handleReferral = async () => {
    try {
      const encryptedCode = securityUtils.encryptData(referralCode);
      const response = await apiService.refer(encryptedCode);
      Alert.alert('Success', response.message);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setReferralCode}
        value={referralCode}
        placeholder="Enter Referral Code"
      />
      <Button title="Refer" onPress={handleReferral} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default Referral;