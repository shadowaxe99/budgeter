import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import GoalSetter from '../components/GoalSetter';
import apiService from '../services/apiService';
import securityUtils from '../utils/securityUtils';

const GoalScreen = () => {
  const [goal, setGoal] = useState('');
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    const response = await apiService.getGoals();
    const secureResponse = securityUtils.decryptData(response);
    setGoal(secureResponse.goal);
    setStrategies(secureResponse.strategies);
  };

  const handleSetGoal = async () => {
    const response = await apiService.setGoal(goal);
    const secureResponse = securityUtils.decryptData(response);
    setGoal(secureResponse.goal);
    setStrategies(secureResponse.strategies);
  };

  return (
    <View>
      <Text>Set Your Financial Goals</Text>
      <TextInput
        placeholder="Enter your goal"
        value={goal}
        onChangeText={setGoal}
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
      <GoalSetter strategies={strategies} />
    </View>
  );
};

export default GoalScreen;