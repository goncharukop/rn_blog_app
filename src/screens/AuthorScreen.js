import React from 'react';
import { View } from 'react-native';
import { Author } from '../components/Author';

export const AuthorScreen = ({ author, getAuthorPosts, getPost }) => {
  
  return (
    <View>
      <Author
        author={author}
        getAuthorPosts={getAuthorPosts}
        getPost={getPost}
      />
    </View>
  )
};
