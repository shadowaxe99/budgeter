import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import TransactionScreen from './screens/TransactionScreen';
import GoalScreen from './screens/GoalScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import ReferralScreen from './screens/ReferralScreen';

import config from './config';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={config.homeScreen}>
        <Stack.Screen name={config.homeScreen} component={HomeScreen} />
        <Stack.Screen name={config.accountScreen} component={AccountScreen} />
        <Stack.Screen name={config.transactionScreen} component={TransactionScreen} />
        <Stack.Screen name={config.goalScreen} component={GoalScreen} />
        <Stack.Screen name={config.subscriptionScreen} component={SubscriptionScreen} />
        <Stack.Screen name={config.referralScreen} component={ReferralScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}