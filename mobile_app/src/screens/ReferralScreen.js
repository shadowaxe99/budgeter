```javascript
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { refer } from '../services/apiService';
import { user } from '../config';

const ReferralScreen = () => {
  const [referralEmail, setReferralEmail] = useState('');

  const handleRefer = async () => {
    try {
      const response = await refer(user, referralEmail);
      if (response.success) {
        alert('Referral sent successfully!');
      } else {
        alert('Failed to send referral. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Refer a friend and earn rewards!</Text>
      <TextInput
        placeholder="Enter friend's email"
        onChangeText={text => setReferralEmail(text)}
        value={referralEmail}
      />
      <Button title="Refer" onPress={handleRefer} />
    </View>
  );
};

export default ReferralScreen;
```