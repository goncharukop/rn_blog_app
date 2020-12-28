import React from 'react';
import { View } from 'react-native';
import { PostsList } from '../components/PostsList';

export const MainScreen = ({ getPost, getAuthorPosts }) => {
  return (
    <View>
      <PostsList
        getPost={getPost}
        getAuthorPosts={getAuthorPosts}
      />
    </View>
  );
}
