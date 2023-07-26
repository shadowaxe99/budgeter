```javascript
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to AI Personal Budgeter!</Text>
      <Button
        title="Link Account"
        onPress={() => navigation.navigate('AccountScreen')}
      />
      <Button
        title="Track Expenses"
        onPress={() => navigation.navigate('TransactionScreen')}
      />
      <Button
        title="Set Financial Goals"
        onPress={() => navigation.navigate('GoalScreen')}
      />
      <Button
        title="Analyze Expenses"
        onPress={() => navigation.navigate('ExpenseAnalyzer')}
      />
      <Button
        title="Subscribe for Premium Features"
        onPress={() => navigation.navigate('SubscriptionScreen')}
      />
      <Button
        title="Partner Referrals"
        onPress={() => navigation.navigate('ReferralScreen')}
      />
    </View>
  );
};

export default HomeScreen;
```