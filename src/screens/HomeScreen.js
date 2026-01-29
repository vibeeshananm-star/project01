import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Home</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}
