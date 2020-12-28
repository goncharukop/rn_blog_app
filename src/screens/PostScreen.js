import React from 'react';
import { View } from 'react-native';
import { PostDetails } from '../components/PostDetails';

export const PostScreen = ({ post, hidePost, getAuthor }) => {
  
  return (
    <View>
      <PostDetails
        post={post}
        hidePost={hidePost}
        getAuthor={getAuthor}
      />
    </View>
  )
};
