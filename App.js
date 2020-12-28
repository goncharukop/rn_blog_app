import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthorScreen } from './src/screens/AuthorScreen';
import { MainScreen } from './src/screens/MainScreen';
import { PostScreen } from './src/screens/PostScreen';

export default function App() {
  const [showedPost, setShowedPost] = useState(null);  
  const [author, setAuthor] = useState(null);

  let content = <MainScreen getPost={setShowedPost} getAuthorPosts={setAuthor}/>;

  if (showedPost) {
    content = (
      <PostScreen
        post={showedPost}
        hidePost={setShowedPost}
        getAuthor={setAuthor}
      />
    )
  }

  if (author) {
    content = (
      <AuthorScreen
        author={author}
        getAuthorPosts={setAuthor}
        getPost={setShowedPost}
      />
    )
  }

  return (
    <View style={styles.container}>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
