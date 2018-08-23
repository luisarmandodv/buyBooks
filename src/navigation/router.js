import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, Text, TouchableOpacity, View, Platform } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';

export const Root = StackNavigator(
  {
    welcomeScreen: {
      screen: WelcomeScreen
    }
  },
  {
    headerMode: 'none'
  }
);
