import React from 'react';
import { View } from 'react-native';
import { PostsList } from '../components/PostsList';

export const MainScreen = ({ getPost }) => {
  return (
    <View>
      <PostsList getPost={getPost} />
    </View>
  );
}
