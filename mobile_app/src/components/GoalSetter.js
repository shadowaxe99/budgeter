import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import apiService from '../services/apiService';

const GoalSetter = () => {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');

  const handleSetGoal = async () => {
    try {
      const response = await apiService.setGoal(goal, amount);
      if (response.status === 200) {
        alert('Goal set successfully');
      } else {
        alert('Failed to set goal');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Set Your Financial Goal</Text>
      <TextInput
        placeholder="Goal"
        onChangeText={text => setGoal(text)}
        value={goal}
      />
      <TextInput
        placeholder="Amount"
        onChangeText={text => setAmount(text)}
        value={amount}
        keyboardType="numeric"
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
    </View>
  );
};

export default GoalSetter;